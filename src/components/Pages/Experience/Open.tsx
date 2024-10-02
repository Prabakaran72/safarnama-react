import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react'

const Open = () => {
  const [value, setValue] = useState<number | ''>('');
  const options = [{ label: "Friendly tour", value: 1 }, { label: "Family tour", value: 2 }]

  const handleChange = (event: SelectChangeEvent<number | null>) => {
    const selectedValue = event.target.value as number; // Cast value to number
    setValue(selectedValue);
  };

  return (
    <>
      <h2 className="text-3xl text-left font-semibold mb-4 px-8 py-8">
        Open an Experience
      </h2>
      <div className="text-2xl text-left mb-4 px-8">
        <Select
          labelId="my-select-label"
          value={value}
          onChange={handleChange}
          displayEmpty
          className="w-full border-none"
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option: { label: string; value: number }) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="flex justify-end w-full pt-8 pb-8">
        <button className="bg-transparent text-black text-xl border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg">
          Cancel
        </button>
        <button
          className="bg-transparent text-black text-xl border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg"
          disabled={true}
        >
          Open
        </button>
      </div>
    </>
  )
}

export default Open;