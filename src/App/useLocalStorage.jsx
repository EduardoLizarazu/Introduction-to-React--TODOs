import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [synchronized, setSynchronized] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() =>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem =JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
          setSynchronized(true); // Estado original
        } catch (error) {
          setError(error);
        }
      }, 1000);
      // NO hacemos caso a la advertencia,
      // [item, setItem] no importa si se modifican, solo vamos a renderizar 1 vez
      // queremos que carge cuando haya un cambio en el estado synchronized
    }, [synchronized]);
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
    
    const synchronizeItem = () => {
       setLoading(true);
       setSynchronized(false);
    };

    return {
      item,
      saveItem,
      loading,
      error,
      synchronizeItem
    }
    
}

export { useLocalStorage };

