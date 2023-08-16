/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Event } from "../../types/Event";
import { User } from "../../types/User"; // Presumindo que você tenha um tipo User
import { useAuth } from "../../contexts/AuthContext";
import { UserDetails } from "./UserDetails";

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<Event>();
  const [availableUsers, setAvailableUsers] = useState<User[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  const { user } = useAuth();

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await api.get(`/events/${eventId}`);
      const { data } = response;
      setEvent(data);
    };
    fetchEvent();
  }, [eventId]);

  useEffect(() => {
    if (user && (user.role === "ADMIN" || user.role === "MANAGER")) {
      const fetchAvailableUsers = async () => {
        try {
          const response = await api.get("/users"); // Presumindo que esta rota retorna todos os usuários
          const data = response.data.users;

          // Garantindo que event e event.participants existam
          // if (event && event.participants) {
          //   const nonParticipants = data.filter(
          //     (u: User) =>
          //       !event.participants.some(
          //         (participant) => participant.id === u.id
          //       )
          //   );
          //   setAvailableUsers(nonParticipants);
          // } else {
          //   setAvailableUsers(data);
          // }
          setAvailableUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
      fetchAvailableUsers();
    }
  }, [event, user, setAvailableUsers, visibleUsers]);

  useEffect(() => {
    const getusers = async () => {
      try {
        const response = await api.get(`/events/${eventId}/get-participants`);
        const data = response.data.users;
        setVisibleUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    // if (visible) {
    // }
    getusers();
  }, [eventId]);

  const handleAddParticipant = async () => {
    if (selectedUserId) {
      try {
        await api.post(`/events/${eventId}/add-participant`, {
          userId: selectedUserId,
        });
        alert("Participante adicionado com sucesso!");
        // Atualizar a lista de eventos ou redirecionar o usuário conforme necessário
      } catch (error) {
        alert("Erro ao adicionar participante.");
      }
    }
  };

  const handleParticipate = () => {
    if (event && user) {
      const formattedMessage = `Olá, eu gostaria de participar do evento ${event.title}. Meu nome é ${user.name} e meu e-mail é ${user.email}. Por favor, informe-me sobre os próximos passos!`;
      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappUrl = `https://wa.me/5511958378212?text=${encodedMessage}`;
      window.location.href = whatsappUrl;
    }
  };

  const handleShowParticipant = () => {
    setVisible(!visible);
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="min-h-screen bg-gray-100 flex justify-center items-center">
    //   <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-xl">
    //     <h1 className="text-2xl font-bold mb-4">Event Details</h1>
    //     {event ? (
    //       <>
    //         {/* Detalhes do Evento */}
    //         <div className="mb-4 space-y-2">
    //           <div>
    //             <strong>Title:</strong> {event.title}
    //           </div>
    //           <div>
    //             <strong>Description:</strong> {event.description}
    //           </div>
    //           <div>
    //             <strong>Date:</strong>{" "}
    //             {new Date(event.date).toLocaleDateString()}
    //           </div>
    //           <div>
    //             <strong>Price:</strong> ${event.price.toFixed(2)}
    //           </div>

    //           <div>
    //             <strong>Number of Participants:</strong> {event.participants}
    //           </div>
    //         </div>

    //         {/* Lista de Participantes */}
    //         {/* <div className="mb-4">
    //           <span className="font-semibold">Participantes: </span>
    //           <ul>
    //             {event.participants &&
    //               event.participants.map((participant: any) => (
    //                 <li key={participant.id}>
    //                   <UserDetails user={participant} />
    //                 </li>
    //               ))}
    //           </ul>
    //         </div> */}

    //         {/* Funções de Admin/Manager */}
    //         {event && user && user.role === "CUSTOMER" && (
    //           <button
    //             className="bg-green-500 text-white px-4 py-2 rounded mt-4"
    //             onClick={handleParticipate}
    //             // onClick={handleParticipation}
    //           >
    //             Participar do Evento
    //           </button>
    //         )}
    //         {user && (user.role === "ADMIN" || user.role === "MANAGER") && (
    //           <div className="space-y-4">
    //             <select
    //               className="border rounded p-2 w-full"
    //               value={selectedUserId}
    //               onChange={(e) => setSelectedUserId(e.target.value)}
    //             >
    //               <option value="" disabled>
    //                 Selecionar usuário
    //               </option>

    //               {availableUsers.map((user) => (
    //                 <option key={user.id} value={user.id}>
    //                   {user.name}
    //                 </option>
    //               ))}
    //             </select>

    //             <button
    //               className="bg-blue-500 text-white px-4 py-2 rounded w-full"
    //               onClick={handleAddParticipant}
    //             >
    //               Adicionar Participante
    //             </button>

    //             <button
    //               className="bg-blue-500 text-white px-4 py-2 rounded w-full"
    //               onClick={handleShowParticipant}
    //             >
    //               {visible ? "Esconder" : "Ver"} Participantes
    //             </button>
    //           </div>
    //         )}

    //         {/* Participantes Visíveis */}
    //         {visible &&
    //           visibleUsers.map((user) => (
    //             <UserDetails key={user.id} user={user} />
    //           ))}
    //       </>
    //     ) : (
    //       <div>Loading...</div>
    //     )}
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-radial from-gray-900 to-black pb-72 ">
      <div className="max-w-screen-lg mx-auto">
        {/* Banner do Evento */}
        <div className="mb-5 mt-24">
          <img
            src={`http://localhost:3333/public/${event.image}`}
            alt="Banner do Evento"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Header do evento */}
        {/* <div className="bg-gray-100 rounded-lg shadow-md p-8 mb-5">
        <h1 className="text-3xl font-bold mb-3">Nome do Evento</h1>
        <p className="text-xl mb-3">Data: 20 de Agosto, 2023</p>
        <p className="text-gray-600">Local: Teatro Municipal de São Paulo</p>
      </div> */}

        {/* Header do evento */}
        <div className="bg-gray-100 rounded-lg shadow-md p-8 mb-5">
          <h1 className="text-3xl font-bold mb-3">{event.title}</h1>
          <p className="text-xl mb-3">
            {new Date(event.date).toLocaleDateString()}
          </p>
          {/* <p className="text-gray-600">Local: Teatro Municipal de São Paulo</p> */}
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Descrição do evento */}
          <div className="bg-gray-100 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-5">Sobre o Evento</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>

          {/* Informações adicionais */}
          <div className="bg-gray-100 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-5">Informações Adicionais</h2>
            <ul className="space-y-3">
              {/* <li>
              <strong>Horário:</strong> 9:00 AM - 6:00 PM
            </li> */}
              <li>
                <strong>Preço:</strong> {event.price}
              </li>
              {/* <li>
              <strong>Palestrante Principal:</strong> Maria Silva
            </li> */}
              {/* Adicione outras informações conforme necessário */}
            </ul>
          </div>
        </div>

        {/* Call-to-action para compra de ingressos */}
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-200">
            Compre seu ingresso agora!
          </button>
        </div>
      </div>
    </div>
  );
}
