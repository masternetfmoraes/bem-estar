"use client";
import { useState } from "react";
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="bg-white navbar-tr dark:bg-gray-900 md:pt-10 sm:pt-10 w-full z-20">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className=" text-xl font-bold md:text-3xl md:text-blue-500 hover:text-indigo-500"
                href="/"
              >
                Casa de Respouso Bem estar
              </a>
            </div>

            <div className="flex  md:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-gray-800 focus:outline-none focus:text-gray-200"
                onClick={toggleMenu}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  {showMenu ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 13H5v-2h14v2zM19 7H5V5h14v2z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className={` md:flex ${showMenu ? "block" : "hidden"}`}>
            <div className="flex flex-col md:flex-row md:-mx-4 font-medium text-blue-800 text-xl">
              <a
                href="/"
                className="my-1  hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Home
              </a>
              <a
                href="#sobre"
                className="my-1 hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Sobre nós
              </a>
              <a
                href="#servicos"
                className="my-1 hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Serviços
              </a>
              <a
                href="https://wa.me/5519987164353" target="_blank"
                className="my-1 text-gray-800 hover:text-indigo-400 md:mx-4 md:my-0"
              >
                <svg fill="green" width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
