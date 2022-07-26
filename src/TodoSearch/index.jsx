import React, { Component } from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    };
    return (
        <input 
            className="TodoSearch" 
            placeholder="Search a Task"
            value={ searchValue }
            onChange={ onSearchValueChange }
        />
    );
}
export { TodoSearch };