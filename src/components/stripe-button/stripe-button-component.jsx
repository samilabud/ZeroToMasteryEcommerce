import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IfAwgF7VDSpoZmOV8VtWIwE4hJOLce3ch0DPT5DkwR8Gm0g8DWhqqxGmI3qkSywYrnGEbdIbhaNNXpbTTpzWgGO00J2aOGAhi';
    //const secretkey = 'sk_test_51IfAwgF7VDSpoZmO90Kbmy03DFqIOQxE6r6niC190Z79kp94GJIILU8bGTjlFlOIN9TD4LTxdaoFCeQ3HzkPLXiw00sifdGSKj';
    const onToken = token => {
        console.log(token);
        alert('Pago satisfactorio');
    }
    return (
        <StripeCheckout
            label='Paga ahora'
            name='SamCrownCommerce'
            billingAddress
            shippingAddress
            image='https://www.flaticon.es/svg/vstatic/svg/91/91202.svg?token=exp=1618283036~hmac=e99a82c8578aee272351bec471b3b27d'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pague ahora'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;