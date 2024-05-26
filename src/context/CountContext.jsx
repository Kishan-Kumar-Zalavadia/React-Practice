import React, { createContext, useState } from "react";

// ! Create context
const CountContext = createContext(); 

// * Create for single feature

function CountProvider({ children }) {
  const [countDetails, setCountDetails] = useState({
    countFromContext: 10,
  });

  return (
    <CountContext.Provider value={countDetails}>
      {children}
    </CountContext.Provider>
  );
}
export { CountProvider, CountContext };
