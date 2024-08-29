import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import './Cart.css'
import { useCart } from "../hooks/useCart.js";

// eslint-disable-next-line react/prop-types
function CartItem({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt="xbox" />

      <div>
        <strong>${title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckbox = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label htmlFor={cartCheckbox} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckbox} type="checkbox" hidden />

      <aside className="cart">
        <ul>
            {
              cart.map(product => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  {...product}
                />
              ))
            }
            {/* <img src="/src/assets/xbox-s.jpg" alt="xbox" />

            <div>
              <strong>Xbox</strong> - $499.00
            </div>

            <footer>
              <small>Qty: 2</small>
              <button>+</button>
            </footer>
          </li> */}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
