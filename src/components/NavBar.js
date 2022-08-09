import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav>
      <h1 id="logo">
        <Link to={"/"} className="link">
          ShopperMan
        </Link>
      </h1>
      <h2>
        <Link to={"/"} className="link">
          Home
        </Link>
      </h2>
      <h2>
        <Link to={"/shop"} className="link">
          Shop
        </Link>
      </h2>
      <h2 className="link" onClick={props.cartFn}>
        Cart
      </h2>
    </nav>
  );
};

export default NavBar;
