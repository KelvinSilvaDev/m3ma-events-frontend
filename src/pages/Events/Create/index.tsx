import { useState } from "react";
// import api from "../../../services/api";
import axios from "axios";

interface EventDataProps {
  title: string;
  description: string;
  date: string; // você pode querer usar "Date" aqui, mas como é um campo de input do tipo "date", a string é o formato padrão retornado
  price: number;
}

export default function CreateEvents() {
  const [eventData, setEventData] = useState<EventDataProps>({
    title: "",
    description: "",
    date: "",
    price: 0,
  });
  const [image, setImage] = useState<File | null>(null);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   console.log("Submitting form data:", eventData);

  //   const formData = new FormData();
  //   Object.keys(eventData).forEach((key) => {
  //     formData.append(key, String(eventData[key as keyof EventDataProps]));
  //   });

  //   if (image) {
  //     formData.append("image", image);
  //   }

  //   try {
  //     console.log("Sending request...");

  //     console.log(formData);

  //     const response = await api.post("/events", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log("Response:", response);

  //     if (response.data && response.data.message) {
  //       alert(response.data.message);
  //     } else {
  //       alert("Evento criado com sucesso!");
  //     }
  //   } catch (error) {
  //     alert("Ocorreu um erro ao criar o evento.");
  //     console.error("Erro ao criar evento:", error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting form data:", eventData);

    const formData = new FormData();
    Object.keys(eventData).forEach((key) => {
      formData.append(key, String(eventData[key as keyof EventDataProps]));
    });

    if (image) {
      formData.append("image", image);
    }

    try {
      console.log("Sending request...");

      // Crie uma nova instância do Axios apenas para esta requisição
      const eventAxios = axios.create({
        baseURL: "http://localhost:3333", // Ajuste conforme necessário
        // baseURL: "https://m3ma-events-api.onrender.com/", // Ajuste conforme necessário
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const response = await eventAxios.post("/events", formData);

      console.log("Response:", response);

      if (response.data && response.data.message) {
        alert(response.data.message);
      } else {
        alert("Evento criado com sucesso!");
      }
    } catch (error) {
      alert("Ocorreu um erro ao criar o evento.");
      console.error("Erro ao criar evento:", error);
    }
  };

  return (
    <main className="h-full">
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-24">
        <h1 className="text-4xl font-bold mb-8">Criar um novo evento</h1>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Imagem do Evento:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Título:
            </label>
            <input
              type="text"
              value={eventData.title}
              onChange={(e) =>
                setEventData({ ...eventData, title: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Descrição:
            </label>
            <textarea
              value={eventData.description}
              onChange={(e) =>
                setEventData({ ...eventData, description: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Data:
            </label>
            <input
              type="date"
              value={eventData.date}
              onChange={(e) =>
                setEventData({ ...eventData, date: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Preço:
            </label>
            <input
              type="number"
              step="0.01"
              value={eventData.price}
              onChange={(e) =>
                setEventData({
                  ...eventData,
                  price: parseFloat(e.target.value),
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Criar Evento
          </button>
        </form>
      </div>
    </main>
  );
}
