import React from "react";
import Nav from "./Nav";
import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ viewCart, setViewCart }: PropsType) {
  // extract the values from the CartContext
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Red Basket</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
}

export default Header;
