import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";
const ToDoContext = React.createContext();

function ToDoProvider(props) {
    const {
        item : toDos, 
        saveItem: saveToDos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
    
      const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
      const totalToDos = toDos.length;
    
      let searchedToDos = [];
      // varificamos si los usuario escribieron algon en el input
      if (!searchValue.length >= 1) {
        searchedToDos = toDos;
      } else {
        searchedToDos = toDos.filter(toDo =>{
          const toDoText = toDo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return toDoText.includes(searchText);
        });
      }
    
    
      
    
      const completeToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    
        const newToDo = [...toDos];
        newToDo[toDoIndex].completed = true;
        saveToDos(newToDo);
      };
    
      const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
        const newToDo = [...toDos];
        newToDo.splice(toDoIndex, 1);
        saveToDos(newToDo);
      };
    
      // console.log('Render (antes del use effect)');
      // // Async
      // React.useEffect(() => {
      //   console.log('use effect');
      // }, [totalToDos]);
      // console.log('Render (despues del use effect)');
    
    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos, 
            completeToDo,
            deleteToDo
        }}>
            { props.children }
        </ToDoContext.Provider>
    );
}


export { ToDoContext, ToDoProvider };