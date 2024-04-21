import SidebarLeft from '@/components/sidebar'
import React from 'react'

const Category = () => {
  return (
<div class="flex">

<div class="bg-gray-200 h-screen w-52 flex flex-col overflow-y-scroll">
    <SidebarLeft/>
</div>
    

    <div class="flex-1 bg-gray-100">
        Main Content
    </div>
    
    <div class=" bg-gray-200 h-screen w-52">
        Empty Space
    </div>
</div>



  )
}

export default Category