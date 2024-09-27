import React from "react";

const Tooltip:React.FC<{text: string}> = ({ text }) => {

return(
<div className="absolute bg-gray-800 text-white font-bold text-xl top-10 left-20 p-2 rounded-md z-20">
      {text}
    </div>
)
}
export default Tooltip;  