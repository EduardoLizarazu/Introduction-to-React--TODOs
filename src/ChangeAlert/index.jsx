import React from 'react';
import "./ChangeAlert.css";
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>It seems that you changed your TODOs in another page or browser window</p>
                    <p>You want to sync your TODOs?</p>
                    <button
                        className='TodoForm-button TodoForm-button--add'
                        onClick={() => toggleShow(false)}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        );
    } else { return null; }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


export { ChangeAlertWithStorageListener }