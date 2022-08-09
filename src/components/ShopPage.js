import { React, useState, useEffect } from "react";
import ShopCard from "./ShopCard";
import "./ShopPage.css";

const ShopPage = (props) => {
  const [cartItems, setCartItems] = useState(props.cartItems);

  const returnCards = (cartNo) => {
    let a = [];
    for (let i = 0; i < cartNo.length; i++) {
      a.push(
        <ShopCard
          cardName={`Item ${i + 1}`}
          desc="lorem ipsum lorem ipsum lorem ipsum"
          img="logo192.png"
          inCart={i}
          callfn={props.callfn}
          cartNo={cartNo}
        />
      );
    }
    return a;
  };

  useEffect(() => {
    setCartItems(props.cartItems);
  }, [props]);

  return <div id="shopContainer">{returnCards(cartItems)};</div>;
};

export default ShopPage;
