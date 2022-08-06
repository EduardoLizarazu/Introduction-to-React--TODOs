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
// import { ChangeAlertWithStorageListener } from "../ChangeAlert";
import { ChangeAlert } from "../ChangeAlert";

function App() {  
  const { states, stateUpdaters } = useTodos();
  
  const {
    loading,
    error,
    totalToDos,
    searchValue,
    searchedToDos, 
    completeToDo,
    openModal,
    completedToDos,
  } = states;
  const { 
    addToDo,
    setSearchValue,
    setOpenModal,
    deleteToDo,
    synchronizeTodos
   } = stateUpdaters;

  return (
    <React.Fragment>
        {/* React.cloneElement and React.Children */}
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalToDos={totalToDos}
                completedToDos={completedToDos}
                // loading={loading}
                />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                // loading={loading}
            />
        </TodoHeader>

         {/*Render Props  */}
        <TodoList
            error={error}
            loading={loading}
            searchedToDos={searchedToDos}
            totalToDos={totalToDos}
            searchText={searchValue}
            onError={() => <ToDosError />}
            onLoading={() => <ToDosLoading />}
            onEmptyTodos={() => <EmptyToDos />}
            onEmptySearchResults={
                (searchText) => <p>There are no results for {searchText} </p>
            }
            // render={toDo => (<TodoItem 
            //     key={toDo.text} 
            //     text={toDo.text}
            //     completed={toDo.completed} 
            //     onComplete={ () => completeToDo(toDo.text)}
            //     onDelete={ () => deleteToDo(toDo.text)}
            // />)}
        >
            {toDo => (<TodoItem 
                key={toDo.text} 
                text={toDo.text}
                completed={toDo.completed} 
                onComplete={ () => completeToDo(toDo.text)}
                onDelete={ () => deleteToDo(toDo.text)}
            />)}
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
        
        <ChangeAlert
            synchronize={synchronizeTodos}
        />
    </React.Fragment>
  );
}

export default App;
