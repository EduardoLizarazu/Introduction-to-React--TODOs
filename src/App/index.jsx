import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../TodoContext/index";

function App() {
  // Como pasar este State a todos mis componentes sin usar Context o Providers
  const [state, setState] = React.useState("Estado Comportido");
  return (
    <>
        <TodoHeader>
          <TodoCounter/>
          <TodoSearch />
        </TodoHeader>
        
        <TodoList>
          <TodoItem state={state} />
        </TodoList>
    </>
  );
}
function TodoHeader({ children }) {
  return (
    <>
      <header>
        { children }
      </header>
    </>
  );
}
function TodoList({ children }) {
  return (
    <section className="TodoList-container">
      { children }
    </section>
  );
}
function TodoCounter() {
  return <p>TodoCounter</p>;
}
function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}

// function App() {  
//   return (
//     <ToDoProvider>
//       <AppUI />
//     </ToDoProvider>
//   );
// }

export default App;
