import React from "react";

function TodoHeader({ children, loading }) {
    // De esta forma siempre nos devolvera un array de los componentes
    // children y podemos trabajar ya con mas de uno.

    return (
        <header>
            {/* cloneElement solo sabe trabajadar con un component,
            por eso nos va a ayudar React.Children */}
            {/* { React.cloneElement(children, { loading }) } */}
            
            { 
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading })) 
            }
        </header>
    );
}

export { TodoHeader }