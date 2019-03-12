import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({cart, isCartShow, toggleCart, removeFromCart}) => {
    return (
        //one way of displaying additional windows
        // <div className={isCartShow ? "Cart__hidden Cart" : "Cart__hidden" }> 

        //another way of displaying (use ternary in Wrapper)
        <div className="Cart__hidden Cart">
            <span className="close" onClick={toggleCart}>X</span>
            <ul className="cart__list">
                {cart.map(el => <CartItem item = {el} key = {el.title} removeFromCart = {removeFromCart} />)}
            </ul>
            <div className="total-price">Your total is: {cart.reduce((acc, el) => acc + el.price, 0)} UAH</div>
        </div>
    );
};

export default Cart;