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
    default:
      return state;
  }
}
