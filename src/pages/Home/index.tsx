/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
// import { SwiperSection } from "../../components/Swiper";
import api from "../../services/api";
// import { Link } from "react-router-dom";
import M3ma from "../../assets/M3MA.svg";
import ApPhoto from "/space-image.jpg";
import Bg from "/bg.png";
import { Countdown } from "../../components/Countdown";
import { Link } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState<any[]>([]); // Inicializado como uma lista vazia para evitar problemas

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events"); // Certifique-se de que a rota está correta
        setEvents(response.data); // Supondo que a API devolva uma lista de eventos diretamente
      } catch (error) {
        console.error("Houve um erro ao buscar os eventos:", error);
        // Aqui você pode definir algum estado de erro se desejar mostrar uma mensagem ao usuário.
      }
    };

    fetchEvents();
  }, []);

  // console.log(events);

  return (
    <main className="bg-gradient-to-t h-full from-black to-gray-800 min-h-screen">
      {/* <img
        className="w-full max-h-[762px]"
        src="https://images.unsplash.com/photo-1514286969571-5142af56b991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      /> */}
      <section
        className={
          "bg-cover bg-no-repeat h-screen flex flex-col justify-between"
        }
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="text-center flex flex-col align-middle items-center w-full content-center justify-center p-10 gap-6 pt-36">
          <img
            src={M3ma}
            alt="M3MA Logo"
            // className="animate-jump-in animate-once animate-duration-[3000ms] animate-delay-500	"
            className="animate-ping animate-once animate-duration-[1500ms] animate-delay-700 	"
          />
          <div className="text-center text-white text-3xl font-normal animate-fade-right animate-once animate-duration-[1500ms] animate-delay-0">
            <strong>Bem vindos!</strong> Chegou a hora de nos conectarmos.
            <br />
            Conheça os eventos da igreja <strong>M3MA</strong>!
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.75)] h-50">
          <Countdown />
        </div>
      </section>
      <section>
        <div
          className="w-full bg-no-repeat bg-cover pt-24"
          style={{
            backgroundImage: `url(${ApPhoto})`,
            backgroundPositionY: "-170px",
          }}
        >
          {/* <img src={ApPhoto} alt="" /> */}
          <h1 className="text-center text-9xl font-bold break-words stroke-white stroke-1 fill-white text-white">
            EVENTOS
          </h1>

          <div className="flex gap-6 py-14 flex-wrap justify-center">
            {events.map((event) => {
              return (
                <Link
                  to={`/event/${event.id}`}
                  className=" w-46 max-w-[270px] min-w-[270px] rounded-lg overflow-hidden pt-44 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-cover"
                  key={event.id}
                  style={{
                    // backgroundImage: `url('https://m3ma-events-api.onrender.com/${event.image}')`,
                    backgroundImage: `url('http://localhost:3333/public/${event.image}')`,
                  }}
                >
                  <div
                    className="pt-8 h-32 p-4 bg-gray-900 "
                    // style={{
                    //   backgroundImage: `http://localhost:3333/public/${event.image}`,
                    // }}
                  >
                    {/* <img
                    className="w-full mb-4 rounded object-cover h-48"
                    src={`http://localhost:3333/public/${event.image}`}
                    alt={event.title}
                  /> */}
                    <h3 className="font-bold text-2xl mb-2 text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp h-16">
                      {event.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-500 text-base">
                        {new Date(event.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* <div className="flex flex-col mx-auto space-y-12">
        <section className="h-80 mb-12 relative">
          <SwiperSection />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-5xl font-extrabold tracking-tighter text-white bg-gradient-to-r from-cyan-500 to-blue-700 p-3 rounded-md shadow-md">
              M3ma Worship
            </h1>
          </div>
        </section>

        <section className="py-10 border-b border-gray-600 mb-10 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-500 to-blue-700 p-2 rounded-md">
            Sobre nós
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Aqui está uma breve descrição da M3ma e dos eventos que
            organizamos...
          </p>
        </section>

        <h2 className="text-4xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-500 to-blue-700 p-2 rounded-md">
          Próximos Eventos
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {events.map((event) => {
            return (
              <Link
                to={`/event/${event.id}`}
                className="w-full rounded-lg overflow-hidden bg-gradient-to-r from-gray-800 to-black p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                key={event.id}
              >
                <img
                  className="w-full mb-4 rounded object-cover h-48"
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt={event.title}
                />
                <h3 className="font-bold text-2xl mb-2 text-white">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp h-16">
                  {event.description}
                </p>
                <div className="mt-4">
                  <p className="text-gray-500 text-base">
                    {new Date(event.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            );
          })}
        </section>
      </div> */}
    </main>
  );
}
