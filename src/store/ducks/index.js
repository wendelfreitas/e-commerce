import { combineReducers } from 'redux';
import categories from './categories';
import itens from './itens';
import product from './product';
import cart from './cart';

export default combineReducers({
  categories, itens, product, cart,
});
