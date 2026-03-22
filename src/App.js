import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Objective from "./pages/Objective";
import Contact from "./pages/Contact";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function App() {

  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>

      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">

        {/* NAVBAR */}
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex flex-wrap justify-center gap-4 md:gap-6 items-center sticky top-0 z-50 text-sm md:text-base">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-500 transition"
            }
          >
            À propos
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-500 transition"
            }
          >
            Compétences
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-500 transition"
            }
          >
            Projets
          </NavLink>

          <NavLink
            to="/objective"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-500 transition"
            }
          >
            Objectif
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-blue-500 transition"
            }
          >
            Contact
          </NavLink>

          {/* DARK MODE */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:scale-105 transition text-xs md:text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>

        </nav>

        {/* ROUTES */}
        <main className="pb-32">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/objective" element={<Objective />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER FIXE */}
        <footer className="fixed bottom-0 w-full bg-gray-900 text-white p-4 shadow-lg">

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            {/* CONTACT */}
            <div className="text-center md:text-left text-xs md:text-sm space-y-1">

              <p>
                Email :{" "}
                <a
                  href="mailto:choukri.kardal60@gmail.com"
                  className="hover:text-blue-400 underline"
                >
                  choukri.kardal60@gmail.com
                </a>
              </p>

              <p>
                Téléphone :{" "}
                <a
                  href="tel:+212623417263"
                  className="hover:text-green-400 underline"
                >
                  +212623417263
                </a>
              </p>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-6 text-xl md:text-2xl">

              <a
                href="https://www.linkedin.com/in/choukri-kardal-0b74b1330/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/212623417263"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </footer>

      </div>

    </div>
  );
}