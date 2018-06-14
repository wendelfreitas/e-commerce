import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ProductActions } from '../ducks/product';

export function* getProduct(data) {
  try {
    const response = yield call(api.get, `/products/${data.payload.id}`);
    console.log(response);
    yield put(ProductActions.getProductSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
