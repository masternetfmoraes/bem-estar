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
                href="/pages"
                className="my-1 hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Page
              </a>
              <a
                href="/pages/dashboard/"
                className="my-1 hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Dashboard
              </a>
              <a
                href="/contact"
                className="my-1 text-gray-800 hover:text-indigo-400 md:mx-4 md:my-0"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
