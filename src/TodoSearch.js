import React, { Component } from "react";
import './TodoSearch.css';

// Work the State in the past
// // Now use React Hooks

// class Component extends React.Component {
//     constructor () {
//         this.state = {
//             ducky : 'Edward'
//         }
//     }

//     render() {
//         return (
//             <div onClick={() => this.setState('Jose')}>{this.state.ducky}</div>
//         );
//     }
// }

function TodoSearch() {
    // const [state, setState] = useState(initialState);
    const [searchValue, setSearchValue] = React.useState('');
    // [
    //     'Juan',
    //     setState()
    // ]
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };
    return [
        <input 
            className="TodoSearch" 
            placeholder="Write a new task"
            value={ searchValue }
            onChange={ onSearchValueChange }
        />,
        <p>{ searchValue }</p>
    ];
}
export { TodoSearch };