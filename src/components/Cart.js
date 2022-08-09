import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const returnCards = (cartNo) => {
    let a = [];
    for (let i = 0; i < cartNo.length; i++) {
      a.push(<p>{`Item ${i + 1}    x${cartNo[i]}`}</p>);
    }
    return a;
  };

  return (
    <div id="cart" className={props.classCurrent}>
      {returnCards(props.cartItems)}
      <button onClick={props.cartFn}>Close Cart</button>
    </div>
  );
};

export default Cart;
