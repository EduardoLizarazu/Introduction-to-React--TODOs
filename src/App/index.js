import React from "react";
import { AppUI } from "./AppUI";

// el identificador que tiene que ser diferente es el texto
// const defaultToDos = [
//   { text: "cut onion", completed: false },
//   { text: "Take course of intro to React", completed: false },
//   { text: "Cry with the Crybaby", completed: true },
//   { text: "Fuck!", completed: false },
// ];

function App() {
  const localStorageToDos = localStorage.getItem('TODOS_V1');
  let parsedToDos;
  // Ver si en mi local storage hay info
  if (!localStorageToDos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos = [];
  } else {
    parsedToDos =JSON.parse(localStorageToDos);
  }

  const [toDos, setToDos] = React.useState(parsedToDos);
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


  const saveToDos = (newToDos) => {
    const stringifiedToDos = JSON.stringify(newToDos);
    localStorage.setItem('TODOS_V1', stringifiedToDos);
    setToDos(newToDos);
  };

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
