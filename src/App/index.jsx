import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal";
import { ToDosError } from "../TodosError";
import { ToDosLoading } from "../TodosLoading";
import { EmptyToDos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";

function App() {  
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
    addToDo
  } = useTodos();
  
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
                <TodoForm 
                  addToDo={addToDo}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        ) }
        
        <CreateTodoButton 
            setOpenModal={ setOpenModal }
        />
    </React.Fragment>
  );
}

export default App;
