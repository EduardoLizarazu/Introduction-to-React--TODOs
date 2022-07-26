import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalToDos, completedToDos }) {
    return (
        <h2 className="TodoCounter">Has Completed { completedToDos } of { totalToDos } ToDos</h2>
    );
}

export { TodoCounter };