import React, { useState } from 'react';
import { BiListUl,BiX, BiSearch,  BiChevronDown } from 'react-icons/bi';
import "../App.css";
import Logo from '../assets/images/travel-guide-logo.jpg';
import MapWrapper from './MapWrapper/MapWrapper';
import Tooltip from './utils/Tooltip';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMouseEntered(false);
  };

  const handleMouseEnter =()=>{
    setIsMouseEntered(true);
  }
  const handleMouseLeave =()=>{
    setIsMouseEntered(false);
  }

  return (
        <div className="flex">
      
          {/* MapWrapper occupies the full viewport */}
          <MapWrapper />
      
          {isSidebarOpen ? (
            <div className="sidebar fixed top-0 bottom-0 left-0 p-2 lg:w-[400px] md:w-[300px] w-[200px] overflow-y-auto text-center bg-white z-10">
              <div className="text-gray-400 text-xl border-b-2">
                <div className="p-2.5 flex flex-col items-center">
                <BiX
                    className="absolute top-4 right-4 cursor-pointer lg:hidden md:hidden"
                    onClick={toggleSidebar}
                  />
                  <img style={{ width: 'auto' }} src={Logo} alt="" />
                  <h1 className="font-bold text-gray-800 lg:text-[50px] md:text-[35px] sm:text-[35px] text-[30px] ml-3">Safarnama</h1>
                  
                </div>
              </div>
      
              <div className="py-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2">
                <span className="text-[20px] ml-4 font-bold">Experience</span>
              </div>
              <div className="p-2.5 py-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2">
                <span className="text-[20px] ml-4 font-bold">Places</span>
              </div>
              <div className="p-2.5 py-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2">
                <span className="text-[20px] ml-4 font-bold">Routes</span>
              </div>
              <div className="p-2.5 py-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2">
                <span className="text-[20px] ml-4 font-bold">Projects</span>
              </div>
              <div className="p-2.5 py-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2">
                <span className="text-[20px] ml-4 font-bold">Media Library</span>
              </div>
              <div className="p-2.5 py-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2">
                <span className="text-[20px] ml-4 font-bold">User</span>
              </div>
              <div className="p-2.5 py-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black">
                <span className="text-[20px] ml-4 font-bold">Logout</span>
              </div>
            </div>)
            :
            <span
            className="absolute text-white text-5xl top-5 left-5 cursor-pointer z-10"
            onClick={toggleSidebar}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <BiListUl className="px-2 bg-gray-900 rounded-md" />
          </span>
          }
           
           
        {isMouseEntered &&
            <Tooltip text={'Toggle Menu view'} />
        } 
        </div>      
  );
};

export default Sidebar;
