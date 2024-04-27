import SidebarLeft from "@/components/sidebar";
import React from "react";

const Learn = () => {
  // path = /learn/react/what-is-react
  //what-is-react

  // ab, mujhe slug pass krke article ka data nikalna hai,
  // uske bad {main content } wale section mei article dikha dena h

  return (
    <div className="flex">
      <div className="bg-gray-200 h-screen w-52 flex flex-col overflow-y-scroll z:1 absolute lg:relative">
        <SidebarLeft />
      </div>
      <div className="flex-1 bg-gray-100 p-8">Main Content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum accusamus velit impedit dolorem possimus modi rem, rerum autem culpa, vel quidem minus ea. Ut iste, beatae repellendus voluptatum ratione commodi blanditiis dolore iure saepe omnis ducimus esse? Aspernatur aut ea nemo, deserunt repellendus dolorum alias molestias ratione voluptate sapiente inventore ducimus veniam ab minus suscipit autem laudantium magni earum consequatur. Explicabo, molestias! Molestias, nulla ea. Cupiditate blanditiis molestias quibusdam quas corrupti! Totam quidem eaque assumenda ipsum molestiae, neque facere voluptatum minima sint ducimus quis possimus inventore pariatur doloribus. Ipsam ad amet non nulla nisi temporibus numquam, corrupti sed eius error!</div>
      <div className=" bg-gray-200 h-screen w-52">Empty Space</div>
    </div>
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
