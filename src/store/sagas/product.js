import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as ProductActions } from '../ducks/product';

export function* getProduct(data) {
  try {
    const response = yield call(api.get, `/products/${data.payload.id}`);
    yield put(ProductActions.getProductSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao carregar produto !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
