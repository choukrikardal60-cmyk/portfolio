import { motion } from "framer-motion";

export default function Objective() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <motion.div
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 max-w-4xl text-center space-y-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <h1 className="text-3xl font-bold">
          Objectif professionnel
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          En tant qu’étudiant en première année en Génie Électrique et Systèmes Embarqués à la FST de Tanger, mon objectif est de développer une expérience pratique dans un environnement professionnel réel.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Je suis à la recherche d’un stage d’observation dans le domaine de l’électronique, des systèmes embarqués ou des technologies IoT, afin de mieux comprendre les processus industriels, les contraintes techniques et les méthodes de travail en entreprise.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Motivé, curieux et rigoureux, je souhaite mettre en pratique mes connaissances théoriques, renforcer mes compétences techniques et évoluer progressivement vers des projets concrets à forte valeur ajoutée.
        </p>

        <p className="text-blue-500 font-semibold">
          Disponible pour un stage à partir de juin 2026, avec une durée flexible selon les besoins de l’entreprise.
        </p>

      </motion.div>

    </motion.div>
  );
}