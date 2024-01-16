import { useCart } from "../providers/CartProvider.hook";
import Button from "./Button";

function Product({ product, itemPageActive }) {
  const { name, price, image } = product;
  const { add } = useCart();

  return (
    <div
      className={`flex flex-col gap-5rounded-md justify-between items-center text-center p-4 bg-[#FFFFFF] border-brown border-4`}
    >
      <p>
        {name} - {price} SEK
      </p>
      <div className={`flex flex-col gap-2`}>
        <img
          className={` ${itemPageActive ? "w-[25vw]" : "w-[120px]"}`}
          src={image}
          alt={name}
        />
      </div>
      <Button
        onClick={() => {
          add(product);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default Product;
