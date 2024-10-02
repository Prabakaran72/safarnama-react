import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useRef, useState } from 'react'
import { DropDownOptionType } from '../../../types/Props';
import { SelectChangeEvent } from '@mui/material/Select';

const Create = () => {
    const [isFocused, setIsFocused] = useState<string>('name');
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string | ''>('');
    const [type, setType] = useState<string | ''>('');
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [typeList, setTypeList]= useState<DropDownOptionType[]>([{ label: "Mini", value: 1 }, { label: "Large Scale", value: 2 }]);

    const handleChange = (event: SelectChangeEvent<number | null>) => {
        const value = event.target.value === '' ? null : Number(event.target.value); // Convert the value to a number or null
        setSelectedOption(value);
    };
    console.log('isFocused ', isFocused);
    console.log('selectedOption ', !!selectedOption);

    return (
        <div>
            <p className='pt-4 pl-2 text-left'>Click the map to position your new Place</p>
            <p className='pt-4 pl-2 text-left'>Trigger Zone</p>
            <p className='pt-4 pl-2 text-left'>When a user enters this area they will be notified about this Place</p>
            <div className="flex flex-row relative text-md sm:text-lg text-left px-4 w-full">
                <input
                    id="collableId"
                    name="collableId"
                    ref={inputRef}
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    onFocus={() => setIsFocused('collableId')}
                    onBlur={() => setIsFocused('')} // Keep label reduced if there's text
                    className={`w-full border-b border-b-1 border-cyan-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-md sm:text-sm py-2 bg-transparent ${name && 'border-gray-600'} w-[60%]`}
                    placeholder=""
                />
                <label
                    htmlFor="collableId"
                    className={`absolute left-4 transition-all duration-300 ease-in-out ${name || isFocused === 'collableId' ? 'text-cyan-800 text-xs -top-2' : 'text-cyan-800 text-sm top-4'}  ${name && 'text-gray-600'}`}>Name</label>
            </div>
            <div className="flex flex-row relative text-md sm:text-lg text-left px-4 mt-8 w-full">
                <FormControl
                    className={`w-52 text-black border-none border-b-2 hover:border-none focus:border-slate-200 hover:border-slate-200 ${isFocused === 'type' || !!selectedOption ? 'border-none ' : ''
                        }`}
                    variant="standard" // This removes the default box border
                >
                    <InputLabel
                        // shrink={Boolean(isFocused ==='type' || !!selectedOption)} // Keeps label transformed if focused or there's a value
                        className={`absolute left-0 transition-transform duration-300 ease-in-out
                            ${isFocused === 'type' || !!selectedOption ? 'transform -translate-y-8 scale-75' : 'transform translate-y-5 scale-100'}`}
                    >
                        Type
                    </InputLabel>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        onFocus={() => setIsFocused('type')}
                        onBlur={() => setIsFocused('type')}
                        displayEmpty
                        label="Select Experience"
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
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            typeList.map((type: DropDownOptionType)=>{
                                return <MenuItem value={type.value}>{type.label}</MenuItem>
                            })
                        }
                        <MenuItem value={-1}>Add new</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="flex w-full pt-8 pb-8 px-4">
                <button
                    className="bg-slate-300 text-black text-md border-none rounded focus:outline-none hover:outline-none hover:bg-slate-200 hover:rounded-lg"
                    disabled={true}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Create