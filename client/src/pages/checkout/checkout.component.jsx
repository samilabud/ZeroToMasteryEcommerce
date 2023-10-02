import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import PaymentForm from "../../components/payment-form/payment-form.component";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button-component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Producto</span>
            </div>
            <div className='header-block'>
                <span>Descripcion</span>
            </div>
            <div className='header-block'>
                <span>Cantidad</span>
            </div>
            <div className='header-block'>
                <span>Precio</span>
            </div>
            <div className='header-block'>
                <span>Remover</span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem=> <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>
        <div className='test-warning'>
            *Please use the following credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </div>
        <StripeCheckoutButton price={cartTotal} />
        {/* <PaymentForm /> */}
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);