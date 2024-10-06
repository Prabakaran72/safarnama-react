import React from "react";

const Tooltip:React.FC<{text: string,  position?: { top?: string; left?: string }}> = ({ text, position={ top: 'top-10', left: 'left-20' }}) => {

return(
<div className={`absolute bg-gray-800 text-white font-bold text-xl ${position.top} ${position.left} p-2 rounded-md z-50`}>
      {text}
    </div>
)
}
export default Tooltip;  
