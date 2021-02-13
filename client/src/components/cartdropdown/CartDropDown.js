import React from "react";
import { connect } from "react-redux";

import CartItem from "../cartItem/CartItem";
import CustomButton from "../customButton/CustomButton";
import {selectCartItems} from "../redux/cart/CartSelector"

import { withRouter } from "react-router-dom"

import { createStructuredSelector } from "reselect"


import { toggleCartHidden } from "../redux/cart/CartAction"

import "./cartdropdown.css";

const CartDropDown = ({ cartItems, history, dispatch}) => {

  const cartArrayItems = cartItems.length ? (
    cartItems.map(cartItem => (
      <CartItem key={cartItem.id} item={cartItem} />
      )
    )
  ) : (
    <span className="empty-message">Your cart is empty</span>
  )

  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {cartArrayItems}
      </div>
      <CustomButton onClick={() => 
        {history.push("/checkout");
        dispatch(toggleCartHidden())}
        }>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,

});

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state)
// });

export default withRouter(connect(mapStateToProps)(CartDropDown));
