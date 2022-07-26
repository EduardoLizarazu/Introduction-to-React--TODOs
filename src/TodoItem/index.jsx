import React from "react";
import { ToDoContext } from "../TodoContext";
import './TodoItem.css'
function TodoItem(props) {
    const { deleteAction } = React.useContext(ToDoContext);
    return (
        <li className={`TodoItem ${!!deleteAction && "delete--action"}`}>
            <span 
                className={ `Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                { props.text }
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };