import React from 'react';
import './Header.css'

const Header = ({cart, toggleCart}) => {
    return (
        <div>
            <header className="Header">
                <span className="goods-count">{cart.length}</span>
                <button className="cart" onClick={toggleCart}>Корзина</button>
            </header>
        </div>
    );
};

export default Header;