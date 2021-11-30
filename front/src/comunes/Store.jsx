import React, {createContext, useReducer} from 'react';
import reducer from "./reducer.jsx"

const initialState = {
    todo: { list: [], item: {} },
    categoria:{ categoriaList: [], item: {}}
  };

const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default Store;
