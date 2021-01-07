import React from "react";
import "./carticon.css";
import { ReactComponent as ShoppingIcon } from "../../assest/shoppingbag.svg";
import { toggleCartHidden } from "../redux/cart/CartAction";
import { connect } from 'react-redux'


const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
