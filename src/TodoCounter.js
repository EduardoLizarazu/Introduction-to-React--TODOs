import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className="TodoCounter">Has Completed { completed } of { total } ToDos</h2>
    );
}

export { TodoCounter };