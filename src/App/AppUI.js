import { render } from "@testing-library/react";
import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { ToDoContext } from "../TodoContext";

function AppUI(
//     {
//     loading,
//     error,
//     totalToDos,
//     completedToDos,
//     searchValue,
//     setSearchValue,
//     searchedToDos,
//     completeToDo,
//     deleteToDo,
// }
) {
    return (
        <React.Fragment>
            <TodoCounter 
                // total={ totalToDos }
                // completed={ completedToDos }
            />
            <TodoSearch 
                // searchValue={ searchValue }
                // setSearchValue={ setSearchValue }
            />
            <ToDoContext.Consumer>
                { ({
                    error, 
                    loading, 
                    searchedToDos, 
                    completedToDos, 
                    deleteToDo
                }) => (
                    <TodoList>
                        { loading && <p>Loading...</p> }
                        { error && <p>Error...</p> }
                        { (!loading && !searchedToDos.length) && <p>Write your first TODO!</p> }
                        { searchedToDos.map(toDo => (
                        <TodoItem 
                            key={toDo.text} 
                            text={toDo.text}
                            completed={toDo.completed} 
                            onComplete={ () => completedToDos(toDo.text)}
                            onDelete={ () => deleteToDo(toDo.text)}
                        />
                        )) }
                    </TodoList>
                ) }
            </ToDoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };