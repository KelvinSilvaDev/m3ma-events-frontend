/* eslint-disable @typescript-eslint/no-explicit-any */
// import { User } from "@prisma/client"
import { ChevronDown, ChevronUp } from "lucide-react";
// import { useSession, signOut } from 'next-auth/react'
// import { useRouter } from 'next/navigation';
import { useState } from "react";

// interface Session {
//     expires?: string;
//     user: User
// }

export const HeaderUserDropdown = ({ user, setIsOpen }: any) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  // const router = useRouter();

  const handleOpen = () => {
    setIsDropDownOpen((state) => !state);
  };

  // const handleClose = () => {
  //     setIsOpen(state => !state)
  // }

  // const handleLogout = async () => {
  //     await signOut({ redirect: true });
  //     router.push('/');
  // };
  return (
    <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-0">
      {user.role !== "CUSTOMER" && (
        <div className="pl-2 md:pl-0 md:flex-row flex-col flex items-center h-[69vh] md:h-16">
          <a
            href="/dashboard"
            className="my-1 w-full flex items-center text-2xl text-left font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 md:text-sm md:w-28"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </a>
          <a
            href="/events/create"
            className="my-1 w-full flex items-center text-2xl text-left font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 md:text-sm md:w-28"
            onClick={() => setIsOpen(false)}
          >
            Novo Evento
          </a>
        </div>
      )}
      <div
        className="relative md:static w-full bg-white flex flex-col items-center justify-center h-16 md:w-40 cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex">
          <h3 className="text-black px-2">{user.name}</h3>
          {isDropDownOpen && <ChevronDown />}
          {!isDropDownOpen && <ChevronUp />}
        </div>
        {isDropDownOpen && (
          <div className=" bottom-16 md:bottom-0 w-full md:top-16 bg-white md:w-40 h-auto md:h-10 z-50 absolute right-0">
            <button
              // onClick={handleLogout}
              className="my-1 text-lg w-full text-left font-medium text-gray-900 dark:text-gray-600 hover:text-indigo-500 hover:bg-slate-900 h-full dark:hover:text-indigo-800 md:mx-0 md:px-4 md:my-0 lg:text-md"
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
