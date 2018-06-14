export const Types = {
  GET_REQUEST: 'itens/GET_REQUEST',
  GET_SUCCESS: 'itens/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function itens(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS: {
      if (action.payload.data.products) {
        return { ...state, loading: false, data: action.payload.data.products };
      }
      return { ...state, loading: false, data: action.payload.data };
    }
    default:
      return state;
  }
}

export const Creators = {
  getItensRequest: id => ({ type: Types.GET_REQUEST, payload: { id } }),
  getItensSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
