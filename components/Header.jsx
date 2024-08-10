"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null); // Ref to track the navbar element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav
        ref={menuRef}
        className="sticky w-full z-30 top-0 bg-white bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-75 backdrop-blur-md shadow-lg transition-colors duration-500"
      >
        <div className="px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex justify-between items-center h-10">
            {/* Logo Section - Left Aligned */}
            <div className="flex items-center justify-start w-8">
              <Link
                href="/"
                className="text-lg font-bold text-gray-900 dark:text-white flex items-center"
              >
                <BookIcon className="inline h-6 w-6 mr-2" />
                <span className="text-xl font-semibold">
                  <span className="text-blue-500 text-xs">GeeksforGeeks</span>
                  <span className="text-red-600 text-xl">.</span>
                  <span>Dev</span>
                </span>
              </Link>
            </div>

            {/* Navigation Links - Centered */}
            <div className="hidden md:flex items-center space-x-4 justify-center flex-grow">
              <Link
                href="/"
                className="text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-green-500"
              >
                Home
              </Link>
              <Link
                href="/learn"
                className="text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-green-500"
              >
                Tutorials
              </Link>
              <Link
                href="/blogs"
                className="text-sm font-medium  transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-green-500"
              >
                Blogs
              </Link>
              <Link
                href="/roadmaps"
                className="text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-green-500"
              >
                RoadMaps
              </Link>
              <Link
                href="/tools"
                className="text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-green-500"
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-green-500"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-green-500"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Mode: Dark Mode Toggle & Hamburger Menu */}
            <div className="flex items-center space-x-4 md:hidden">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Dark Mode Toggle - Right Aligned (Desktop Only) */}
            <div className="hidden md:flex items-center justify-end w-10">
              <ModeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-900 dark:text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/learn"
              className="text-gray-900 dark:text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tutorials
            </Link>
            <Link
              href="/blogs"
              className="text-gray-900 dark:text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </Link>
            <Link
              href="/roadmaps"
              className="text-gray-900 dark:text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              RoadMaps
            </Link>
            <Link
              href="/tools"
              className="text-gray-900 dark:text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Tools
            </Link>
            <Link
              href="/about"
              className="text-gray-900 dark:text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 dark:text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
