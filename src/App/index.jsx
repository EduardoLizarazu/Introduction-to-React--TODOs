import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../TodoContext/index";

function App() {  
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
