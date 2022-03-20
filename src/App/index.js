import React from "react";
import { AppUI } from "./AppUI";

// el identificador que tiene que ser diferente es el texto
// const defaultToDos = [
//   { text: "cut onion", completed: false },
//   { text: "Take course of intro to React", completed: false },
//   { text: "Cry with the Crybaby", completed: true },
//   { text: "Fuck!", completed: false },
// ];


function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem =JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ]
}


function App() {
  const [toDos, saveToDos] = useLocalStorage('TODOS_V1', []);

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
    console.log(searchedToDos);
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


  return (
    <AppUI 
      totalToDos={ totalToDos }
      completedToDos={ completedToDos }
      searchValue={ searchValue }
      setSearchValue={ setSearchValue }
      searchedToDos={ searchedToDos }
      completeToDo={ completeToDo }
      deleteToDo={ deleteToDo }
    />
  );
}

export default App;
