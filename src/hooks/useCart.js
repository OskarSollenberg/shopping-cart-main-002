// import { useState } from "react";

// export default function useCart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [count, setCount] = useState(0);

//   const get = () => {
//     return cartItems;
//   };

//   const add = (product, quantity = 1) => {
//     addRemoveFromCart(product, -quantity);
//   };

//   const remove = (product, quantity = 1) => {
//     addRemoveFromCart(product, quantity);
//   };

//   const addRemoveFromCart = (product, quantity) => {
//     const { id } = product;
//     // this does nothing ?
//     let foundItemInCart = false;
//     //     const { price } = id;

//     const cart = cartItems.map((d) => {
//       // Why do we always want to create new variables ?
//       let newCount = d.count;

//       if (d.id === id) {
//         // this does nothing ?
//         foundItemInCart = true;
//         // sets the count of the item to the eather +1 or -1
//         newCount = newCount + quantity;
//       }
//       return {
//         // sets the Array as it was but adds 1 or removes 1 from the count of that item
//         ...d,
//         count: newCount,
//       };
//     });

//     // If there is no item in the cart it adds the correct objects
//     if (!foundItemInCart && quantity > 0) {
//       cart.push({ id, count: quantity });
//     }

//     // Making sure that the cart contains items
//     const newCartWithItems = cart.filter((d) => d.count > 0);

//     setCartItems(newCartWithItems);
//   };
//   return {
//     get,
//     add,
//     remove,
//     count,
//   };
// }
