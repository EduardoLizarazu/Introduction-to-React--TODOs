import React from 'react';

// function withStorageListener(WrapperComponent) {
//     return function WrapperComponentWithStorageListener(props) {
//         const [storageChange, setStorageChange] = React.useState(false);

//         window.addEventListener('storage', (change) => {
//             if (change.key === 'TODOS_V1') {
//                 console.log("There was a changed in TODO_V1");
//                 setStorageChange(true)
//             }
//         })

//         const toggleShow = () => {
//             props.synchronize();
//             setStorageChange(false);
//         };

//         return (
//             <WrapperComponent 
//                 show={storageChange}
//                 toggleShow={toggleShow}
//             />
//         );
//     }
// }



// Reack Hook 
function useStorageListener(synchronize) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log("There was a changed in TODO_V1");
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        // props.synchronize();----
        synchronize();
        setStorageChange(false);
    };

    return {
        show : storageChange,
        toggleShow
    }

}

export { useStorageListener }