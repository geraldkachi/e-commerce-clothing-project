import React from "react";
import "./carticon.css";
import { ReactComponent as ShoppingIcon } from "../../assest/shoppingbag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={()=>{}} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
