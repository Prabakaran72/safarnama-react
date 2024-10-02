import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useRef, useState } from 'react'

const Create = () => {
    const projects = [{ label: "Mini", value: 1 }, { label: "Large Scale", value: 2 }]
    const [isFocused, setIsFocused] = useState<string>('name');
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string | ''>('');
    const [desc, setDesc] = useState<string | ''>('');
    const [projectSelected, setProjectSelected] = useState<any | ''>('');

    return (
        <div className="min-w-80 sm:min-w-96">
            <h2 className="text-xl sm:text-3xl text-left px-4 py-4">
                Create an Experience
            </h2>
            <div className="relative text-md sm:text-lg text-left px-4 w-56">

                <input
                    id="name"
                    name="name"
                    ref={inputRef}
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused('')} // Keep label reduced if there's text
                    className={`w-full border-b border-b-1 border-cyan-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-md sm:text-sm py-2 bg-transparent ${name && 'border-gray-600'}`}
                    placeholder=""
                />
                <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 ease-in-out ${name || isFocused === 'name' ? 'text-cyan-800 text-xs -top-2' : 'text-cyan-800 text-sm top-2'
                        }  ${name && 'text-gray-600'}`}
                >Name your experience</label>
            </div>
            <div className="relative text-2xl text-left px-4 mt-8">
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full border-b border-gray-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-sm sm:text-sm resize-none bg-transparent" // Styling for textarea
                    rows={4} // You can adjust the number of rows as needed
                    placeholder=""
                    name={'desc'}
                    onFocus={() => setIsFocused('desc')}
                    onBlur={() => setIsFocused('')}
                />
                <label
                    htmlFor="desc"
                    className={`absolute left-4 transition-all duration-300 ease-in-out ${desc || isFocused === 'desc' ? 'text-cyan-800 text-xs -top-4' : 'text-gray-500 text-sm top-4'
                        }`}
                >Description</label>
            </div>
            <div className="relative text-2xl text-left mb-4 mt-4 px-4 w-56">
                <FormControl fullWidth variant="outlined" className='ml-0 pl-0 '>
                    <InputLabel id="my-select-label" className={`border-b border-gray-600 ${isFocused === 'project' && 'border-none ml-0 pl-0 text-gray-600'} text-gray-600 text-sm sm:text-sm ml-0 pl-0`}>Choose a project (Optional)</InputLabel>
                    <Select
                        labelId="my-select-label"
                        value={projectSelected}
                        onChange={(e) => setProjectSelected(e.target.value)}
                        displayEmpty
                        onFocus={() => setIsFocused('project')}
                        onBlur={() => setIsFocused('')}
                        className="w-full border-b border-gray-600 ml-0 pl-0 "
                        sx={{
                            border: 'none', // Remove the border
                            '& .MuiSelect-select': {
                                border: 'none', // Remove inner border if any
                                '&:focus': {
                                    borderBottom: '2px solid #000', // Ensure the bottom border is visible when focused
                                },
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // Remove outline border
                            },
                        }}
                    >
                        {projects.map((option: { label: string; value: number }) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className="flex justify-end w-full pt-8 pb-8">
                <button
                    className="bg-transparent text-black text-xl border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg"
                    disabled={true}
                >
                    Create
                </button>
            </div>
        </div>
    )
}

export default Create