import React from 'react'

const SideBarIcon = ({ icon, text = 'ToolTip 💡' }) => {
  return (
        <div className="group relative flex items-center justify-center md:h-20 md:w-20 h-10 w-10 mx-auto shadow-lg bg-gray-800 hover:bg-green-600 rounded-[50%] hover:text-white  hover:rounded-3xl transition-all duration-100 ease-linear">
           {icon}
           <span className="absolute h-auto p-2 m-2 min-w-max left-24 rounded-md shadow-md
                        text-white bg-gray-900
                        text-xs font-bold
                        transition-all duration-200 scale-0 origin-left md:group-hover:scale-100">
            {text}
           </span>
        </div>
  )
}

export default SideBarIcon
