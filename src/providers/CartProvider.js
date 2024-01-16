import { useState } from "react";
import CartProviderContext from "./CartProvider.context";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]),
    [count, setCount] = useState(0);

  const get = () => {
    return cartItems;
  };

  const add = (product, quantity) => {
    addRemoveFromCart(product, (quantity = 1));
  };

  const remove = (product, quantity) => {
    addRemoveFromCart(product, (quantity = -1));
  };

  const empty = () => {
    setCartItems([]);
  };
  const addRemoveFromCart = (product, quantity) => {
    let foundItemInCart = false;
    const { id } = product;

    const cart = cartItems.map((d) => {
      let newCount = d.count;

      if (d.id === id) {
        foundItemInCart = true;
        newCount = newCount + quantity;
      }

      return {
        ...d,
        count: newCount,
      };
    });

    if (!foundItemInCart && quantity > 0) {
      cart.push({ id, count: quantity });
    }

    const readyCart = cart.filter((d) => d.count > 0);

    setCartItems(readyCart);
  };

  const value = {
    get,
    add,
    remove,
    empty,
    // count,
    // totalValue
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};
