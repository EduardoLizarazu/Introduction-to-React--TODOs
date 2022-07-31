import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>There was a change</p>
                <button
                    onClick={() => toggleShow(false)}
                >
                    Reload the page
                </button>
            </div>
        );
    } else { return null; }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


export { ChangeAlertWithStorageListener }