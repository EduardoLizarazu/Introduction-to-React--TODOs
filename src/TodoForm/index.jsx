import React from "react";
import { ToDoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newToDoValue, setNewToDoValue] = React.useState('');
    
    const [dispel, setDispel] = React.useState(false);
    const {
        addToDo,
        setOpenModal,
        openModal,
    } = React.useContext(ToDoContext);

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };

    const onCancel = () => {
        setDispel(true);
        setTimeout(() => {
            setOpenModal(false);
        }, 1000);
    };
    const onSubmit = (event) => {
        setDispel(true);
        event.preventDefault(); // para que no se recarge la pagina
        setTimeout(() => {
            addToDo(newToDoValue);
            setOpenModal(false);
        }, 1000);
    };
    return (
        <form onSubmit={ onSubmit } className={`${(!openModal || dispel) && "dispel"}`}>
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