import React from "react";

function TodoItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{ props.text }</p>
        </li>
    );
}

export { TodoItem };