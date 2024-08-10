import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* <img src="/logo.png" alt="Logo" className="h-10 mr-3" /> Replace with your logo */}
              <span className="text-xl font-semibold">
                <span className="text-blue-500 text-lg">GeeksforGeeks</span>
                <span className="text-red-600 text-xl">.</span>
                <span className="text-white text-2xl">Dev</span>
              </span>
            </div>
            <p className="text-gray-400">
              Your go-to platform for tech tutorials, tools, and insights. Stay
              updated with the latest trends and enhance your skills with our
              comprehensive resources.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Insert your social media SVG icons here */}
                  <path d="..." />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Insert another social media SVG icon */}
                  <path d="..." />
                </svg>
              </Link>
              {/* Add more social icons as needed */}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Quick Links</h2>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roadmaps"
                    className="hover:text-white transition-colors duration-300"
                  >
                    RoadMaps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; 2024 GeeksforGeeks.Dev. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
