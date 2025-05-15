import { SHOE_LIST } from '../constant';
import { CartItem } from './CartItem';

export function Cart({ cartItems }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-10 text-center">YOUR CART</h2>
      <ul className="space-y-4">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
