import Product from "./Product";
import { products } from "../data";
import { Link } from "react-router-dom";

function Store({ onAdd }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="text-[3rem] mt-10 text-center">Duck Store</h1>
      <div
        className={`grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4 mt-10 `}
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
