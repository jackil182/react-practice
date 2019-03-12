import React from 'react';
import Button from '../Button/Button';

import './ListItem.css';

const ListItem = ({task, deleteTask, toggleEdit, editTask, cancelEdit, submitEdit, editInput, doTask,key}) => {
    return (
        <li className="ListItem">
            {task.edit 
                ? <input 
                    className="ListItem__input" 
                    type="text" 
                    value={editInput} 
                    onChange={editTask} 
                    name='editInput' /> 
                : <p className={task.completed ? "ListItem__text ListItem__text--completed" : "ListItem__text"} 
                    onClick={doTask}  data-id={task.id}>{task.text}</p>}
            
            <Button className="btn-edit waves-effect waves-light btn" id={task.id} value={task.edit ? "OK" : "Edit"} action={task.edit ? submitEdit : toggleEdit} />

            <Button className="btn-delete waves-effect waves-light btn" id={task.id} value={task.edit ? "Cancel" : "Delete"} action={task.edit ? cancelEdit : deleteTask} />

            {/* {task.edit 
                ? <button className="btn-edit" data-id={task.id} onClick={submitEdit}>OK</button> 
                : <button className="btn-edit" data-id={task.id} onClick={editTask}>Edit</button>}
            
            {task.edit 
                ? <button className="btn-delete" data-id={task.id} onClick={cancelEdit}>Cancel</button> 
                : <button className="btn-delete" data-id={task.id} onClick={deleteTask}>Delete</button>} */}
        </li >
    );
};

export default ListItem;