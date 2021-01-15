import React from "react";
import "./checkout.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/CartSelector";
import CkeckOutItem from "../../checkoutItem/CkeckOutItem";
import StripeCheckoutButton from "../../stripe/StripeCheckoutButton";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CkeckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Total: ${total}</div>
    <div className="test-warning">
      *Prease use the following test credit card for payments*
      <br/>
      4242 4242 4242 4224 - Exp: 01/20 - CVV: 123
    </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateTopProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateTopProps)(CheckOutPage);
