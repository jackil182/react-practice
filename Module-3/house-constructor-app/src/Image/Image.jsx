import React, { Fragment } from 'react';
import style from './Image.module.css';

const Image = ({src, cardObj, price}) => {
  return (
    <Fragment>
      {cardObj.hasOwnProperty('children')
        ? <div className={style['image-block']}>
            <img src={src[0]} className={style.Image} alt='' />
            <p className={style.price}>{price}</p>
        </div>
        : <img src={src[0]} className={style.Image} alt='' />}
    </Fragment>
    // <p>{cardObj.hasOwnProperty('children') ? 'qqqq': 'weqwee'}</p>
  );
};

export default Image;