import React from "react";
import './TodoForm.css';

function TodoForm({ addToDo, setOpenModal } ) {
    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault(); // para que no se recarge la pagina
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={ onSubmit }>
            <label>Write a new ToDo</label>
            <textarea 
                value={ newToDoValue }
                onChange={ onChange }
                placeholder="Write a the ToDo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={ onCancel }
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };