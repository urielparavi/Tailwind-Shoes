import { CartItem } from './CartItem';

export function Cart({ cartItems }) {
  console.log('The Cart run');
  return (
    <>
      <h2 className="text-2xl font-bold mb-10 text-center dark:text-white">
        YOUR BAG
      </h2>
      <ul className="space-y-4">
        {cartItems.map((cartItem) => (
          <li key={`${cartItem.product.id}-${cartItem.size}`}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
