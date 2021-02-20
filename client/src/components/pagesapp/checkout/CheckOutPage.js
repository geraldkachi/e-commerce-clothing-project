import React from "react";
// import "./checkout.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/CartSelector";
import CkeckOutItem from "../../checkoutItem/CkeckOutItem";
import StripeCheckoutButton from "../../stripe/StripeCheckoutButton";
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from "./CheckOutPageStyled";
import PayStack from "../../paystack/PayStack";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CkeckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>Total: ${total}</TotalContainer>
    <WarningContainer>
      *Prease use the following test credit card for payments*
      <br/>
      4242 4242 4242 4224 - Exp: 01/20 - CVV: 123
    </WarningContainer>
     <div className="text-center">
     <StripeCheckoutButton price={total} />
     <PayStack />
     </div>
    </CheckoutPageContainer>
  );
};

const mapStateTopProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateTopProps)(CheckOutPage);



// heroku with react deployment bes practices
// heroku create ikoojo-clothing --buildpack https://github.com/mars/create-react-app-buildpack.git
// npm install react-paystack --save