"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import homepicture from "@/public/homepicture.webp";
const features = [
  {
    title: "Interactive Tutorials",
    description: "Step-by-step guides with real-world examples.",
    icon: "/interactive-tutorial.png",
  },
  {
    title: "Coding Challenges",
    description: "Daily challenges to sharpen your skills.",
    icon: "/homepicture.webp",
  },
  {
    title: "Community Discussions",
    description: "Engage with a vibrant developer community.",
    icon: "/interactive-tutorial.png",
  },
];
const articles = [
  {
    title: "Introduction JavaScript",
    description:
      "JavaScript is a versatile, high-level programming language that is primarily used to create interactive effects within web browsers. Unlike HTML, which structures the content of a webpage, and CSS, which controls its appearance, JavaScript allows developers to add interactivity to web pages.",
    image:
      "https://www.geeksforgeeks.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9wmwyzbj%2Fproduction%2Fc6255674378d048b89759b95264de5039143c629-1230x698.jpg%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75",
    link: "/learn/javascript/introduction-to-javascript",
  },
  {
    title: "What is TypeScript",
    description:
      "TypeScript, a language developed by Microsoft, has seen rapid growth in popularity among developers, particularly due to its static typing features that allow for early error detection, better readability, and maintainability of code.",
    image:
      "https://www.geeksforgeeks.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9wmwyzbj%2Fproduction%2F6de6512d86f5d0642af5b6e25d1baa71b84e370a-1280x700.jpg%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75",
    link: "/learn/typescript/what-is-typescript",
  },
  {
    title: "Basic Types in TypeScript",
    description:
      "The basic types in TypeScript are primitive data types that are commonly used in programming. These types include Number, String, and Boolean, which represent numeric, textual, and logical values, respectively.",
    image:
      "https://www.geeksforgeeks.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9wmwyzbj%2Fproduction%2F6894cb4f8feb3db17d4d09bda56120f6620404e6-1280x700.jpg%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75",
    link: "/learn/typescript/basic-types-in-typescript",
  },
  {
    title: "TypeScript Introduction",
    description:
      "TypeScript has rapidly become a key player in the web development ecosystem, known for enhancing JavaScript by adding static types.",
    image:
      "https://www.geeksforgeeks.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9wmwyzbj%2Fproduction%2F979f18b748e3b38c318ddd7e08be977f8f1bef98-1280x720.jpg%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75",
    link: "/learn/typescript/typescript-introduction",
  },
  {
    title: "TypeScript vs JavaScript",
    description:
      "This article compares TypeScript and JavaScript, focusing on their differences and how they can be used in web development.",
    image:
      "https://www.geeksforgeeks.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9wmwyzbj%2Fproduction%2F0a2ae6931f6b9db78632f011b313fa0384d028e2-1280x720.jpg%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75",
    link: "/learn/typescript/typescript-vs-javascript",
  },
  {
    title: "Type Inference in TypeScript",
    description:
      "Type inference allows TypeScript to automatically determine the type of a variable without explicit type annotation.",
    image:
      "https://www.geeksforgeeks.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9wmwyzbj%2Fproduction%2F121e1134ed32d10436f4e598ce10d6b01b6479fd-1280x700.jpg%3Ffit%3Dmax%26auto%3Dformat&w=2048&q=75",
    link: "/learn/typescript/type-inference-in-typescript",
  },

  // Add more articles
];
const categories = [
  {
    name: "Web Development",
    description: "Build modern websites and web apps.",
    icon: "/homepicture.webp",
    link: "/categories/web-development",
  },
  {
    name: "Data Science",
    description: "Analyze data and build predictive models.",
    icon: "/homepicture.webp",
    link: "/categories/data-science",
  },
  {
    name: "Machine Learning",
    description: "Analyze data and build predictive models.",
    icon: "/homepicture.webp",
    link: "/categories/data-science",
  },
  // Add more categories
];
const testimonials = [
  {
    name: "Paul Parker",
    position: "Software Engineer",
    message: "This platform has significantly improved my coding skills!",
    avatar: "/testimonial.png",
  },
  {
    name: "Martha Scott",
    position: "Data Scientist",
    message: "I love the community and the challenges!",
    avatar: "/testimonial.png",
  },
  // Add more testimonials
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 via-green-600 to-indigo-800 text-white py-20 md:py-32 lg:py-48 overflow-hidden dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <motion.h1
            className="mb-2 text-4xl md:text-6xl font-bold leading-tight bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% 50%", "50% 50%", "100% 50%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              loop: Infinity,
              repeatDelay: 1,
            }}
            style={{
              backgroundImage:
                "linear-gradient(270deg, #FFDEE9, #B5FFFC, #FFFCDC, #FFC2E1, #FFDEE9)",
              backgroundSize: "200% 200%",
            }}
          >
            Elevate Your Coding Skills
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Explore in-depth tutorials, solve coding challenges, and join a
            vibrant developer community.
          </motion.p>
          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.a
              href="/learn"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              whileHover={{ scale: 1.1 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#trending-articles"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md shadow hover:bg-white hover:text-blue-600 dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600 to-transparent pointer-events-none dark:from-gray-900 dark:to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-700 to-transparent pointer-events-none dark:from-gray-900 dark:to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        />
      </div>
      {/* Our Features */}
      <div className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:text-white flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-24 w-24 rounded-full overflow-hidden mb-6 relative border-4 border-blue-500">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Trending Articles */}
      <div id="trending-articles" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Trending Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                className="block bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:text-white"
                whileHover={{ scale: 1.05 }}
                target="_blank"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3 text-start">
                    {article.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      {/* Explore Categories */}
      <div className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={category.link}
                className="block text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-700 dark:text-white"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="h-24 w-24 rounded-full overflow-hidden mb-6 relative mx-auto border-4 border-blue-500">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <div className="relative h-72 md:h-80 lg:h-96">
            <AnimatePresence>
              {testimonials.map(
                (testimonial, index) =>
                  index === current && (
                    <motion.div
                      key={index}
                      className="absolute w-full h-full flex flex-col items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="h-24 w-24 rounded-full overflow-hidden mb-4 relative shadow-lg border-4 border-blue-500">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <motion.p
                        className="text-lg text-gray-700 max-w-2xl dark:text-gray-300 italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                      >
                        &quot;{testimonial.message}&quot;
                      </motion.p>
                      <motion.p
                        className="mt-4 font-semibold dark:text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                      >
                        {testimonial.name}
                      </motion.p>
                      <motion.p
                        className="text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        {testimonial.position}
                      </motion.p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
