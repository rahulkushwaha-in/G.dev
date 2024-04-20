
import Link from "next/link"

import { CardHeader, CardContent, Card } from "@/components/ui/card"

export function Landing() {

  return (
    (<div className="flex flex-col min-h-[100dvh]">
     
      <main className="flex-1">
        <section className="bg-gray-950 text-gray-50 py-10 md:py-15 lg:py-20">
          <div
            className="w-full px-4 md:px-6 grid gap-8 md:gap-12 lg:grid-cols-2 items-center justify-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Learn the Latest Tech Stacks
              </h1>
              <p className="text-gray-300 max-w-[600px] text-lg md:text-xl">
                Dive into our extensive collection of tutorials covering the hottest technologies, frameworks, and
                languages.
              </p>
              <div className="flex gap-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#">
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-6 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                  href="#">
                  Explore Tutorials
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Hero Image"
                className="rounded-lg"
                height={400}
                src="https://www.technewsworld.com/wp-content/uploads/sites/3/2024/04/passkey.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Tutorials</h2>
              <p className="text-gray-500 max-w-[700px] mx-auto text-lg md:text-xl">
                Explore our curated selection of the latest and greatest tutorials to expand your knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <Card>
                <CardHeader>
                  <img
                    alt="React Tutorial"
                    className="rounded-t-lg w-full h-auto"
                    src="https://cdn.mindmajix.com/blog/images/reactjs-tutorial-2907.png"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400} />
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <span>May 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold">Mastering React: A Comprehensive Guide</h3>
                  <p className="text-gray-500 line-clamp-3">
                    Dive into the world of React, the popular JavaScript library for building user interfaces. Learn how
                    to create dynamic and responsive web applications with ease.
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 font-medium text-gray-950 hover:underline dark:text-red-50"
                    href="#">
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Angular Tutorial"
                    className="rounded-t-lg w-full h-auto"
                    height={200}
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20231009182919/Angular-PrimeNG-copy.webp"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400} />
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 1, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold">Unleashing the Power of Angular</h3>
                  <p className="text-gray-500 line-clamp-3">
                    Explore the world of Angular, the powerful TypeScript-based framework for building complex web
                    applications. Learn how to leverage its features and best practices.
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 font-medium text-gray-950 hover:underline dark:text-red-50"
                    href="#">
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Vue.js Tutorial"
                    className="rounded-t-lg w-full h-auto"
                    height={200}
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240103164616/Vuejs-Tutorial.png"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400} />
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold">Mastering Vue.js: A Beginner's Guide</h3>
                  <p className="text-gray-500 line-clamp-3">
                    Discover the world of Vue.js, the progressive JavaScript framework for building user interfaces.
                    Learn how to create dynamic and interactive web applications.
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 font-medium text-gray-950 hover:underline dark:text-red-50"
                    href="#">
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Vue.js Tutorial"
                    className="rounded-t-lg w-full h-auto"
                    
                    src="https://cdn.mindmajix.com/blog/images/reactjs-tutorial-2907.png"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400} />
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold">Mastering Vue.js: A Beginner's Guide</h3>
                  <p className="text-gray-500 line-clamp-3">
                    Discover the world of Vue.js, the progressive JavaScript framework for building user interfaces.
                    Learn how to create dynamic and interactive web applications.
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 font-medium text-gray-950 hover:underline dark:text-red-50"
                    href="#">
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32">
          <div
            className="container px-4 md:px-6 grid gap-8 md:gap-12 lg:grid-cols-2 items-center justify-center">
            <div className="flex justify-center">
              <img
                alt="Blog Image"
                className="rounded-lg"
                height={400}
                src="https://www.vmware.com/content/dam/digitalmarketing/events/vmware-explore/2024/global/vmwx24-preview-bnr.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Blog</h2>
              <p className="text-gray-300 max-w-[600px] text-lg md:text-xl">
                Stay up-to-date with the latest trends, insights, and developments in the tech world by reading our
                blog.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Visit the Blog
              </Link>
            </div>
          </div>
        </section>
        
        {/* why learn from GeeksforGeeks.dev */}
        <section className="bg-gray-950 text-gray-50 py-10 md:py-15 lg:py-20">
          <div
            className="w-full px-4 md:px-6 grid gap-8 md:gap-12 lg:grid-cols-2 items-center justify-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-5xl">
              Why GeeksforGeeks.dev?
              </h1>
              <p className="text-gray-300 max-w-[600px] text-lg md:text-xl">
              Our tech tutorials are designed to help you stay ahead of the curve and master the latest technologies. Whether you're a beginner or an experienced developer, our tutorials cover a wide range of topics to help you expand your skills and knowledge.
              </p>
              <div className="flex gap-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#">
                  Explore Tutorials
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-6 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                  href="#">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Hero Image"
                className="rounded-lg"
                src="https://cdn.pixabay.com/photo/2019/04/15/11/12/why-4129050_640.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
            </div>
          </div>
        </section>



      </main>

    </div>)
  );
}

function ArrowRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>)
  );
}


function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>)
  );
}


