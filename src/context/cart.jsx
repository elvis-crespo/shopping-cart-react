import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //check if product is already in cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    //if in cart, increment quantity with structured clone
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //if not in cart, add to cart
    setCart(prevState => ([
        ...prevState,
        {
          ...product,
          quantity: 1,
        },
      ])
    );
  };

  const removeFromCart = product =>{
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
