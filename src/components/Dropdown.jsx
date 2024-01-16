import { FaShoppingBag } from "react-icons/fa";
import Button from "./Button";
import { useCart } from "../providers/CartProvider.hook";

function Dropdown({ visible }) {
  const { get, add, remove, empty } = useCart();
  const cartItems = get();
  console.log(cartItems);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );

  return (
    <div
      className={`absolute pl-1 border-white pb-1 pr-1 w-[300px] top-[110%] bg-brown right-0 transition-all duration-500 flex flex-col gap-5 delay-75 text-lg
	${visible ? "translate-x-[-30px] w-" : "translate-x-[300px]"}
	${visible ? "opacity-100" : "opacity-0"}
        `}
    >
      <div className={`flex flex-col gap-3`}>
        <div className="grid place-items-center w-[100%] p-4 bg-brown">
          <FaShoppingBag />
        </div>

        {cartItems.map((cartItem) => {
          return (
            <div
              className={`flex justify-between items-center p-1 w-[100%] border-b border-white`}
            >
              <div className={`flex gap-1`}>
                <div>{cartItem.name}</div>
                <div className={`text-[.7rem] translate-y-[-5px] text-blue`}>
                  ({cartItem.count})
                </div>
              </div>
              <div className={`flex gap-2 p-1 justify-center items-center  `}>
                <button
                  onClick={() => remove(cartItem)}
                  className={`flex w-5 h-5 justify-center items-center rounded-sm bg-orange hover:scale-110 transition-all duration-100 active:scale-75`}
                >
                  -
                </button>
                <button
                  onClick={() => add(cartItem)}
                  className={`flex w-5 h-5 justify-center items-center rounded-sm bg-orange hover:scale-110 transition-all duration-100 active:scale-75`}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-[4rem] bg-white">
        <p className={`absolute text-black bottom-4 right-4 `}>
          {totalPrice ? `Total: ${totalPrice} kr` : `Cart is empty`}
        </p>
        ;
        <div className="absolute bottom-4 left-4 text-brown ">
          <Button onClick={empty}>Empty Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
