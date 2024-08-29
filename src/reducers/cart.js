//useReducer
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAN_CART: "CLEAN_CART",
}

// update localStorage with state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      //if in cart, increment quantity with structured clone
      if (productInCartIndex >= 0) {
        // const newState = structuredClone(state);
        // newState[productInCartIndex].quantity += 1;

        //using slice
        // const newState = [
        //   ...state.slice(0, productInCartIndex),
        //   {
        //     ...state[productInCartIndex],
        //     quantity: state[productInCartIndex].quantity + 1,
        //   },
        //   ...state.slice(productInCartIndex + 1),
        // ];
        const newState = state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        updateLocalStorage(newState);
        return newState;
      }

      //if not in cart, add to cart
      const newState = [
        ...state, //this is the old state
        {
          ...actionPayload, //this is the product
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id); //remove item from cart
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.CLEAN_CART: {
      updateLocalStorage([]);
      return [];
    }
  }
};
