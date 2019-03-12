import React from 'react';
import ListItem from '../ListItem/ListItem';

import './List.css';

const filteredTasks = (arr, filterState) => {
  return arr.filter(el =>
    typeof filterState === 'boolean' ? el.completed === filterState : el
  );
};

const List = ({
  taskArr,
  deleteTask,
  toggleEdit,
  editTask,
  inputChange,
  cancelEdit,
  submitEdit,
  editedInput,
  doTask,
  filter
}) => {
  return (
    <ul className="List">
      {filteredTasks(taskArr, filter).map(el => (
        <ListItem
          task={el}
          key={el.id}
          deleteTask={deleteTask}
          toggleEdit={toggleEdit}
          editTask={editTask}
          inputChange={inputChange}
          cancelEdit={cancelEdit}
          submitEdit={submitEdit}
          editedInput={editedInput}
          doTask={doTask}
        />
      ))}
    </ul>
  );
};

export default List;
