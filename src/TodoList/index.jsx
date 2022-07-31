import React from "react";
import './TodoList.css'
function TodoList(props) {
    const renderFunction = props.children || props.render;
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalToDos) && props.onEmptyTodos()}
            
            {(!!props.totalToDos && !props.searchedToDos.length) && props.onEmptySearchResults(props.searchText)}

            {/* {props.searchedToDos.map(props.render)} */}
            {/* {props.searchedToDos.map(props.children)} */}
            { (!props.error && !props.loading) && props.searchedToDos.map(renderFunction)}

        </section>
    );
}

export { TodoList };