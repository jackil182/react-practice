import React from 'react';

import './Form.css';
import Button from '../Button/Button';

const Form = ({text, inputChange, formSubmit, showAllTasks, showCompleted, showIncomplete}) => {
    return (
        <div className="top">
            <form className="Form"  onSubmit={formSubmit}>
                <input className="Form__task" type="text" name="text" value={text} placeholder="Enter your task" onChange={inputChange} />
                <input className="Form__btn btn " type="submit" name="submit" value="Submit"/>
            </form>
            <div className="button-wrapper">
                <Button action={showAllTasks} className="btn filter__btn" value="Show All"  />
                <Button action={showCompleted} className="btn filter__btn" value="Show Completed" />
                <Button action={showIncomplete} className="btn filter__btn" value="Show Incomplete" />
            </div>
        </div>
    );
};

export default Form;