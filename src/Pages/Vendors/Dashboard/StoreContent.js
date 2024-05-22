import React, { createContext, useState } from 'react';

// Create the context
const StoreContext = createContext();

// Create the provider component
const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);

  const addStore = (store) => {
    setStores((prevStores) => [...prevStores, store]);
  };

  return (
    <StoreContext.Provider value={{ stores, addStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
