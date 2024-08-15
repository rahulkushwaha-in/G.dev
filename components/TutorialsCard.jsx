// components/TutorialCard.js
import { motion } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const TutorialCard = ({ title, description, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      whileHover="hover"
      className="relative block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all"
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </motion.a>
  );
};

export default TutorialCard;
