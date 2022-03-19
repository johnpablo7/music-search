import { createContext, FC, useContext, useEffect, useState } from "react";

type TAuth = {
  auth: string;
  login: (token: string) => void;
  logout: () => void;
};

const NAMESPACE = "access_token";

export const AuthContext = createContext<TAuth>(null!);

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem(NAMESPACE) || "";
    setAuth(accessToken);
    setLoaded(true);
  }, []);

  const login = (accessToken: string) => {
    setAuth(accessToken);
    localStorage.setItem(NAMESPACE, accessToken);
  };

  const logout = () => login("");

  if (!loaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
