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

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() =>{
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem =JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  }
  
}


function App() {
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
    <AppUI 
      loading={loading}
      error={error}
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
