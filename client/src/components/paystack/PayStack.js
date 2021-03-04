import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import axios from "axios"


const PayStack = ({price}) => {

  const priceForPayStack = price * 100;

  const config = {
    reference: (new Date()).getTime(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };
  
  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForPayStack,
        token,
      },
    })
      .then(res => alert("Payment sucessful"))
      .catch(err => {
        console.error("Payment error: ", JSON.parse(err));
        alert("There was an issue with your  payment. Please make sure you use the provided credit cart")
      })
  }

//////////////////

///////////////

const initializePayment = usePaystackPayment(config);
return (
  <div>
      <button onClick={() => {
          initializePayment(onSuccess, onClose, onToken)
      }}>Paystack Hooks Implementation</button>
  </div>
);
 
}

export default PayStack


// Fork it!
// Create your feature branch: git checkout -b feature-name
// Commit your changes: git commit -am 'Some commit message'
// Push to the branch: git push origin feature-name
// Submit a pull request 😉😉