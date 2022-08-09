import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div id="homeContainer">
      <p>Welcome to ShopperMan, go buy something.</p>
      <button id="toShop">
        <Link to={"/shop"} className="linkHome">
          Go to Shop
        </Link>
      </button>
    </div>
  );
};

export default Home;
