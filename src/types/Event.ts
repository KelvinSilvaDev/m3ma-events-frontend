// import { User } from "./User";

export type Event = {
  title: string;
  description: string;
  date: string; // você pode querer usar "Date" aqui, mas como é um campo de input do tipo "date", a string é o formato padrão retornado
  price: number;
  image: string;
  participants: number; // Uma lista de usuários que são participantes
  //   participantCount: number; // A quantidade de participantes
};
