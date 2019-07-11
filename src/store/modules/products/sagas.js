import { call, delay, put, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

import { fetchProductsSuccess } from './actions';

function* fetchProducts() {
  yield delay(500);

  const response = yield call(api.get, `/products`);

  const data = response.data.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    loading: false,
  }));

  yield put(fetchProductsSuccess(data));
}

export default all([takeLatest('@products/FETCH_REQUEST', fetchProducts)]);
