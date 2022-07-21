import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [infoBook, setInfoBook] = useState({
    isbn: localStorage.getItem(`isbn`)
  });

  return (
    <Context.Provider
      value={{
        infoBook,
        setInfoBook,
      }}
    >
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;