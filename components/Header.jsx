import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Header(){
    return (
        <>
         <header
        className="sticky top-0 bg-gray-950 text-gray-50 px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <BookIcon className="h-6 w-6" />
          <span className="text-xl font-semibold"><span className="text-blue-500 text-xs">GeeksforGeeks</span><span className="text-red-600 text-xl">.</span><span>dev</span></span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link className="hover:underline" href="/">
            Tutorials
          </Link>

          <Link className="hover:underline" href="/">
            Blog
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </nav>
        <Button className="lg:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>

        </>
    )
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
  function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}