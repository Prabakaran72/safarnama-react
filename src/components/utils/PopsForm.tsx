import React, {useEffect} from 'react';
import {FormMappingType} from '../../types/Props';
import Projects from '../Pages/Projects';
import Publish from '../Pages/Publish';
import Routes from '../Pages/Routes';
import Experiences from '../Pages/Experiences';
import MediaLibrary from '../Pages/MediaLibrary';


const PopsForm: React.FC<FormMappingType & {onBack : ()=> void , showMenuForm: boolean }> = ({ path, formPosition, title, onBack, showMenuForm }) => {

  useEffect(() => {
    console.log(`path - ${path} ### formPosition - ${formPosition} ### onBack - ${onBack}`);
  }, [path, formPosition, showMenuForm ]); 
    // "project = lg:max-w-7xl"
    // Publish = lg:max-w-2xl
    // Route = lg:max-w-7xl
    // Experiences = lg:max-w-2xl
    //Media= lg:max-w-4xl max-w-4xl
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-slate-900 bg-opacity-50" onClick={onBack}>
      {/* <div className="mx-5 bg-white rounded-md shadow-lg min-w-min sm:max-w-md md:max-w-lg lg:max-w-sm "> */}
      <div className="mx-5 bg-white rounded-md shadow-lg sm:max-w-md md:max-w-lg lg:max-w-4xl w-[85vw] " onClick={(e) => e.stopPropagation()}>      

        {/* <Projects/> */}
        {/* <Publish /> */}
        {/* <Routes /> */}
        {/* <Experiences /> */}
        <MediaLibrary onBack={onBack}/>
      {/* </div> */}
    </div>
    </div>
  )
}

export default PopsForm