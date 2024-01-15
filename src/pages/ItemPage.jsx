import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data";
import Product from "../components/Product";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ItemPage({ onAdd }) {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const foundItem = products.find((product) => {
      return product.id === +id;
    });
    setItem((prev) => foundItem);
  }, [id]);

  if (!item) return <div>Item not found</div>;

  const { description } = item;

  return (
    <div
      className={`flex flex-col justify-start items-center bg-white h-screen`}
    >
      <Link to={`/`}>
        <div className="absolute text-[3rem] left-20 top-32 text-orange animate-bounce active:animate-none border-brown rounded-lg border-2">
          <IoMdArrowRoundBack />
        </div>
      </Link>
      <div
        style={{ marginTop: "3rem", marginBottom: "2rem", fontSize: "2rem" }}
      >
        {description}
      </div>
      <Product itemPageActive={true} product={item} onAdd={onAdd} />
    </div>
  );
}
