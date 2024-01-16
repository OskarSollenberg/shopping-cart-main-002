import Cart from "./Cart";
import { useState } from "react";

import { GiDuck } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-brown min-h-[70px] w-screen flex justify-between items-center text-[2em] sticky top-0 z-10 border-black text-white ">
      <div className={`ml-[5rem] items-center opacity-0`}>
        <GiDuck style={{ width: "2rem" }} />
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={` absolute top-5 left-5 flex ml-[5rem] `}
      >
        {showMenu ? <CgCloseR /> : <GiHamburgerMenu />}
      </button>

      <nav
        className={` flex gap-10 text-[1.5rem] items-center transition-h duration-700 ease-in-out
        ${showMenu ? "h-screen" : "h-[70px]"}
	${showMenu ? "translate-y-[-100%]" : "translate-x-0"}
        ${showMenu ? "delay-300" : "delay-300"}
        ${showMenu ? "overflow-hidden" : "overflow-visible"}
       `}
      >
        <Link to={`/`}>
          <a
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
            className={`hidden md:flex underline underline-offset-4 transition-all hover:decoration-orange duration-100 
		`}
            href="#"
          >
            Store
          </a>
        </Link>
        <Link to={`/`}>
          <a
            onClick={() => window.scrollTo({ top: "800", behavior: "smooth" })}
            className={` hidden md:flex underline underline-offset-4 transition-all hover:decoration-orange duration-100
		`}
            href="#"
          >
            Section 1
          </a>
        </Link>
        <Link to={`/`}>
          <a
            onClick={() => window.scrollTo({ top: "1600", behavior: "smooth" })}
            className={`hidden md:flex underline underline-offset-4 hover:decoration-orange duration-100 origin-left

	    `}
            href="#"
          >
            Section 2
          </a>
        </Link>
      </nav>
      <div
        className={`mr-[5rem]  transition-all duration-700 ease-in-out 
        ${showMenu ? "translate-x-[1000%]" : "translate-x-0"}
        ${showMenu ? "delay-0" : "delay-500"}

      `}
      >
        <Cart />
      </div>
    </div>
  );
}

export default Header;
