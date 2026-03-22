import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Système LED avec Arduino",
      desc: "Contrôle d'une LED avec Arduino pour comprendre les bases de l’électronique et de la programmation embarquée.",
      tech: "Arduino, C"
    },
    {
      title: "Capteur de température",
      desc: "Lecture et affichage de données de température à l’aide d’un capteur connecté à un microcontrôleur.",
      tech: "Arduino, capteurs"
    }
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 max-w-6xl w-full">

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
          Projets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-700 p-5 md:p-6 rounded-xl shadow-md space-y-3"
            >

              <h2 className="font-bold text-lg md:text-xl">
                {p.title}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                {p.desc}
              </p>

              <span className="text-blue-500 text-sm font-semibold">
                {p.tech}
              </span>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.div>
  );
}