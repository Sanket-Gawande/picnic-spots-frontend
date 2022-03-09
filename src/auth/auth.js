import React, { useState, createContext, useContext, useEffect } from "react";

const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [userIn, setUser] = useState(null);

  const [userDetails, setUserDetails] = useState({});
  /*  check localstore if user is logged in , token exist */
  useEffect(async () => {
    
    const token = await localStorage.getItem("_user_token_");
    setUser(token);
  }, []);

  function login(user) {
    setUser(user);
  }
  function logout() {
    const prefix = localStorage.getItem("_user_auth_prefix_");
    const token = localStorage.setItem(prefix + "_user_token_" , null);
    setUser(null);
  }
  function user() {
    return { userIn};
  }
  return (
    <userContext.Provider value={{ user, login, logout  }}>
      {children}
    </userContext.Provider>
  );
};

export function useAuth() {
  return useContext(userContext);
}
