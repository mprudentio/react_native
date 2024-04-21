import React, { createContext, useState, useContext } from 'react';

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [tempName, setTempName] = useState('');

  return (
    <NameContext.Provider value={{ tempName, setTempName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => useContext(NameContext);
