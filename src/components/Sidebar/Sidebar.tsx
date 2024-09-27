import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out w-64 bg-gray-500 text-white`}
      >
        <div className="p-5">
          <h1 className="text-xl font-bold">Sidebar</h1>
        </div>
        <ul className="p-4">
          <li className="p-2 hover:bg-gray-600 rounded">Dashboard</li>
          <li className="p-2 hover:bg-gray-600 rounded">Settings</li>
          <li className="p-2 hover:bg-gray-600 rounded">Profile</li>
          <li className="p-2 hover:bg-gray-600 rounded">Logout</li>
        </ul>
      </div>

      {/* Main content */}
      {/* <div className="flex-1 flex flex-col bg-blue-100">
        <header className="p-4 bg-gray-100 shadow-md w-full">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={toggleSidebar}
          >
            {isOpen ? 'Close' : 'Open'} Sidebar
          </button>
        </header>

        <main className="p-6 bg-gray-100 flex-grow">
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p>
            This is the main content area. The sidebar can be toggled with the button in the header.
          </p>
        </main>
      </div> */}

      {/* Overlay */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )} */}
    </div>
  );
}

export default Sidebar;