import React, { createContext, useState } from "react";

export const Data = createContext();

function ContextData({ children }) {
  const [toggle, settoggle] = useState(false);

  return (
    <Data.Provider value={{ toggle, settoggle }}>{children}</Data.Provider>
  );
}

export default ContextData;
