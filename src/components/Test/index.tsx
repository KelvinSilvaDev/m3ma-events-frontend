import { useEffect } from "react";
import api from "../../services/api";

export function TestFetch() {
  const fetchData = async () => {
    try {
      const response = await api.get("/users");
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>TESTANDO</div>;
}
