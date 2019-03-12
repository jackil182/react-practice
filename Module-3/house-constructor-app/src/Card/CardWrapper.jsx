import React from 'react';
import style from './CardWrapper.module.css';

const CardWrapper = ({markup}) => {
    return (
        <div className={style.CardWrapper}>
            {markup.map(el => <article className={style.Card}>{el}</article>)}
        </div>
    );
};

export default CardWrapper;