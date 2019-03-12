import React from 'react';
import { NavLink } from 'react-router-dom';

import './Form.css';
import Button from '../Button/Button';

const Form = ({
  text,
  inputChange,
  formSubmit,
  showAllTasks,
  showCompleted,
  showIncomplete,
  match,
}) => {
  return (
    <div className="top">
      <form className="Form" onSubmit={formSubmit}>
        <input
          className="Form__task"
          type="text"
          name="text"
          value={text}
          placeholder="Enter your task"
          onChange={inputChange}
        />
        <input
          className="Form__btn btn"
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
      <div className="button-wrapper">
        <NavLink to='/'
           className="btn filter__btn"
            onClick={showAllTasks}
          >Show All
        </NavLink>
        <NavLink to='/completed'
           className="btn filter__btn"
            onClick={showCompleted}
          >Show Completed
        </NavLink>
        <NavLink to='/incomplete'
           className="btn filter__btn"
            onClick={showIncomplete}
          >Show Incomplete
        </NavLink>
      </div>
    </div>
  );
};

export default Form;
