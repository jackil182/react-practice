import React from 'react';

import './CartItem.css';

const CartItem = ({item, removeFromCart}) => {
    return (
        <li className="cart__item">
            <span className="item__close" onClick={removeFromCart} data-name={item.title}>X</span>
            <p className="item__name">{item.title}</p>
            <p className="item__price">{item.price}</p>
        </li>
    );
};

export default CartItem;