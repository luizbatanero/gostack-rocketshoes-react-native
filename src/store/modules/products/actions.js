export function fetchProductsRequest(id) {
  return {
    type: '@products/FETCH_REQUEST',
    id,
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: '@products/FETCH_SUCCESS',
    products,
  };
}
