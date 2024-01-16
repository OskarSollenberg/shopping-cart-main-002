import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root({ onCartEmpty }) {
  return (
    <>
      <Header onCartEmpty={onCartEmpty} />
      <Outlet />
    </>
  );
}

export default Root;
