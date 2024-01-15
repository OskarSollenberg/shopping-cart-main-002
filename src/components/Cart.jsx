import { useState } from "react";
import Dropdown from "./Dropdown";
import { FaShoppingCart } from "react-icons/fa";

function Cart({ cartItems, onCartEmpty, onAdd, onRemove, product }) {
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
      <Dropdown
        product={product}
        onRemove={onRemove}
        onAdd={onAdd}
        onCartEmpty={onCartEmpty}
        visible={toggleDropdown}
        cartItems={cartItems}
      />
    </div>
  );
}

export default Cart;
