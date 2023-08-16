// hooks/useUser.ts

import jwtDecode from "jwt-decode";

type UserType = {
  role: "ADMIN" | "MANAGER" | "CUSTOMER";
  // Adicione outras propriedades do payload do token conforme necessário
};

export function useUser(): UserType | null {
  const token = localStorage.getItem("authToken");

  console.log("Token from localStorage:", token);

  if (!token) {
    return null;
  }

  try {
    const decodedToken: UserType = jwtDecode(token);
    return decodedToken;
  } catch (err) {
    console.error("Failed to decode token:", err);
    return null;
  }
}
