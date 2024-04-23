import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import leftbarData from "@/public/leftbarData.json"
import { client } from "@/sanity/lib/client";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getMenuContent(techStack) {
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
export async function getBlogCardData(){
  const query = `
  *[_type=='post'] | order(_createdAt desc){
    title,
    smallDescription,
    mainImage,
    "currentSlug":slug.current 
  }
  `
  const data = await client.fetch(query);
  return data;
}