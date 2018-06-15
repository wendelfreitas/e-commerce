import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as CategoriesActions } from '../ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao carregar menu !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
