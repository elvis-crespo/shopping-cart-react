import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import './Cart.css'
export function Cart() {
  const cartCheckbox = useId();
  return (
    <>
      <label htmlFor={cartCheckbox} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckbox} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="/src/assets/xbox-s.jpg" alt="xbox" />

            <div>
              <strong>Xbox</strong> - $499.00
            </div>

            <footer>
              <small>Qty: 2</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
