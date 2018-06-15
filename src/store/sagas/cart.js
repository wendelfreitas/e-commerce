import { Creators as CartActions } from '../ducks/cart';

export function cartAdd(response) {
  CartActions.CartAdd(response.data);
}

export function cartRemove(response) {
  CartActions.CartRemove(response.data);
}

export function editProductQuantity(product, quantity) {
  CartActions.productQuantity(product, quantity);
}
