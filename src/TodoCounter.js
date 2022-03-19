import React from "react";
import './TodoCounter.css';

// const styles = {
//     color: 'red',
//     backgroundColor: 'yellow',
// };

function TodoCounter() {
    return (
        // <h2 style={styles}>Has Completed 2 of 3 ToDos</h2>
        <h2 className="TodoCounter">Has Completed 2 of 3 ToDos</h2>
    );
}

export { TodoCounter };