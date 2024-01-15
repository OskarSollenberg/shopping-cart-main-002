import Product from "./Product";
import { Link } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

function Store({ onAdd }) {
  const { products } = useGetProducts();
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="text-[3rem] mt-10 text-center">Duck Store</h1>
      <div
        className={`grid grid-rows-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4 mt-10 `}
      >
        {products.map((product) => {
          return (
            <div>
              <Link to={`/Product/${product.id}`} key={product.id}>
                <Product
                  itemPageActive={false}
                  product={product}
                  onAdd={onAdd}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
