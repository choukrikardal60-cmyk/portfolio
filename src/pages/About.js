import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center px-4 md:px-6 py-10 md:py-12 gap-10 md:gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* HERO */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <img
          src={profileImg}
          alt="profile"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-blue-500 object-cover shadow-md"
        />

        <div className="space-y-4 md:space-y-5 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">
            Choukri Kardal
          </h1>

          <p className="text-blue-500 font-semibold text-base md:text-lg">
            Étudiant en Génie Électrique & Systèmes Embarqués
          </p>

          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 text-sm md:text-base">

            <p>
              Étudiant en première année à la FST de Tanger, je me spécialise en génie électrique et systèmes embarqués.
            </p>

            <p>
              Je développe mes compétences en C/C++, Arduino, ESP et systèmes embarqués.
            </p>

            <p>
              Je recherche un stage d’observation pour acquérir une première expérience professionnelle.
            </p>

            <p className="text-blue-500 font-semibold">
              Disponible à partir de juin 2026
            </p>

          </div>

          <a
            href="/cv.pdf"
            className="inline-block bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Télécharger CV
          </a>

        </div>

      </motion.div>

      {/* TIMELINE */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-8 max-w-6xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">
          Parcours académique
        </h2>

        <div className="border-l-4 border-blue-500 pl-4 md:pl-6 space-y-6 md:space-y-8">

          <div>
            <h3 className="font-semibold text-base md:text-lg">
              2025 - Présent
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              FST Tanger — Génie Électrique et Systèmes Embarqués
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base md:text-lg">
              2024 - 2025
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Lycée Jaber Ibn Hayyan — Bac Sciences et Technologies Électriques
            </p>
          </div>

        </div>

      </motion.div>

    </motion.div>
  );
}