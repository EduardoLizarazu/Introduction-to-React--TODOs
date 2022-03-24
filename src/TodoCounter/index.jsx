import React from "react";
import { ToDoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalToDos, completedToDos } = React.useContext(ToDoContext);
    return (
        <h2 className="TodoCounter">Has Completed { completedToDos } of { totalToDos } ToDos</h2>
    );
}

export { TodoCounter };