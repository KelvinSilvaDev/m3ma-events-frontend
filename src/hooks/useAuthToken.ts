import { useState } from "react";

const TOKEN_KEY = "auth_token";

export function useAuthToken() {
  const [token, setTokenState] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY)
  );

  const setToken = (newToken: string) => {
    localStorage.setItem(TOKEN_KEY, newToken);
    setTokenState(newToken);
  };

  const getToken = () => {
    return token;
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    setTokenState(null);
  };

  return { setToken, getToken, removeToken };
}
