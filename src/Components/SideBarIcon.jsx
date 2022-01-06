import React from 'react'


const SideBarIcon = ({icon, text = 'ToolTip 💡'}) => {
    return (
        <div className="group relative flex items-center justify-center h-12 w-12 mx-auto shadow-lg bg-gray-800 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear">
           {icon}
           <span className="absolute h-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
                        text-white bg-gray-900 
                        text-xs font-bold 
                        transition-all duration-200 scale-0 origin-left group-hover:scale-100">
            {text}
           </span>
        </div>
    )
}

export default SideBarIcon
