import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShopPage from "./components/ShopPage";
import { React, useEffect, useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [cartClass, setCartClass] = useState("invis");

  useEffect(() => {
    setCartItems(cartItems);
  }, [cartItems]);

  const displayCart = () => {
    setCartClass("dim");
  };

  const hideCart = () => {
    setCartClass("invis");
  };

  return (
    <div className="App">
      <NavBar cartFn={displayCart} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/shop"
          element={<ShopPage cartItems={cartItems} callfn={setCartItems} />}
        />
      </Routes>
      <Cart cartItems={cartItems} cartFn={hideCart} classCurrent={cartClass} />
    </div>
  );
}

export default App;
