import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
// import './App.css';

const toDos = [
  { text: "cut onion", completed: false },
  { text: "Take course of intro to React", completed: false },
  { text: "Cry with the Crybaby", completed: false },
]

function App(props) {
  // React necesita que solo enviemos una etiqueta, entoces creamos una etiqueta invisible para no llenarlo de div
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { toDos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        )) }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
