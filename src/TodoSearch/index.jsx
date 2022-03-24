import React, { Component } from "react";
import { ToDoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(ToDoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };
    return (
        <input 
            className="TodoSearch" 
            placeholder="Write a new task"
            value={ searchValue }
            onChange={ onSearchValueChange }
        />
    );
}
export { TodoSearch };