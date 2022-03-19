import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    // const onClickButton = () => alert("Modal!");
    const onClickButton = (msg) => alert(msg);

    return (
        <button 
            className="CreateTodoButton"
            // onClick={onClickButton}
            onClick={() => onClickButton("With a Parameter")}
        >
            +
        </button>
    );
}

export { CreateTodoButton };