export const Types = {
  CART_ADD: 'cart/CART_ADD',
  CART_REMOVE: 'cart/CART_REMOVE',
  CART_LIST: 'cart/CART_LIST',
  PRODUCT_EDIT: 'cart/PRODUCT_EDIT',
};

const INITIAL_STATE = {
  data: [],
  error: false,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CART_ADD: {
      const index = state.data.findIndex(product => product.id === action.payload.data.id);
      if (state.data[index]) {
        return {
          ...state,
          error: true,
        };
      }
      const product = action.payload.data;
      product.quantity = 1;
      product.subtotal = product.price * product.quantity;
      return { ...state, data: [...state.data, product] };
    }
    case Types.CART_REMOVE: {
      const index = state.data.findIndex(product => product.id === action.payload.data.id);
      if (state.data[index]) {
        const products = state.data;
        products.splice(index, 1);
        return { ...state, data: products };
      }

      return { ...state };
    }
    case Types.PRODUCT_EDIT: {
      if (action.payload.quantity > 0) {
        const index = state.data.findIndex(product => product.id === action.payload.product.id);
        const products = state.data;
        const product = state.data[index];
        product.quantity = action.payload.quantity;
        product.subtotal = parseFloat(product.price * action.payload.quantity);
        products[index] = product;
        return { ...state, data: products };
      }
      return { ...state };
    }
    default:
      return state;
  }
}

export const Creators = {
  CartAdd: data => ({
    type: Types.CART_ADD,
    payload: { data },
  }),

  CartRemove: data => ({
    type: Types.CART_REMOVE,
    payload: { data },
  }),

  productQuantity: (product, quantity) => ({
    type: Types.PRODUCT_EDIT,
    payload: { product, quantity },
  }),
};
