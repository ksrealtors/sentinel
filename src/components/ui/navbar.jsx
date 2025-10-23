import * as React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Navbar() {
  const navigate = useNavigate();

  function handleScrollTo(sectionId) {
    if (window.location.pathname === "/") {
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  }

  return (
    <nav
      className="fixed bg-red-400 w-full z-20 top-0 start-0 dark:border-gray-600"
      style={{
        WebkitMaskImage: "linear-gradient(black, black, transparent)",
        maskImage: "linear-gradient(black, black, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "rgba(0,0,0,0)",
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent backdrop-blur-lg pointer-events-none"></div> */}
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            alt="Logo"
            class="h-14 w-auto object-contain md:h-16 lg:h-24 -ml-6"
          />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="contact">
            <button
              type="button"
              class="text-white !px-5 py-2 hover:text-orange-200 cursor-pointer transition-all ease-linear focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
            >
              Contact
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                onClick={() => handleScrollTo("home")}
                class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-200 transition-all ease-linear md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollTo("services")}
                class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-200 transition-all ease-linear md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollTo("about")}
                class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-200 transition-all ease-linear md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollTo("catalog")}
                class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-200 transition-all ease-linear md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Catalog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
