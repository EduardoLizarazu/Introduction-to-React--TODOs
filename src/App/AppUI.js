import { render } from "@testing-library/react";
import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI({
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo,
}) {
    return (
        <React.Fragment>
            <TodoCounter 
                total={ totalToDos }
                completed={ completedToDos }
            />
            <TodoSearch 
                searchValue={ searchValue }
                setSearchValue={ setSearchValue }
            />
            <TodoList>
                { searchedToDos.map(toDo => (
                <TodoItem 
                    key={toDo.text} 
                    text={toDo.text}
                    completed={toDo.completed} 
                    onComplete={ () => completeToDo(toDo.text)}
                    onDelete={ () => deleteToDo(toDo.text)}
                />
                )) }
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };