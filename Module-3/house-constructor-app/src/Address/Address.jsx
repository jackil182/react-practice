import React from 'react';
import style from './Address.module.css';

const Address = ({address}) => {
    return (
        <div className={style.Address}>{address}</div>
    );
};

export default Address;