import React from 'react';

function withStorageListener(WrapperComponent) {
    return function WrapperComponentWithStorageListener(props) {
        
        const [storageChange, setStorageChange] = React.useState(false);
        
        return (
            <WrapperComponent 
                show={storageChange}
                toggleShow={setStorageChange}
            />
        );
    }
}

export { withStorageListener }