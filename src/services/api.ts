import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", // Modifique para o URL de sua API, se for diferente
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepta requisições para anexar o token JWT no header de Authorization
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Supondo que você esteja armazenando o token JWT no localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
