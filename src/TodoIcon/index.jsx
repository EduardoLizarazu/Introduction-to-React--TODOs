import React from "react";

function TodoIcon({ type, color, onClick }) {
    return (
        <span 
            className={ `Icon-container Icon-container--${type}` }
            onClick={ onClick }
        >
            {/* aqui deberia ir el SVG */}
        </span>
    );
}

export { TodoIcon };