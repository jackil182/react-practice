import React from 'react';
import './Button.module.css'

const Button = ({value, action, className, id}) => {
    return (
        <button onClick={action} className={className} data-id={id}>{value}</button>
    );
};

export default Button;