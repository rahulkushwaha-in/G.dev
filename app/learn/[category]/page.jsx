"use client";
import SidebarLeft from "@/components/sidebar";
import React from "react";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams();

  return (
    <div className="flex">
      <div className="bg-gray-200 h-screen w-52 flex flex-col overflow-y-scroll">
        <SidebarLeft category={params.category} />
      </div>

      <div className="flex-1 bg-gray-100">
        Main Category Page design this manually
      </div>

      <div className=" bg-gray-200 h-screen w-52">Empty Space</div>
    </div>
  );
};

export default CategoryPage;
