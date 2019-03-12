import React from 'react';
import './Button.css';

const Button = ({value, action, className}) => {
    return (
        <button onClick={action} className={className}>{value}</button>
    );
};

export default Button;