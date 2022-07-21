import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [infoBook, setInfoBook] = useState({
    isbn: localStorage.getItem(`isbn`)
  });
  const [infoUser, setInfoUser] = useState({
    email: localStorage.getItem(`email`)
  });

  return (
    <Context.Provider
      value={{
        infoBook,
        setInfoBook,
        infoUser,
        setInfoUser,
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