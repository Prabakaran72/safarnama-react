import React, { useEffect, useState } from 'react';
import { PopsType, PopMenuOptions } from '../../types/Props';
import Icons from '../utils/IconLists';
import { Link } from 'react-router-dom';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const cardMenuOptions :PopMenuOptions = {
  experience : [{icon: Icons.FolderOpenIcon, title: 'Open', path: '', style: ''}, {icon: Icons.CreateNewFolderIcon, title: 'Create', path: '', style: ''},{icon: Icons.FolderSharedIcon, title: 'Collaborators', path: '', style: ''},{icon: Icons.EditIcon, title: 'Edit', path: '', style: ''},{icon: Icons.ContentCopyIcon, title: 'Clone', path: '', style: ''}, {icon: Icons.DownloadIcon, title: 'Export', path: '', style: ''}],
  places: [{icon: AddLocationIcon, title: 'Create', path: '', style: ''},{icon: Icons.ViewListIcon, title: 'View all', path: '', style: ''}],
  routes: [{icon: Icons.NavigationIcon, title: 'Create', path: '', style: ''},{icon: Icons.ViewListIcon, title: 'View all', path: '', style: ''}],
  projects: [{icon: Icons.ViewListIcon, title: 'View all', path: '', style: ''}],
  publish: [{icon: Icons.ExitToAppIcon, title: '', path: '', style: ''}],
  media: [{icon: Icons.ExitToAppIcon, title: '', path: '', style: ''}],
  user: [{icon: Icons.ExitToAppIcon, title: 'Logout', path: '/logout', style: 'mb-4'}, {icon: Icons.PersonIcon, title: 'Edit profile', path: '/edit-profile', style: 'mb-4'}],
  admin: [{icon: Icons.ExitToAppIcon, title: '', path: '', style: ''}]
}

const PopsCard:React.FC<PopsType> = ({ title, menu, width = 'w-96', onClose, position }) => {
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const [popsList, setPopsList] = useState<JSX.Element[] | null>(null);

  console.log("position => ",position);
  useEffect(() => {
    const windowHeight :number = window.innerHeight;
    const cardHeight = 180; // Approximate height of the card
    const spaceBelow : number = windowHeight - position.bottom;
    console.log("** windowHeight",  windowHeight)
    console.log("** position.bottom",  position.bottom)
    console.log("** spaceBelow",  spaceBelow)
    // Check if there's enough space below the clicked element, otherwise place it above
    if (spaceBelow < cardHeight) {
      setCardPosition({ top: position.top - cardHeight, left: position.left });
    } else {
      setCardPosition({ top: position.bottom, left: position.left });
    }
  }, [position]);

  useEffect(()=>{
    
    const newPopsList = cardMenuOptions[menu as keyof PopMenuOptions]?.map((option, index) => (
      <Link key={index} to={option.path} className={`${option.style} flex flex-row text-lg lg:text-xl sm:text-lg font-normal text-black no-underline hover:text-black hover:underline hover:decoration-blue-400 lg:my-2 my-2 !important`} >
        <span className='mr-2'><option.icon className="w-20 h-20"/></span>{/* Render the icon */}
        <span>{option.title}</span> {/* Render the title */}
      </Link>
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
