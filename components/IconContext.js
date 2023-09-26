import React, { createContext, useContext } from "react";

const IconContext = createContext();

export const useIconContext = () => useContext(IconContext);

export const IconProvider = ({ borderColor, children, color, size }) => (
  <IconContext.Provider value={{ borderColor, color, size }}>
    {children}
  </IconContext.Provider>
);
