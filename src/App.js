import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import './App.css';
// el identificador que tiene que ser diferente es el texto
const defaultToDos = [
  { text: "cut onion", completed: false },
  { text: "Take course of intro to React", completed: false },
  { text: "Cry with the Crybaby", completed: true },
  { text: "Fuck!", completed: false },
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
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
    // toDos[toDoIndex] = {
    //   text: toDos[toDoIndex].text,
    //   completed: true,
    // }
    setToDos(newToDo);
  };
  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDo = [...toDos];
    newToDo.splice(toDoIndex, 1);
    setToDos(newToDo);
  };

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

export default App;
