import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root({ cartItems, onCartEmpty, onAdd, onRemove }) {
  return (
    <>
      <Header
        onRemove={onRemove}
        onAdd={onAdd}
        onCartEmpty={onCartEmpty}
        cartItems={cartItems}
      />
      <Outlet />
    </>
  );
}

export default Root;
