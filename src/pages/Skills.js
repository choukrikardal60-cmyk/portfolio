import { motion } from "framer-motion";

export default function Skills() {

  const technicalSkills = [
    "C / C++",
    "Python (bases)",
    "Arduino / ESP",
    "Électronique",
    "Logique numérique",
    "Systèmes embarqués"
  ];

  const softSkills = [
    "Travail en équipe",
    "Apprentissage rapide",
    "Curiosité",
    "Rigueur",
    "Analyse"
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 max-w-6xl w-full space-y-10">

        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Compétences
        </h1>

        {/* TECH */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-blue-500">
            Compétences techniques
          </h2>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {technicalSkills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full text-sm shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* SOFT */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-blue-500">
            Compétences personnelles
          </h2>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {softSkills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

      </div>

    </motion.div>
  );
}