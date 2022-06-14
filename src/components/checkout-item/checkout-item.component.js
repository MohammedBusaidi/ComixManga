//the items in the checkout page.
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';


import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));


    return( 
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='sign' onClick={removeItemHandler}>
                &#45;
                </div>
                <span className='value'>{quantity}</span>
                <div className='sign' onClick={addItemHandler}>
                &#43;
                </div>
                </span>
            <span className='price'>{price} OMR</span>
            <div className='remove-button' onClick={clearItemHandler} >&#10005;</div>
        </div>
    )
}

export default CheckoutItem;