import { motion } from "framer-motion";

export default function Objective() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <motion.div
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 max-w-4xl w-full space-y-6 md:space-y-8 text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <h1 className="text-2xl md:text-3xl font-bold">
          Objectif professionnel
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          Étudiant en Génie Électrique et Systèmes Embarqués à la FST de Tanger, je souhaite acquérir une première expérience professionnelle dans un environnement technique réel.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          Je recherche un stage d’observation dans les domaines de l’électronique, des systèmes embarqués ou de l’IoT afin de mieux comprendre les processus industriels et les méthodes de travail en entreprise.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          Sérieux, motivé et curieux, je souhaite développer mes compétences techniques et contribuer progressivement à des projets concrets.
        </p>

        <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-3 rounded-lg font-semibold text-sm md:text-base">
          Disponible à partir de juin 2026 — durée flexible
        </div>

      </motion.div>

    </motion.div>
  );
}