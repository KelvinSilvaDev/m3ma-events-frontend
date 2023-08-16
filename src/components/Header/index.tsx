/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Example from "./DefaultNavbar";
// import { HeaderUserDropdown } from "./HeaderUserDropdown";
// import { Menu, X } from "lucide-react";
// import { useUser } from "../../hooks/useUser";
// import Logo from "../../assets/LOGO.svg";
import { Logo } from "../Logo";
import { useAuth } from "../../contexts/AuthContext";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const user = useUser();

  const { user } = useAuth();

  const handleToggleMenu = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const [, forceUpdate] = useState<any>();

  useEffect(() => {
    return forceUpdate({}); // Força a re-renderização.
  }, [user]);

  return (
    // <header className="absolute w-full top-0 shadow py-2 bg-black px-6 flex items-center justify-between max-h-16 opacity-75 ">
    //   <div className="h-full">
    //     <Link
    //       to="/"
    //       className="text-2xl font-bold text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
    //     >
    //       <Logo color="#fff" size={48} />
    //     </Link>
    //   </div>

    //   <Example />

    //   {/* <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <Link
    //         to="/"
    //         className="text-2xl font-bold text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
    //       >
    //         <Logo color="#fff" size={48} />
    //       </Link>
    //       <div className="flex md:order-2">
    //         <button
    //           data-collapse-toggle="navbar-sticky"
    //           type="button"
    //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           aria-controls="navbar-sticky"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className="w-5 h-5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 17 14"
    //           >
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M1 1h15M1 7h15M1 13h15"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div
    //         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //         id="navbar-sticky"
    //       >
    //         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav> */}

    //   {/* <nav className=" ">
    //     <div className="container mx-auto md:flex md:justify-between md:items-center ">
    //       <div className="flex items-center justify-between">
    //         <div className="flex p-2 md:hidden">
    //           <button
    //             type="button"
    //             className="relative w-12 h-12 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
    //             onClick={handleToggleMenu}
    //           >
                
    //           </button>
    //         </div>
    //       </div>

    //       <div className={`...`}>
    //         <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-4">
    //           {user ? (
    //             <>
    //               {user.role === "ADMIN" && (
    //                 <>
    //                   <Link
    //                     to="/events/create"
    //                     className="my-1 md:h-16 w-full flex items-center text-2xl text-left font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:my-0 md:text-sm md:w-full pl-4"
    //                   >
    //                     Criar Evento
    //                   </Link>
    //                 </>
    //               )}
                  
    //             </>
    //           ) : (
    //             <>
    //               <Link
    //                 onClick={() => setIsOpen(false)}
    //                 to="/login"
    //                 className="my-1 md:h-16 w-full flex items-center text-2xl text-left font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:my-0 md:text-sm md:w-full pl-4"
    //               >
    //                 Login
    //               </Link>
    //               <Link
    //                 onClick={() => setIsOpen(false)}
    //                 to="/register"
    //                 className="my-1 md:h-16 w-full flex items-center text-2xl text-left font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:my-0 md:text-sm md:w-full pl-4"
    //               >
    //                 Register
    //               </Link>
    //             </>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </nav> */}
    // </header>
  );
}
