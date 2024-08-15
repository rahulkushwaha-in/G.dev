"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SidebarLeft from "@/components/sidebar";
import { FaReact, FaNodeJs, FaVuejs, FaAngular, FaDocker, FaCss3Alt, FaSass, FaBootstrap, FaJs, FaNpm, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiHtml5, SiMongodb, SiTypescript, SiGraphql, SiTailwindcss, SiRedux, SiRestapi, SiWebpack, SiJest } from "react-icons/si";

// Predefined list of gradient color classes
const gradientColors = [
  "bg-gradient-to-r from-orange-400 to-pink-500",
  "bg-gradient-to-r from-blue-400 to-indigo-500",
  "bg-gradient-to-r from-yellow-400 to-orange-500",
  "bg-gradient-to-r from-green-400 to-teal-500",
  "bg-gradient-to-r from-purple-400 to-pink-600",
  "bg-gradient-to-r from-red-400 to-yellow-500",
  "bg-gradient-to-r from-cyan-400 to-blue-500",
  "bg-gradient-to-r from-purple-500 to-indigo-600",
];

// Function to assign colors based on the index of the item
const getColor = (index) => {
  return gradientColors[index % gradientColors.length];
};
const getIcon = (title) => {
  switch (title) {
    case "React":
      return <FaReact className="text-blue-500 text-3xl" />;
    case "Node.js":
      return <FaNodeJs className="text-green-500 text-3xl" />;
    case "Express.js":
      return <SiExpress className="text-gray-500 text-3xl" />;
    case "MongoDB":
      return <SiMongodb className="text-green-500 text-3xl" />;
    case "TypeScript":
      return <SiTypescript className="text-blue-500 text-3xl" />;
      case "HTML":
      return <SiHtml5 className="text-blue-500 text-3xl" />;
    default:
      return null;
  }
};

const items = [
  {
    id: 1,
    title: "HTML",
    subtitle: "The structure of the web",
    description:
      "HTML (Hypertext Markup Language) is the fundamental building block of the web, defining the structure of web pages.",
    link: "/learn/html",
  },
  {
    id: 2,
    title: "CSS",
    subtitle: "Design and style",
    description:
      "CSS (Cascading Style Sheets) is used to control the look and feel of your web pages.",
    link: "/learn/css",
  },
  {
    id: 3,
    title: "JavaScript",
    subtitle: "The brain of the web",
    description:
      "JavaScript is a programming language that powers dynamic interactions and functionality on websites.",
    link: "/learn/javascript",
  },
  {
    id: 4,
    title: "React",
    subtitle: "Building interactive UIs",
    description:
      "React is a popular JavaScript library for building user interfaces, especially for single-page applications.",
    link: "/learn/react",
  },
  {
    id: 5,
    title: "Next.js",
    subtitle: "React Framework",
    description:
      "Next.js is a powerful React framework for building modern web applications.",
    link: "/learn/nextjs",
  },
  {
    id: 6,
    title: "TypeScript",
    subtitle: "Static Typing for JavaScript",
    description:
      "TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors early.",
    link: "/learn/typescript",
  },
  {
    id: 7,
    title: "Node.js",
    subtitle: "Backend with JavaScript",
    description:
      "Node.js is a JavaScript runtime that allows you to build scalable server-side applications using JavaScript.",
    link: "/learn/nodejs",
  },
  {
    id: 8,
    title: "Express.js",
    subtitle: "Minimalist Backend Framework",
    description:
      "Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web applications and APIs.",
    link: "/learn/expressjs",
  },
  {
    id: 9,
    title: "MongoDB",
    subtitle: "NoSQL Database",
    description:
      "MongoDB is a NoSQL document database that provides flexibility and scalability, making it a popular choice for modern web applications.",
    link: "/learn/mongodb",
  },
  {
    id: 10,
    title: "GraphQL",
    subtitle: "API Query Language",
    description:
      "GraphQL is a query language for your API that allows clients to request exactly the data they need, making APIs more efficient.",
    link: "/learn/graphql",
  },
  {
    id: 11,
    title: "Vue.js",
    subtitle: "Progressive JavaScript Framework",
    description:
      "Vue.js is a progressive JavaScript framework for building user interfaces, focusing on flexibility and ease of use.",
    link: "/learn/vuejs",
  },
  {
    id: 12,
    title: "Angular",
    subtitle: "Comprehensive Web Framework",
    description:
      "Angular is a platform for building mobile and desktop web applications using TypeScript and other modern web technologies.",
    link: "/learn/angular",
  },
  {
    id: 13,
    title: "SASS",
    subtitle: "Advanced CSS Preprocessor",
    description:
      "SASS is a CSS preprocessor that adds power and elegance to the basic language, making it easier to write and manage CSS.",
    link: "/learn/sass",
  },
  {
    id: 14,
    title: "Bootstrap",
    subtitle: "CSS Framework",
    description:
      "Bootstrap is a popular CSS framework for developing responsive and mobile-first websites quickly and easily.",
    link: "/learn/bootstrap",
  },
  {
    id: 15,
    title: "Tailwind CSS",
    subtitle: "Utility-First CSS Framework",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs directly in your markup.",
    link: "/learn/tailwind",
  },
  {
    id: 16,
    title: "Redux",
    subtitle: "State Management Library",
    description:
      "Redux is a predictable state container for JavaScript applications, commonly used with React for managing application state.",
    link: "/learn/redux",
  },
  {
    id: 17,
    title: "REST API",
    subtitle: "Representational State Transfer",
    description:
      "REST (Representational State Transfer) is an architectural style for designing networked applications, commonly used in web development.",
    link: "/learn/restapi",
  },
  {
    id: 18,
    title: "Webpack",
    subtitle: "Module Bundler",
    description:
      "Webpack is a static module bundler for modern JavaScript applications, allowing you to manage assets and dependencies.",
    link: "/learn/webpack",
  },
  {
    id: 19,
    title: "Jest",
    subtitle: "JavaScript Testing Framework",
    description:
      "Jest is a delightful JavaScript testing framework with a focus on simplicity, support for a wide range of libraries, and zero configuration.",
    link: "/learn/jest",
  },
  {
    id: 20,
    title: "Docker",
    subtitle: "Containerization Platform",
    description:
      "Docker is a platform for developing, shipping, and running applications inside lightweight containers.",
    link: "/learn/docker",
  },
];


