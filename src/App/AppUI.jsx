import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { ToDoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { ToDosError } from "../TodosError";
import { ToDosLoading } from "../TodosLoading";
import { EmptyToDos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";

function AppUI() {

    const { 
        error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal,
        totalToDos, 
        completedToDos,
        searchValue, 
        setSearchValue,
     } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter 
                    totalToDos={totalToDos}
                    completedToDos={completedToDos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
                
            <TodoList>
                { error && <ToDosError error={error}/> }
                { loading && <ToDosLoading /> }
                { (!loading && !searchedToDos.length) && <EmptyToDos /> }
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
            
            { !!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            ) }
            
            <CreateTodoButton 
                setOpenModal={ setOpenModal }
            />
        </React.Fragment>
    );
}

export { AppUI };