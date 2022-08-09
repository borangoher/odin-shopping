import { React, useState, useEffect } from "react";
import "./ShopCard.css";

const ShopCard = (props) => {
  const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    setCardInfo({
      cardName: props.cardName,
      cardDesc: props.desc,
      cardImg: props.img,
      numberInCart: props.inCart,
    });
  }, [props]);

  const incrementCount = (e) => {
    let itemNo = parseInt(
      e.target.parentNode.parentNode.children[1].textContent.split(" ")[1]
    );
    let tempArr = props.cartNo;
    tempArr[itemNo - 1] += 1;
    props.callfn(tempArr);
    setCardInfo({
      cardName: props.cardName,
      cardDesc: props.desc,
      cardImg: props.img,
      numberInCart: props.inCart,
    });
  };

  const decrementCount = (e) => {
    let itemNo = parseInt(
      e.target.parentNode.parentNode.children[1].textContent.split(" ")[1]
    );
    let tempArr = props.cartNo;
    if (tempArr[itemNo - 1] !== 0) {
      tempArr[itemNo - 1] -= 1;
    }
    props.callfn(tempArr);
    setCardInfo({
      cardName: props.cardName,
      cardDesc: props.desc,
      cardImg: props.img,
      numberInCart: props.inCart,
    });
  };

  return (
    <div id="cardContainer">
      <img src={cardInfo.cardImg} alt="item" />
      <h3>{cardInfo.cardName}</h3>
      <p>{cardInfo.cardDesc}</p>
      <div id="addCart">
        <button className="decrement" onClick={decrementCount}>
          -
        </button>
        <p id="numberInCard">{props.cartNo[props.inCart]}</p>
        <button className="increment" onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
