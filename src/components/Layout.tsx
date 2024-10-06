import React, { useEffect, useState } from 'react';
import { BiListUl, BiX, BiSearch, BiChevronDown } from 'react-icons/bi';
import "../App.css";
import Logo from '../assets/images/travel-guide-logo.jpg';
import MapWrapper from './MapWrapper/MapWrapper';
import SignInCard from './Pages/static/SignInCard';
import WelcomeCard from './Pages/static/WelcomeCard';
import { useAuth } from './Auth/AuthProvider';
import { PopsPosition, PopsType, PopMenuWidthType, MenuNameType, PopMenuOptionType, FormMappingType } from '../types/Props';
import PopsCard from '../components/utils/PopsCard';
import PopsForm from './utils/PopsForm';
import FormMapping from './utils/FormMapping';
import SidebarForm from './Pages/SidebarForm';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';

const PopMenuWidth: PopMenuWidthType = {
  experience: 'w-54',
  places: 'w-48',
  routes: 'w-48',
  projects: 'w-48',
  publish: 'w-48',
  media: 'w-48',
  user: 'w-48',
  admin: ''
}

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const { state, dispatch } = useAuth();
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showMenuForm, setShowMenuForm] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<{ title: string | null, width: string, menu: string }>({ title: null, width: 'w-45', menu: '' });
  const [menuPosition, setMenuPosition] = useState({ top: 0, bottom: 0, left: 0 });
  const [choosedMenuForm, setChoosedMenuForm] = useState<FormMappingType | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMouseEntered(false);
  };
  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  }
  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  }
  const handleMenuPops = (e: React.MouseEvent<HTMLElement>, menuName: MenuNameType) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({ top: rect.top, bottom: rect.bottom, left: rect.left });
    setSelectedContent({ title: null, width: PopMenuWidth[menuName], menu: menuName });
    if (['media', 'publish'].includes(menuName)) {
      setShowMenuForm(true);
      setShowCard(false);
      const asset = FormMapping.find((obj: FormMappingType) => obj?.path?.split('/')[0] === menuName.split('/')[0]);
      setChoosedMenuForm(asset || null);
    }
    setShowCard(true);
  }
  /** handle close and Open Sidebar with menu to toggle */
  const closeCard = () => {
    setShowCard(false);
  };
  /**Handle the Forms in the sidebar */
  const showPopsMenuForm = (path: PopMenuOptionType['path']) => {
    console.log("********path => ", path);
    setShowMenuForm(true);
    setShowCard(false);
    const asset = FormMapping.find((obj: FormMappingType) => obj.path === path);
    console.log("asset => ", asset);
    setChoosedMenuForm(asset || null);
  }

  /** Handle close the menu forms */
  const onBack = () => {
    setChoosedMenuForm(null);
    // setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    console.log("choosedMenuForm ==> ", choosedMenuForm)
    dispatch({ type: 'App/updateActiveMenu', payload: { menu: { ...choosedMenuForm }, isLoading: true } })
  }, [choosedMenuForm, choosedMenuForm])

  useEffect(() => {
    if (state?.toast?.message) {
      const { message, type, position } = state?.toast;
      switch (type) {
        case 'success':
          toast.success(message, {
            position: position,
            theme: "dark",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: ''
          });
          break;
        case 'error':
          toast.error(message, {
            position: position,
            theme: "dark",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: ''
          });
          break;
        case 'warn':
          toast.warn(message, {
            position: position,
            theme: "dark",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: ''
          });
        case 'info':
          toast.info(message, {
            position: position,
            theme: "dark",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: ''
          });
          break;
        default:
          toast(message, {
            position: position,
            theme: "dark",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: ''
          });
      }
    }
  }, [state.toast])

  return (
    <>
      <></>
      <div className="flex">

        {/* MapWrapper occupies the full viewport */}
        <MapWrapper />
        {isSidebarOpen || choosedMenuForm?.formPosition === 'sidebar' ? (
          <div className="sidebar fixed top-0 bottom-0 left-0 p-2 lg:w-[400px] md:w-[300px] w-[200px] overflow-y-auto text-center bg-white z-10">
            {choosedMenuForm?.formPosition === 'sidebar' ?
              <SidebarForm
                key={choosedMenuForm?.path || 'default'}
                path={choosedMenuForm?.path || null}
                formPosition={choosedMenuForm?.formPosition || null}
                title={choosedMenuForm?.title}
                // onBack={choosedMenuForm?.onBack || null}
                showMenuForm={showMenuForm}
                onBack={onBack} />
              :
              isSidebarOpen &&
              (<div className="text-gray-400 text-xl border-b-2">
                <div className="">
                  <div className="p-2.5 flex flex-col items-center">
                    <BiX
                      className="absolute top-4 right-4 cursor-pointer lg:hidden md:hidden"
                      onClick={toggleSidebar}
                    />
                    <img style={{ width: 'auto' }} src={Logo} alt="" />
                    <h1 className="font-bold text-teal-900 lg:text-[50px] md:text-[35px] sm:text-[35px] text-[30px] ml-3">Safarnama</h1>

                  </div>
                </div>

                <div className="py-2.5 sm:py-4 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2" onClick={(e) => handleMenuPops(e, 'experience')}>
                  <span className="text-lg lg:text-xl sm:text-lg ml-4 font-normal" >Experience</span>
                </div>
                <div className="p-2.5 sm:py-4 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2" onClick={(e) => handleMenuPops(e, 'places')}>
                  <span className="text-lg lg:text-xl sm:text-lg ml-4 font-normal" >Places</span>
                </div>
                <div className="p-2.5 sm:py-4 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2" onClick={(e) => handleMenuPops(e, 'routes')}>
                  <span className="text-lg lg:text-xl sm:text-lg ml-4 font-normal" >Routes</span>
                </div>
                <div className="p-2.5 sm:py-4 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2" onClick={(e) => handleMenuPops(e, 'publish')}>
                  <span className="text-lg lg:text-xl sm:text-lg ml-4 font-normal" >Publish</span>
                </div>
                <div className="p-2.5 sm:py-5 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2" onClick={(e) => handleMenuPops(e, 'projects')}>
                  <span className="text-lg lg:text-xl sm:text-lg ml-4 font-normal" >Projects</span>
                </div>
                <div className="p-2.5 sm:py-4 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2" onClick={(e) => handleMenuPops(e, 'media')}>
                  <span className="text-lg lg:text-xl sm:text-lg md:text-lg ml-4 font-normal">Media Library</span>
                </div>
                <div className="p-2.5 sm:py-4 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black border-b-2" onClick={(e) => handleMenuPops(e, 'user')}>
                  <span className="text-lg lg:text-xl sm:text-lg ml-4 font-normal" >User</span>
                </div>
                {state?.user?.roles.includes('admin') && <div className="p-2.5 sm:py-4 py-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 hover:text-gray-500 text-black" onClick={(e) => handleMenuPops(e, 'admin')}>
                  <span className="text-lg lg:text-xl sm:text-lg ml-4 font-normal" >Admin</span>
                </div>}

                {showCard && (
                  <PopsCard
                    title={selectedContent?.title}
                    menu={selectedContent.menu}
                    width={selectedContent.width} // Customizable width
                    position={menuPosition}
                    onClose={closeCard}
                    onChoose={showPopsMenuForm}
                  />
                )}
              </div>)}
          </div>

        )
          :
          <span
            className="absolute text-white text-5xl top-5 left-5 cursor-pointer z-10"
            onClick={toggleSidebar}
          >
            <Tooltip title="Toggle Menu view">
              {/* <BiListUl className="px-2 bg-gray-900 rounded-md" /> */}
              <ListIcon fontSize="large" style={{ color: 'white', backgroundColor: 'black' }} className='rounded' />
            </Tooltip>
          </span>
        }

        {showMenuForm && choosedMenuForm?.formPosition === 'overlay' ?
          <PopsForm
            key={choosedMenuForm?.path || 'default'}
            path={choosedMenuForm?.path || null}
            formPosition={choosedMenuForm?.formPosition || null}
            // onBack={choosedMenuForm?.onBack || null}
            onBack={onBack}
            showMenuForm={showMenuForm}
            title={choosedMenuForm.title}
          />
          : null
        }
      </div>

      {state?.isAuthenticated !== true ?
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <span>{state?.isAuthenticated}</span>
          <SignInCard />
        </div>
        : null}
      {/*  :
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <WelcomeCard />
        </div>
      } */}
      <ToastContainer />
      {state.toast?.msg &&
        <ToastContainer />
      }

    </>
  );
};

export default Sidebar;
