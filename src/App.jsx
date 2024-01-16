import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import Root from "./pages/Root";

function App() {
  function handleCartEmpty() {
    //     setCartItems([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root onCartEmpty={handleCartEmpty} />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
