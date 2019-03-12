import React from 'react';

import './Button.css';

const Button = ({value, id, action, className}) => {
    return (
        <button onClick={action} data-id={id} className={className}>
            {value}
        </button>
    );
};

export default Button;