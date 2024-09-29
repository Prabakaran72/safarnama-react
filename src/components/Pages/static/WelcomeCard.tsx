import React, { useEffect, useState } from 'react'
import Terms from './Terms';
// import apiHelper from '../utils/apiHelper';
const API_URL = import.meta.env.VITE_API_URL;
const WelcomeCard = () => {
    const [isOpenTerms, setIsOpenTerms] = useState<boolean>();
    const openTerms = () => {
        setIsOpenTerms(true);
    }
    const closeTerms = () => {
        setIsOpenTerms(false);
    }

    return (
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-sm text-left">
        <h1 className="text-4xl font-semibold mb-8 leading-normal">Welcome to Safarnama</h1>
        <div className="text-xl mb-4">
          <p className="text-gray-700 mb-4">
            We recommend you use Google Chrome on a desktop to run this application.
          </p>
          <p className="text-gray-700 mb-10">
            To begin, create a new or open an existing experience.
          </p>
        </div>
        <div className="flex justify-end space-x-4 text-xl">
          <button className="bg-transparent text-black font-semibold py-2 px-4 border-none">
            Create
          </button>
          <button className="bg-transparent text-black font-semibold py-2 px-4 border-none">
            Open
          </button>
        </div>
      </div>
    );
};

export default WelcomeCard;