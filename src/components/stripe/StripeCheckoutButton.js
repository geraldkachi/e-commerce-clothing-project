import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I9cEOEyNQ2VyEbI9zZUQvDSbWHMYsLiK6CcSzUjCp66dhUS7SfXG4SMnpGOtsmQWKYN0vtFiYv4M0ywpfo1am2l00uizJ4aiR";


    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ikoojo-Clothing "
      shippingAddress
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};


// A default test credit card => {
// 4242 4242 4242 4242 
// Expo: 01/20   --  CVV 123
// }

export default StripeCheckoutButton;
