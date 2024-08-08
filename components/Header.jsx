"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="z-50 sticky top-0 bg-gray-950 text-gray-50 px-4 lg:px-6 py-1">
        <div className="grid grid-cols-2 md:grid-cols-3  mt-3">
          <div className="flex items-center">
            <Link href="/" passHref className="flex items-center gap-2">
              <BookIcon className="h-6 w-6" />
              <span className="text-xl font-semibold">
                <span className="text-blue-500 text-xs">GeeksforGeeks</span>
                <span className="text-red-600 text-xl">.</span>
                <span>dev</span>
              </span>
            </Link>
          </div>

          <div className="md:hidden justify-self-end flex items-center">
          <ModeToggle />
            <button  onClick={toggleMenu} className=" text-white font-bold py-2 px-4 rounded">
              <MenuIcon/>
            </button>
            
          </div>
          <div className={`col-span-2 grid justify-center place-items-center md:grid-flow-col-dense gap-2 md:justify-end md:gap-5 md:pr-8 item-center ${
            menuOpen ? 'block' : 'hidden'
          } md:grid`}
>
            <Link
              href="/learn"
              className="text-white hover:underline"
            >
              Tutorial
            </Link>
            <Link
              href="/blogs"
              className="text-white hover:underline"
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="text-white hover:underline"
            >
              About
            </Link>
            <Link
              href="contact"
              className="text-white hover:underline"
            >
              Contact
            </Link>
            <Link
              href="roadmaps"
              className="text-white hover:underline"
            >
              Roadmaps
            </Link>
            <Link
              href="tools"
              className="text-white hover:underline"
            >
              Tools
            </Link>
            <div className="hidden md:block">
            <ModeToggle />
            </div>
            
          </div>
        </div>
      </header>
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
