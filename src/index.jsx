import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.jsx';
import './index.css';

// HOC
function App(props) {
  return (
    <h1>
      {props.greeting}, {props.name}!
    </h1>
  );
}

function withGreeting(WrappedComponent) {
  return function WrapperComponentWithGreeting(greeting) {
    return function trueComponent(props) {
      return (
        <>
          <WrappedComponent {...props} greeting={greeting} />
          <p>Estamos acompoñando al WrappedComponent</p>
        </>
      );
    }
  }
}

const AppWithGreeting = withGreeting(App)("Hello");


ReactDOM.render(
  <AppWithGreeting name="Eduardo"/>,
  // <App 
  //   greeting="Hello"
  //   name="Eduardo"
  // />,
  document.getElementById('root')
);


