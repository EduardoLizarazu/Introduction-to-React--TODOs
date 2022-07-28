import React from "react";
import './TodoList.css'
function TodoList(props) {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedToDos.length) && props.onEmptyTodos()}
            
            {props.searchedToDos.map(props.render)}

            <ul>
                { props.children }
            </ul>
        </section>
    );
}

export { TodoList };