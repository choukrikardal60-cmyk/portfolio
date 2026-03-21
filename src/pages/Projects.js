import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    { title: "LED", desc: "Projet Arduino simple" },
    { title: "Capteur Température", desc: "Lecture de données" }
  ];

  return (
    <motion.div className="min-h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 max-w-6xl w-full">

        <h1 className="text-3xl font-bold text-center mb-10">Projets</h1>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">

              <h2 className="font-bold text-xl">{p.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.div>
  );
}