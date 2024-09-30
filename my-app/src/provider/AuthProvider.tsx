import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

interface AuthContextType {
  token: string;
  setToken: (newToken: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  token: "",
  setToken: () => {},
});

const AuthProvider = ({ children } : { children: ReactNode }) => {
  const [token, setToken_] = useState(localStorage.getItem("token") || "");

  const setToken = (newToken: string) => {
    setToken_(newToken);
    localStorage.setItem("token", newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;