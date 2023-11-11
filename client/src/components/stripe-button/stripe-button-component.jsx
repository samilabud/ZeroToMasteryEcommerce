import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const backendURL = process.env.BACKEND_URL ? process.env.BACKEND_URL : '';
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IfAwgF7VDSpoZmOV8VtWIwE4hJOLce3ch0DPT5DkwR8Gm0g8DWhqqxGmI3qkSywYrnGEbdIbhaNNXpbTTpzWgGO00J2aOGAhi';
    //const secretkey = 'sk_test_51IfAwgF7VDSpoZmO90Kbmy03DFqIOQxE6r6niC190Z79kp94GJIILU8bGTjlFlOIN9TD4LTxdaoFCeQ3HzkPLXiw00sifdGSKj';
    const onToken = () => {
        axios({
            url: `${backendURL}payment`,
            method: 'post',
            data:{
                amount: priceForStripe,
            }
        }).then(response=> {
            alert('Payment Successful')
        }).catch(error=>{
            console.log('Payment error: ' + JSON.parse(error));
            alert("there was an issue with you payment. Please sure you use the provide credit card");
        })
    }
    return (
        <StripeCheckout
            label='Pay now'
            name='SamCrownCommerce'
            billingAddress
            shippingAddress
            image='https://samilabud.netlify.app/favicon.ad688fa5.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;