import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { getCategories } from './categories';

import { Types as ItensTypes } from '../ducks/itens';
import { getItens } from './itens';

import { Types as ProductTypes } from '../ducks/product';
import { getProduct } from './product';

import { Types as CartTypes } from '../ducks/cart';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(ItensTypes.GET_REQUEST, getItens),
    takeLatest(ProductTypes.GET_REQUEST, getProduct),
    CartTypes.CART_ADD,
    CartTypes.CART_REMOVE,
    CartTypes.PRODUCT_EDIT,
  ]);
}
