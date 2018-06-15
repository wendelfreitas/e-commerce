import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as ItensActions } from '../ducks/itens';

export function* getItens(data = null) {
  try {
    const endpoint =
      data.payload.data != null ? `/category_products/${data.payload.id}` : '/products';
    const response = yield call(api.get, endpoint);
    yield put(ItensActions.getItensSuccess(response.data));
  } catch (err) {
    toast.error('Erro na listagem dos produtos desta categoria !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
