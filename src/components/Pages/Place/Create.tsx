import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { DropDownOptionWithIconType, ModalPopupType } from '../../../types/Props';
import ModalPops from '../../utils/ModalPops';
import Icon from 'material-icons-react';
import apiHelper from '../../../utils/apiHelper';
import { useAuth } from '../../Auth/AuthProvider';
import { typeReducer, ActionType, InitailState } from './TypeReducer';

const Create = () => {
    const { state, dispatch } = useAuth();
    const API = apiHelper(state, dispatch);
    const [isFocused, setIsFocused] = useState<string>('name');
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string | ''>('');
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [typeList, setTypeList] = useState<DropDownOptionWithIconType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, dispatchFun] = useReducer<React.Reducer<any, any>>(typeReducer, InitailState);//handle type
    const [placeData, setPlaceData] = useReducer<React.Reducer<any, any>>(typeReducer, InitailState);//handle type

    const [listupdated, setlistUpdated]=useState(false);
    useEffect(() => {
        const getTypeList = async () => {
            const response = await API.get('place-types/mine');
            const customeList: DropDownOptionWithIconType[] = response.map((item: any) => {
                return {
                    value: item._id,
                    label: item.name,
                    name: item.name,
                    icon: item?.imageIconURL || item.matIcon,
                    type: item?.imageIconURL ? 'image' : 'icon'
                };
                console.log("customeList", customeList);
            })
            setTypeList(customeList);
        }

        getTypeList();
    }, [listupdated])

    const handleChange = (event: any) => {
        const {value, name} = event.target;
        setSelectedOption(value ? value : '');
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOption(null);
    };
    useEffect(() => {
        if (selectedOption === -1) {
            openModal();
        }
    }, [selectedOption])

    const addType = async () => {
        const data: any = {
            name: formData.name,
            ...(formData.icon && { matIcon: formData.icon }),
            ...(formData.file && { imageIconURL: formData.file }),
        }
        const response = await API.post('place-types', data);
        if(response.status ===200){
            setlistUpdated(true);
        }
    }
    const addPlace = ()=>{
        console.log("placeData => ", placeData)
    }

    console.log('isFocused', isFocused);
    return (
        <>
            <div>
                <p className='pt-4 pl-2 text-left'>Click the map to position your new Place</p>
                <p className='pt-4 pl-2 text-left'>Trigger Zone</p>
                <p className='pt-4 pl-2 text-left leading-tight border-b-2 pb-2 mb-2'>When a user enters this area they will be notified about this Place</p>
                <div className="flex flex-row relative text-md sm:text-lg text-left px-4 pt-4 w-60 ">
                    <input
                        id="name"
                        name="name"
                        ref={inputRef}
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused('')} // Keep label reduced if there's text
                        className={`w-full border-b border-b-1 border-cyan-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-md sm:text-sm py-2 bg-transparent ${name && 'border-gray-600'} w-[60%]`}
                        placeholder=""
                    />
                    <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 ease-in-out ${name || isFocused === 'name' ? 'text-cyan-800 text-xs top-1' : 'text-cyan-800 text-sm top-8'}  ${name && 'text-cyan-600'}`}>Name</label>
                </div>
                <div className="flex flex-row relative text-md sm:text-lg text-left px-4 mt-4 w-full">
                    <FormControl
                        className={`w-52 text-black border-none border-b-2 hover:border-none focus:border-slate-200 hover:border-slate-200 ${isFocused === 'type' || !!selectedOption ? 'border-none ' : ''
                            }`}
                        variant="standard" // This removes the default box border
                    >
                        <InputLabel
                            // shrink={Boolean(isFocused ==='type' || !!selectedOption)} // Keeps label transformed if focused or there's a value
                            className={`absolute left-0 transition-transform duration-300 ease-in-out
                            ${isFocused === 'type' || !!selectedOption ? 'transform -translate-y-8 scale-75' : 'transform translate-y-6 scale-100'}`}
                        >
                            Type
                        </InputLabel>
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            onFocus={() => setIsFocused('type')}
                            onBlur={() => setIsFocused('')}
                            displayEmpty
                            // label="Select Type"
                            fullWidth
                            sx={{
                                border: 'none', // Remove all borders
                                '& .MuiSelect-select': {
                                    border: 'none', // Remove inner border if any
                                    borderBottom: `1px solid ${isFocused && !!selectedOption ? 'slate-300' : '#000'}`, // Change color based on focus and value
                                    '&:focus': {
                                        borderBottom: '1px solid slate-300', // Bottom border on focus
                                    },
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none', // Remove outline border
                                },
                            }}
                        >
                            <MenuItem value="" disabled={true} >
                                <em className='text-sm'>Choose a place type</em>
                            </MenuItem>
                            {
                                typeList.map((type: DropDownOptionWithIconType) => {
                                    return <MenuItem value={type.value}><span className='text-sm'>{type.type === 'icon' ? <Icon icon={type.icon} size='20' sx={{color: 'red'}}/> : <img src={type.icon} alt="" />} {type.label}</span></MenuItem>
                                })
                            }
                            <MenuItem value={-1}>Add new</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="flex w-full pt-8 pb-8 px-4">
                    <button
                        className="bg-slate-300 text-black text-md border-none rounded focus:outline-none hover:outline-none hover:bg-slate-200 hover:rounded-lg"
                        // disabled={true}
                        onClick={addPlace}
                    >
                        Save
                    </button>
                </div>


            </div>

            {
                isModalOpen && (
                    <ModalPops closeModal={closeModal} title="Add new place type" onSubmit={addType}/>
                )
            }
        </>
    )
}

export default Create;