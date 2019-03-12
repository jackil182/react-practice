import React from 'react';

import style from './Price.module.css';

const Price = ({price}) => {
    return (
        <div className={style.Price}>{price} UAH</div>
    );
};

export default Price;