import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center px-6 py-12 gap-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* HERO SECTION */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <img
          src={profileImg}
          alt="profile"
          className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover shadow-md"
        />

        <div className="space-y-5">
          <h1 className="text-4xl font-bold">
            Choukri Kardal
          </h1>

          <p className="text-blue-500 font-semibold text-lg">
            Étudiant en Génie Électrique & Systèmes Embarqués
          </p>

          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">

            <p>
              Étudiant en première année à la FST de Tanger, je me spécialise en génie électrique et systèmes embarqués, avec un intérêt particulier pour les technologies liées à l’électronique et aux systèmes intelligents.
            </p>

            <p>
              Je développe actuellement mes compétences en programmation (C/C++), en microcontrôleurs (Arduino, ESP) ainsi qu’en conception de systèmes embarqués, dans une démarche orientée projets.
            </p>

            <p>
              Curieux, motivé et rigoureux, je souhaite acquérir une première expérience professionnelle à travers un stage d’observation, afin de découvrir le milieu industriel, comprendre les processus techniques et renforcer mes compétences pratiques.
            </p>

            <p>
              Disponible pour un stage d’observation à partir de juin 2026, avec une durée flexible selon les besoins de l’entreprise.
            </p>

          </div>

          <a
            href="/cv.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Télécharger CV
          </a>

        </div>

      </motion.div>

      {/* TIMELINE */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-6xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h2 className="text-2xl font-bold mb-8 text-center">
          Parcours académique
        </h2>

        <div className="border-l-4 border-blue-500 pl-6 space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              2025 - Présent
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              FST Tanger — Génie Électrique et Systèmes Embarqués
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              2024 - 2025
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Lycée Jaber Ibn Hayyan, Berkane — Baccalauréat Sciences et Technologies Électriques
            </p>
          </div>

        </div>

      </motion.div>

    </motion.div>
  );
}