import React from 'react'
import { ToDoContext } from '../TodoContext';
import "./TodoFilterButton.css";
function TodoFilterButton() {
  const { filterCompletedToDos, toggleFilter } = React.useContext(ToDoContext);

 
  return (
    <div className='container'>
        <button onClick={filterCompletedToDos}>
          <span className={`icon-filter icon-filter${toggleFilter ? "--on" : "--off"}`}></span>
        </button>
    </div>
  );
}

export {TodoFilterButton};


