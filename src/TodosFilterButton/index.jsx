import React from 'react'
import { ToDoContext } from '../TodoContext';
import "./TodoFilterButton.css";
function TodoFilterButton() {
  const { filterCompletedToDos } = React.useContext(ToDoContext);

 
  return (
    <div>
        <button onClick={filterCompletedToDos}>Filter Completed</button>
    </div>
  );
}

export {TodoFilterButton};


