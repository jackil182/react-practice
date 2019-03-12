import React from 'react';
import PhoneItem from '../PhoneItem/PhoneItem';

import './PhoneList.css';

const PhoneList = ({phones, addToCart}) => {
    return (
        <div className="container">
            {phones.map(el => <PhoneItem phone = {el} key = {el.title} addToCart = {addToCart}/>)}
        </div>
    );
};

export default PhoneList;