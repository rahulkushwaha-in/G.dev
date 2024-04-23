import SidebarLeft from '@/components/sidebar'
import React from 'react'

const Category = () => {
  // path = /learn/react/what-is-react
  //what-is-react

  // ab, mujhe slug pass krke article ka data nikalna hai,
  // uske bad {main content } wale section mei article dikha dena h 

  return (
<div className="flex">

<div className="bg-gray-200 h-screen w-52 flex flex-col overflow-y-scroll">
<SidebarLeft />
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

export default Category