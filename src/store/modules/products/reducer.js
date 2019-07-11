import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  isFetching: false,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@products/FETCH_REQUEST':
      return produce(state, draft => {
        draft.isFetching = true;
      });
    case '@products/FETCH_SUCCESS':
      return produce(state, draft => {
        draft.products = action.products;
        draft.isFetching = false;
      });
    case '@cart/ADD_REQUEST':
      return produce(state, draft => {
        const product = draft.products.find(p => p.id === action.id);
        product.loading = true;
      });
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const product = draft.products.find(p => p.id === action.product.id);
        product.loading = false;
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
    case '@cart/UPDATE_AMOUNT_FAILURE':
      return produce(state, draft => {
        const product = draft.products.find(p => p.id === action.id);
        product.loading = false;
      });
    default:
      return state;
  }
}
