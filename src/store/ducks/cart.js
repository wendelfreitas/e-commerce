export const Types = {
  CART_ADD: 'cart/CART_ADD',
};

const INITIAL_STATE = {
  data: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.CART_ADD:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  CartAdd: data => ({
    type: Types.CART_ADD,
    payload: { data },
  }),
};
