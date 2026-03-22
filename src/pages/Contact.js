import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_fvuihg9",
      "template_yxqez0x",
      form.current,
      "DPlKVhkvbq4u1W95v"
    )
    .then(() => {
      setStatus("Message envoyé avec succès ✅");
      setLoading(false);
      form.current.reset();
    })
    .catch(() => {
      setStatus("Erreur lors de l'envoi ❌");
      setLoading(false);
    });
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10 md:py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 max-w-3xl w-full">

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Contactez-moi
        </h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            required
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm md:text-base"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            required
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm md:text-base"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm md:text-base"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

        </form>

        {status && (
          <p className="text-center mt-4 text-green-500 text-sm md:text-base">
            {status}
          </p>
        )}

      </div>

    </motion.div>
  );
}