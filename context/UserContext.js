import React, { useContext, useEffect, useState } from "react";
import { getFirebaseRB } from "../firebase";

export const UserContext = React.createContext();

export const UserContextProvider = ({ children, marca }) => {
  const [client, setClient] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(`carrito${marca}`);
    if(data != null){
      setCarrito(JSON.parse(data));
    }
    return () => {};
  }, []);

  return <UserContext.Provider value={{client, setClient, carrito, setCarrito}}>{children}</UserContext.Provider>;
};
