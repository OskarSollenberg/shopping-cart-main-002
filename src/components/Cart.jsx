import { useState } from "react";
import Dropdown from "./Dropdown";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../providers/CartProvider.hook";

function Cart() {
  const { get } = useCart();
  const cartItems = get();
  const [toggleDropdown, setoggleDropdown] = useState(false);
  let count = 0;
  cartItems.forEach((d) => {
    count += d.count;
  });

  return (
    <div>
      <div
        className={`relative p-4 flex items-center justify-center cursor-pointer transform-all duration-200 hover:scale-110 `}
        onClick={() => setoggleDropdown((prev) => !prev)}
      >
        <div>
          <FaShoppingCart style={{ width: "1.6rem" }} />
        </div>
        <div className=" ">
          <div className={` absolute text-[.7rem] top-[10px] text-blue `}>
            {count}
          </div>
        </div>
      </div>
      <Dropdown visible={toggleDropdown} />
    </div>
  );
}

export default Cart;
