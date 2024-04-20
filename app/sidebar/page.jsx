export default function Sidebar(){
    return (
<>
<div className="flex flex-col h-screen">
  <div className="border-b lg:hidden">
    <div className="flex items-center justify-between px-4 py-3">
      <a className="flex items-center space-x-2" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
        <span className="text-lg font-semibold">Acme Inc</span>
      </a>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <span className="sr-only">Toggle navigation</span>
      </button>
    </div>
  </div>
  <div className="flex flex-1">
    <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:bg-gray-50 lg:p-6 dark:lg:border-gray-800 dark:lg:bg-gray-900">
      <nav className="fixed inset-y-0 left-0 w-64 space-y-6">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">Getting Started</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Introduction</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
                <span>Setup</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <span>Basics</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">Components</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="7.5" cy="15.5" r="5.5"></circle>
                  <path d="m21 2-9.6 9.6"></path>
                  <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
                </svg>
                <span>Button</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <span>Card</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                  <path d="M12 12h.01"></path>
                  <path d="M17 12h.01"></path>
                  <path d="M7 12h.01"></path>
                </svg>
                <span>Form</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>Examples</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Community</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <main className="flex-1 p-6 lg:p-10 overflow-y-auto"></main>
  </div>
</div>
        </>
    )
}