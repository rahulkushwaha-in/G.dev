import SidebarLeft from '@/components/sidebar';
import React from 'react'

const page = () => {
  return (
    <div className="flex">

<div className="bg-gray-200 h-screen w-52 flex flex-col overflow-y-scroll">
    <SidebarLeft/>
</div>
    

    <div className="flex-1 bg-gray-100">
        Main Content
    </div>
    
    <div className=" bg-gray-200 h-screen w-52">
        Empty Space
    </div>
</div>
  )
}

export default page;