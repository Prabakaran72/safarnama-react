import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import DragAndDrop from '../../utils/DragAndDrop';
import Icon from 'material-icons-react'; // If you want to use Material-UI's IconButton
import { FilteredIcons } from '../../utils/Maticons';
import { useAuth } from '../../Auth/AuthProvider';
import { typeReducer, ActionType, InitailState } from './TypeReducer';

const maxFileSizeAllowed: number = import.meta.env.VITE_TYPE_ICON_SIZE;

const AddType: React.FC<{ onClose: (() => void), onSubmit: (() => void) }> = ({ onClose, onSubmit }) => {
    const { state, dispatch } = useAuth();
    const [formData, dispatchFun] = useReducer<React.Reducer<any, any>>(typeReducer, InitailState);
    const [isFocused, setIsFocused] = useState<string>('name');
    const inputRefTypeName = useRef<HTMLInputElement>(null);
    const inputRefTypeIconSearch = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [searchIcon, setSearchIcon] = useState<string | ''>('');
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const filteredIconsList = useMemo(() => {
        return FilteredIcons(searchIcon);
    }, [searchIcon])

    // Function to handle file updates
    const handleFileUpdate = (newFile: File | null | string) => {
        if (newFile) {
            // setFile(newFile);
            setError(null); // Clear any previous errors
            dispatchFun({ type: 'handleFileUploaded', payload: { file: newFile } });
        }
        else {
            dispatchFun({ type: 'handleFileUploaded', payload: { file: null } });
        }
    };

    const handleIconSelect = (icon: string) => {
        dispatchFun({ type: 'handleIconSelect', payload: { icon } });
    }

    useEffect(() => {
        if (state.isAuthenticated === true) {
            const { name, icon, file } = formData;
            console.log('name && icon || file ', name && icon || file ? true : false)
            console.log('isFormValid ', isFormValid)
            if (name && icon || file && isFormValid === false) {
                setIsFormValid(true);
            }
            else if (!(name && icon || file) && isFormValid === true) {
                setIsFormValid(false);
            }
        }
        else if (isFormValid === true) {
            setIsFormValid(false);
        }
    }, [formData])


    return (
        <>
            <div className="bg-white rounded-lg p-8 z-10 w-[400px] text-left">
                <h2 className="text-2xl font-semibold">{'Add new place type'}</h2>
                <p className="mt-4 text-sm mb-4">{'Here can create a new place type to assign your places to.'}</p>
                <div className="flex flex-row relative text-md sm:text-lg text-left w-60">
                    <input
                        id="type"
                        name="type"
                        ref={inputRefTypeName}
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatchFun({ type: 'handleName', payload: e.target.value })}
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused('')} // Keep label reduced if there's text
                        className={`w-full border-b border-b-1 border-cyan-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-md sm:text-sm py-2 bg-transparent ${formData.name && 'border-gray-600'} w-[60%]`}
                        placeholder=""
                    />
                    <label
                        htmlFor="collableId"
                        className={`absolute transition-all duration-300 ease-in-out ${formData.name || isFocused === 'collableId' ? 'text-cyan-800 text-xs -top-2' : 'text-cyan-800 text-sm top-4'}  ${formData.name && 'text-gray-600'}`}>Name</label>
                </div>

                <DragAndDrop
                    stateDispatch={handleFileUpdate} // Function to update file state in the parent
                    supportedFormats={['image/png']} // Supported file format
                    error={error} // Error message from parent
                    placeholder={'Drop png here, or click to upload'}
                    maxFileSizeAllowed={Number(maxFileSizeAllowed)}
                />

                <div>
                    <div>
                        <div className="flex flex-row relative text-md sm:text-lg text-left w-60">
                            <input
                                id="search"
                                name="search"
                                ref={inputRefTypeIconSearch}
                                value={searchIcon}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearchIcon((prev: string) => e.target.value)}
                                onFocus={() => setIsFocused('search')}
                                onBlur={() => setIsFocused('')} // Keep label reduced if there's text
                                className={`w-full border-b border-b-1 border-cyan-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-md sm:text-sm py-2 bg-transparent ${searchIcon && 'border-gray-600'} w-[60%]`}
                                placeholder=""
                            />
                            <label
                                htmlFor="search"
                                className={`absolute transition-all duration-300 ease-in-out ${searchIcon || isFocused === 'search' ? 'text-cyan-800 text-xs -top-2' : 'text-cyan-800 text-sm top-4'}  ${searchIcon && 'text-gray-600'}`}>Search for an icon</label>
                        </div>

                    </div>
                    {!formData.file &&
                        <div className='h-48 grid grid-cols-5  gap-0 row-gap-10 gap-x-0 overflow-auto text-black'>
                            {filteredIconsList.length > 0 && filteredIconsList.map(icon => (
                                <div
                                    key={icon}
                                    className={`flex flex-col items-center justify-center rounded-full ${formData.icon === icon ? 'bg-green-600' : 'bg-none'} h-10 w-10 cursor-pointer`}
                                    onClick={() => handleIconSelect(icon)}
                                >
                                    <Icon icon={icon} size={24} color="black" />
                                </div>
                            ))}
                        </div>
                    }
                </div>

                <div className='flex justify-end space-x-4 mt-4'>
                    <button
                        className=" bg-transparent border-none text-black px-4 rounded hover:border-none outline-none focus:outline-none"
                        onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className={`bg-transparent border-none ${isFormValid === true ? 'text-black' : 'text-gray-400'}  px-4 rounded hover:border-none outline-none focus:outline-none`}
                        onClick={onSubmit}
                        disabled={isFormValid === false}
                    >
                        Create
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddType