import React, { useEffect, useState } from 'react';
import { PopsType, PopMenuOptions } from '../../types/Props';
import cardMenuOptions from '../utils/CardMenuOptions';


const PopsCard:React.FC<PopsType> = ({ title, menu, width = 'w-96', onClose, position, onChoose }) => {
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const [popsList, setPopsList] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const windowHeight :number = window.innerHeight;
    const cardHeight = 180; // Approximate height of the card
    const spaceBelow : number = windowHeight - position.bottom;

    // Check if there's enough space below the clicked element, otherwise place it above
    if (spaceBelow < cardHeight) {
      setCardPosition({ top: position.top - cardHeight, left: position.left });
    } else {
      setCardPosition({ top: position.bottom, left: position.left });
    }
  }, [position]);

  useEffect(()=>{    
    const newPopsList = cardMenuOptions[menu as keyof PopMenuOptions]?.map((option, index) => (
      <div key={index} onClick={()=>onChoose(option.path)} className={`${option.style} flex flex-row text-lg lg:text-xl sm:text-lg font-normal text-black no-underline hover:text-black hover:underline hover:decoration-blue-400 lg:my-2 my-2 !important cursor-pointer`} >
        <span className='mr-2'><option.icon className='icon-size'/></span>{/* Render the icon */}
        <span>{option.title}</span> {/* Render the title */}
      </div>
    )) || []; // Fallback to an empty array if no options are found
    setPopsList(newPopsList); 
  },[menu]);

  return (
    <div className="fixed inset-0 z-10" onClick={onClose}>
      <div
        className={`absolute ${width} bg-white p-2 rounded-md shadow-md shadow-slate-500`}
        style={{ top: `${cardPosition.top}px`, left: `${cardPosition.left}px` }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the card
      >
        {title &&
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              &times;
            </button>
          </div>
        }
        <div className="text-gray-500 flex flex-col sm:my-2 my-1 ml-2">{popsList}</div>
      </div>
    </div>
  );
};

export default PopsCard;
