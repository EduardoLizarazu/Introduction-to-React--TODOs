import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Antes se creaban clases para crear componentes
// class Componente extends React.Component {}

function App1() {
  return (
    // Esto es react vainilla
    // React.createElement("h1", { id: 'title'}, "React Vainilla")
    <h1 id='title'>
      Hello React
    </h1>
  );
}

// const e = React.createElement
// ReactDOM.render(e())


ReactDOM.render(
  <App greet='hello Parameter from attr'>
    Hello Parameter from Children
  </App>,
  document.getElementById('root')
);
