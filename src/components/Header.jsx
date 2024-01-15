import Cart from "./Cart";
import { GiDuck } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header({ cartItems, onCartEmpty, onAdd, onRemove }) {
  return (
    <div className="bg-brown min-h-[70px] w-screen flex justify-between items-center text-[2em] sticky top-0 z-10 border-black text-white">
      <div className={`flex items-center gap-[10rem]`}>
        <div className={`ml-[5rem] min-h-[70px] grid items-center`}>
          <GiDuck style={{ width: "2rem" }} />
        </div>
        <nav className={`flex gap-10 text-[1.5rem]  `}>
          <Link to={`/`}>
            <a
              onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
              className={`underline underline-offset-4 transition-all hover:scale-110 hover:decoration-orange duration-100 origin-left`}
              href="#"
            >
              Store
            </a>
          </Link>
          <Link to={`/`}>
            <a
              onClick={() =>
                window.scrollTo({ top: "800", behavior: "smooth" })
              }
              className={`underline underline-offset-4 hover:scale-110 transition-all hover:decoration-orange duration-100 origin-left`}
              href="#"
            >
              Section 1
            </a>
          </Link>
          <Link to={`/`}>
            <a
              onClick={() =>
                window.scrollTo({ top: "1600", behavior: "smooth" })
              }
              className={`underline underline-offset-4 hover:scale-110 transition-all hover:decoration-orange duration-100 origin-left`}
              href="#"
            >
              Section 2
            </a>
          </Link>
        </nav>
      </div>
      <div className={`mr-[5rem]`}>
        <Cart
          onRemove={onRemove}
          onAdd={onAdd}
          onCartEmpty={onCartEmpty}
          cartItems={cartItems}
        />
      </div>
    </div>
  );
}

export default Header;
