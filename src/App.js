import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import './App.css';

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
        { searchedToDos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
          />
        )) }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
