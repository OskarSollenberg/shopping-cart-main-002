import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import Root from "./pages/Root";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item, quantity = 1) {
    addRemoveFromCart(item, quantity);
  }

  function handleRemoveFromCart(item, quantity = 1) {
    addRemoveFromCart(item, -quantity);
  }

  function addRemoveFromCart(item, quantity) {
    // this does nothing ?
    let foundItemInCart = false;
    const { id, price } = item;

    const cart = cartItems.map((d) => {
      // Why do we always want to create new variables ?
      let newCount = d.count;

      if (d.id === id) {
        // this does nothing ?
        foundItemInCart = true;
        // sets the count of the item to the eather +1 or -1
        newCount = newCount + quantity;
      }
      return {
        // sets the Array as it was but adds 1 or removes 1 from the count of that item
        ...d,
        count: newCount,
      };
    });

    // If there is no item in the cart it adds the correct objects
    if (!foundItemInCart && quantity > 0) {
      cart.push({ id, count: quantity, price });
    }

    // Making sure that the cart contains items
    const newCartWithItems = cart.filter((d) => d.count > 0);

    setCartItems(newCartWithItems);
  }

  function handleCartEmpty() {
    setCartItems([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Root
              onRemove={handleRemoveFromCart}
              onAdd={handleAddToCart}
              onCartEmpty={handleCartEmpty}
              cartItems={cartItems}
            />
          }
        >
          <Route index element={<HomePage onAdd={handleAddToCart} />}></Route>
          <Route
            path="/product/:id"
            element={<ItemPage onAdd={handleAddToCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
