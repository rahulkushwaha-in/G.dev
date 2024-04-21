

export default function Article(){
    return (

        <>

<div class="flex min-h-screen">
  <div class="sticky top-0 hidden h-screen w-64 flex-col border-r bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-900 lg:flex">
    <div class="flex-1 space-y-6">
      <a class="flex items-center gap-2 font-semibold" href="#">
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
          class="h-6 w-6"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
        <span>Article</span>
      </a>
      <nav class="space-y-1">
        <a
          class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
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
            class="h-4 w-4"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home
        </a>
        <a
          class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
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
            class="h-4 w-4"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
          </svg>
          Bookmarks
        </a>
        <a
          class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
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
            class="h-4 w-4"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          Search
        </a>
        <a
          class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
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
            class="h-4 w-4"
          >
            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
          </svg>
          Edit
        </a>
        <a
          class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
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
            class="h-4 w-4"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Settings
        </a>
      </nav>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Table of Contents</h3>
        <nav class="space-y-1">
          <a
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            Introduction
          </a>
          <a
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            Features
          </a>
          <a
            class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            href="#"
          >
            Conclusion
          </a>
        </nav>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Related Articles</h3>
        <nav class="space-y-2">
          <a class="flex items-start gap-3 rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-800" href="#">
            <img
              src="/placeholder.svg"
              width="64"
              height="64"
              alt="Article thumbnail"
              class="h-16 w-16 rounded-md object-cover"
            />
            <div class="space-y-1">
              <h4 class="text-sm font-medium text-gray-900 dark:text-gray-50">
                Building a Modern Web App with Next.js
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Learn how to build a scalable and performant web application using Next.js.
              </p>
            </div>
          </a>
          <a class="flex items-start gap-3 rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-800" href="#">
            <img
              src="/placeholder.svg"
              width="64"
              height="64"
              alt="Article thumbnail"
              class="h-16 w-16 rounded-md object-cover"
            />
            <div class="space-y-1">
              <h4 class="text-sm font-medium text-gray-900 dark:text-gray-50">
                Mastering Tailwind CSS for Responsive Design
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Discover the power of Tailwind CSS and how to use it to build responsive and beautiful user
                interfaces.
              </p>
            </div>
          </a>
        </nav>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Notifications</h3>
        <div class="space-y-2">
          <div class="flex items-center gap-2 rounded-md bg-gray-200 p-3 dark:bg-gray-800">
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
              class="h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-gray-50">New comment on your article</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</p>
            </div>
          </div>
          <div class="flex items-center gap-2 rounded-md bg-gray-200 p-3 dark:bg-gray-800">
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
              class="h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-gray-50">New message from Jane</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
            </div>
          </div>
          <div class="flex items-center gap-2 rounded-md bg-gray-200 p-3 dark:bg-gray-800">
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
              class="h-4 w-4 text-gray-500 dark:text-gray-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-gray-50">Your article was featured</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">4 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-1 overflow-auto p-6 lg:p-10">
    <article class="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
      <h1 id="introduction" class="text-4xl font-bold tracking-tight lg:text-5xl">
        Building a Modern Web App with Next.js
      </h1>
      <p class="text-gray-500 dark:text-gray-400">Published on April 20, 2024</p>
      <p>
        In this article, we'll explore the process of building a modern web application using Next.js, a popular
        React framework that enables server-side rendering, static site generation, and other powerful features.
      </p>
      <h2 id="features">Key Features of Next.js</h2>
      <ul>
        <li>Server-side Rendering (SSR)</li>
        <li>Static Site Generation (SSG)</li>
        <li>Automatic Code Splitting</li>
        <li>File-based Routing</li>
        <li>API Routes</li>
        <li>Optimized Performance</li>
      </ul>
      <p>
        Next.js provides a powerful set of features that make it easier to build high-performance, SEO-friendly web
        applications. By leveraging server-side rendering and static site generation, you can deliver content
        quickly to your users, improving the overall user experience.
      </p>
      <h2 id="conclusion">Conclusion</h2>
      <p>
        In this article, we've covered the key features of Next.js and how they can be used to build modern web
        applications. By taking advantage of Next.js's powerful capabilities, you can create fast, scalable, and
        SEO-optimized web experiences for your users.
      </p>
      <p>
        To get started with Next.js, be sure to check out the
        <a class="underline" href="#">
          official documentation
        </a>
        , which provides detailed guides and examples to help you build your next web application.
      </p>
    </article>
  </div>
</div>
        </>
    )
}