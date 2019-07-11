import produce from 'immer';

export default function products(state = [], action) {
  switch (action.type) {
    case '@products/FETCH_SUCCESS':
      return produce(state, draft => {
        draft.push(...action.products);
      });
    case '@cart/ADD_REQUEST':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.id);
        product.loading = true;
      });
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.product.id);
        product.loading = false;
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
    case '@cart/UPDATE_AMOUNT_FAILURE':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.id);
        product.loading = false;
      });
    default:
      return state;
  }
}
