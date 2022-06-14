import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaypalCheckoutButton from '../../components/paypal/PaypalCheckoutButton.component';
import './checkout.styles.scss';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const product = {
        description: "Thank you for shopping with us",
        price: useSelector(selectCartTotal)
    }
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)

    return(
        <div className='checkout-container'>
            <h2>Shopping Cart</h2>
            <div className='checkout-header'>
                <div className='header-block'>
                <span>Product</span>
                </div>
                <div className='header-block '>
                <span>Description</span>
                </div>
                <div className='header-block'>
                <span>Quantity</span>
                </div>
                <div className='header-block'>
                <span>Price</span>
                </div>
                <div className='header-block'>
                <span>Remove</span>
                </div>
            </div>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
             ))}
                <span className='total'>Subtotal: {cartTotal} OMR</span>
                <Link to='/shop'>
                <button className='continue-shopping-button' type="button">Continue Shopping</button>
                </Link>
            <div className='paypal-button-container'>
                <PaypalCheckoutButton product={product} />
            </div>
            </div>
    );
};

export default Checkout;