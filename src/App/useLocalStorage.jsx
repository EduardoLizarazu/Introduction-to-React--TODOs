import React from "react";

function useLocalStorage(itemName, initialValue) {
  
  // UseReducer
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { 
    synchronizedItem,
    error,
    loading,
    item,
  } = state;

  // Action Creator
  const onError = (error) => dispatch({ 
    type : actionTypes.error, 
    payload : error 
  });
  const onSuccess = (item) => dispatch({ 
    type : actionTypes.success, 
    payload : item 
  });
  const onSave = (item) => dispatch({ 
    type : actionTypes.save, 
    payload : item 
  });
  const onSynchronize = () => dispatch({ 
    type : actionTypes.synchronize, 
  });

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

        onSuccess(parsedItem);

      } catch (error) {
        onError(error);
      }
    }, 1000);
    // NO hacemos caso a la advertencia,
    // [item, setItem] no importa si se modifican, solo vamos a renderizar 1 vez
    // queremos que carge cuando haya un cambio en el estado synchronizedItem
  }, [synchronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };
  
  // Estamos redundando, pero para mantener la estructura del return lo hacemos
  const synchronizeItem = () => onSynchronize();

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  }
}   

// Lo convertimos en funcion para que le afecte el hoisting y quede arriba
// para recibir el initialValue
const initialState = ({ initialValue }) => ({
  synchronizedItem : true,
  error : false,
  loading : true,
  item : initialValue,
});


const actionTypes = {
  error : 'ERROR',
  success : 'SUCCESS',
  save : 'SAVE',
  synchronize : 'SYNCHRONIZE',
};
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    synchronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    synchronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };

