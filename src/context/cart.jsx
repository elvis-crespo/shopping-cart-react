import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: "CLEAN_CART",
    });

  return { state, addToCart, removeFromCart, clearCart };
}

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   //check if product is already in cart
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  //   //if in cart, increment quantity with structured clone
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart);
  //     newCart[productInCartIndex].quantity += 1;
  //     return setCart(newCart);
  //   }

  //   //if not in cart, add to cart
  //   setCart(prevState => ([
  //       ...prevState,
  //       {
  //         ...product,
  //         quantity: 1,
  //       },
  //     ])
  //   );
  // };

  // const removeFromCart = product =>{
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([]);
  // };

  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
