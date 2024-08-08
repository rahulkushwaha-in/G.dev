import SidebarLeft from "@/components/sidebar";
import React from "react";

const Learn = () => {
  // path = /learn/react/what-is-react
  //what-is-react

  // ab, mujhe slug pass krke article ka data nikalna hai,
  // uske bad {main content } wale section mei article dikha dena h

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="sticky top-0 hidden sm:block sm:col-span-2 h-screen overflow-y-scroll">
        <SidebarLeft category={"typescript"} />
        </div>
        <div className="p-8 mx-auto w-full col-span-12 sm:col-span-8">
          <div className="max-w-full prose prose-blue prose-lg prose-li:marker:text-blue-500 prose-img:rounded prose-img:m-auto prose-img:object-cover prose-text-wrap dark:prose-invert">
            <h1>Explore Tutorials</h1>
          </div>
        </div>
        <div className=" h-full hidden sm:block col-span-2"></div>
      </div>
    </>
  );
};

export default Learn;

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
