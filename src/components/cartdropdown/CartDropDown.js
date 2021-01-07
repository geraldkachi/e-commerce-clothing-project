import React from "react";
import CartItem from "../cartItem/CartItem";
import CusttomButton from "../customButton/CusttomButton";
import "./cartdropdown.css";
import { connect } from "react-redux";

const CartDropDown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CusttomButton>GO TO CHECKOUT</CusttomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
