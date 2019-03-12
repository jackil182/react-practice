import React from 'react';
import style from './Area.module.css'

const Area = ({area}) => {
    return (
        <div className={style.Area}>{area} sq.m</div>
    );
};

export default Area;