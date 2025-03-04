import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const backendURL = import.meta.env.VITE_APP_BACKEND_URL
    ? import.meta.env.VITE_APP_BACKEND_URL
    : "";
  const priceForStripe = price * 100;
  const publishablekey = import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY;
  const onToken = () => {
    axios({
      url: `${backendURL}payment`,
      method: "post",
      data: {
        amount: priceForStripe,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: " + JSON.parse(error));
        alert(
          "there was an issue with you payment. Please sure you use the provide credit card"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="SamCrownCommerce"
      billingAddress
      shippingAddress
      image="https://samilabud.netlify.app/favicon.ad688fa5.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
