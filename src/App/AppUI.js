import { render } from "@testing-library/react";
import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { ToDoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI() {

    const { 
        error,
        loading,
        searchedToDos,
        completedToDos,
        deleteToDo,
        openModal,
        setOpenModal,
     } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                
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
            
            { !!openModal && (
                <Modal>
                    {/* se pregunta si existe */}
                    <p>{ searchedToDos[0]?.text }</p>
                    {/* <p>Funciona</p> */}
                </Modal>
            ) }
            
            <CreateTodoButton 
                openModal={ openModal }
                setOpenModal={ setOpenModal }
            />
        </React.Fragment>
    );
}

export { AppUI };