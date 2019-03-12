import React from 'react';

import './Form.css';

const Form = ({text, email, password, inputChange, formSubmit}) => {
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" className="text" name="text" placeholder="Enter your query" value={text} onChange={inputChange} />
                <input type="email" className="text" name="email" placeholder="Enter your email" value={email} onChange={inputChange} />
                <input type="password" className="text" name="password" placeholder="Enter your password" value={password} onChange={inputChange} />
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    );
};

export default Form;