import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header className='menu'>
            <ul className="Header__list">
                <li className="Header__item">
                    <NavLink className="Header__link" to='/'>Roadster</NavLink>
                </li>
                <li className="Header__item">
                    <NavLink className="Header__link" to='/modelS'>Model S</NavLink>
                </li>
                <li className="Header__item">
                    <NavLink className="Header__link" to='/modelX'>Model X</NavLink>
                </li>
                <li className="Header__item">
                    <NavLink className="Header__link" to='/user'>User</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;