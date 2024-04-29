"use client";
import SidebarLeft from "@/components/sidebar";
import React from "react";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams();
  const category = params.category;

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="sticky top-0 hidden sm:block sm:col-span-2 h-screen overflow-y-scroll">
          <SidebarLeft category={category} />
        </div>
        <div className="p-8 mx-auto w-full col-span-12 sm:col-span-8">
          <div className="max-w-full prose prose-blue prose-lg prose-li:marker:text-blue-500 prose-img:rounded prose-img:m-auto prose-img:object-cover prose-text-wrap dark:prose-invert">
            Category Page
          </div>
        </div>
        <div className=" h-full hidden sm:block col-span-2"></div>
      </div>
    </>
  );
};

export default CategoryPage;
