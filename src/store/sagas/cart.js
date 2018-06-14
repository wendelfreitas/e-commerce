import { Creators as CartActions } from '../ducks/cart';

export function cartAdd(response) {
  CartActions.CartAdd(response.data);
}
