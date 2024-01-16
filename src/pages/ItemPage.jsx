import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import useGetProduct from "../hooks/useGetProduct";

export default function ItemPage() {
  const { id } = useParams();
  const { product } = useGetProduct(id);

  if (product)
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
          {`Best looking ${product.name} ever made!`}
        </div>
        <Product itemPageActive={true} product={product} />
      </div>
    );
}
