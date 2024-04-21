"use client";

import leftbarData from "@/public/leftbarData.json"
import { usePathname } from "next/navigation"
import SidebarItem from "./item";



function getMenuContent(techStack) {
  // const filePath = path.join(process.cwd(), 'public', 'menuContent.json'); // Adjust the path accordingly
  // const menuContentData = JSON.parse(leftbarData);
  switch (techStack) {
    case "react":
      return leftbarData.react;
    case "javascript":
      return leftbarData.javascript;
      case "css":
        return leftbarData.css;
    // Add cases for other tech stacks if needed
    default:
      return []; // Return an empty array if the tech stack is not recognized
  }
}

const SidebarLeft = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const currentCategory = pathParts[pathParts.length - 1];
  console.log(currentCategory)
  // console.log(leftbarData)


  // This tells which category leftbar data it should show
  const techStack = currentCategory; // Change this to "JavaScript" or other tech stacks as needed

  //setting the leftbar according to the user hit the URL like if react then react leftbar, if js then js leftbar data
const menuContent = getMenuContent(techStack) ;
// console.log(menuContent);

  return (
    <div>
      <div className="flex flex-col space-y-6 w-full">
      <h3 className="bg-gray-300 py-4 px-2 sticky top-0 z-30">Menu</h3>
        <div className="flex flex-col space-y-2">
          {menuContent.map((item, index) => (
            <SidebarItem key={index} item={item}  currentCategoryURL={currentCategory} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;