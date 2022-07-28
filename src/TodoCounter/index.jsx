import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalToDos, completedToDos, loading }) {
    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            Has Completed { completedToDos } of { totalToDos } ToDos
        </h2>
    );
}

export { TodoCounter };