const Learn = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Disable scrolling when the popup is open
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [selectedId]);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <div className="sticky top-0 hidden sm:block sm:col-span-2 h-screen overflow-y-hidden">
          {/* <SidebarLeft category={"typescript"} /> */}
        </div>
  

        {/* Main Content */}
        <div className="p-8 mx-auto w-full col-span-12 sm:col-span-8">
          <div className="max-w-full prose dark:prose-invert">
            <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">
              Explore Tutorials
            </h1>
            <p className="dark:text-gray-100 mb-8 text-center">Welcome to our tutorials section, where learning meets simplicity. Whether you're starting your journey or looking to enhance your skills, we have a wide range of topics to guide you. Our tutorials are designed to be clear and practical, helping you gain confidence with each step. Let's explore and grow your knowledge together with easy-to-follow lessons and real-world examples.</p>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-6 rounded-lg shadow-lg cursor-pointer text-white ${getColor(
                    index
                  )}`}
                >
                  
                  <motion.h5 className="text-lg font-semibold">
                    {item.subtitle}
                  </motion.h5>
                  <motion.h2 className="text-white text-2xl font-bold">
                    {item.title}
                  </motion.h2>
                  {getIcon(item.title)}
                </motion.div>
              ))}
            </motion.div>

            <AnimatePresence>
  {selectedId && (
    <motion.div
      layoutId={selectedId}
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-500"
      initial={{ opacity: 0 }} // Initial state before animation starts
      animate={{ opacity: 1 }} // Animation when the modal appears
      exit={{ opacity: 0, scale: 0.9 }} // Exit animation for closing
      transition={{ duration: .3 }} // Adjust the duration for smoothness
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md mx-auto shadow-lg relative"
        initial={{ scale: 0.1 }} // Start slightly smaller
        animate={{ scale: 1 }} // Animate to full size
        exit={{ opacity: 0, scale: 0.9 }} // Exit with fade-out and scale-down
        transition={{ duration: .3 }} // Transition timing for the content
      >
        <motion.h5 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
          {items.find((item) => item.id === selectedId).subtitle}
        </motion.h5>
        <motion.h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {items.find((item) => item.id === selectedId).title}
        </motion.h2>
        <motion.p className="text-gray-600 dark:text-gray-300 mb-4">
          {items.find((item) => item.id === selectedId).description}
        </motion.p>
        <motion.a
          href={items.find((item) => item.id === selectedId).link}
          className="inline-block text-blue-600 dark:text-blue-400 font-semibold underline hover:no-underline mb-4"
        >
          Explore All Articles
        </motion.a>
        <motion.button
          onClick={() => setSelectedId(null)}
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

          </div>
        </div>

        {/* Placeholder for right side */}
        <div className="h-full hidden sm:block col-span-2"></div>
      </div>
    </div>
  );
};

export default Learn;
