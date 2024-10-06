import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { SelectOptionType } from '../../types/Props';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Tooltip from '@mui/material/Tooltip';
import TextEditor from './Media/TextEditor';


const mediaType = [{ value: 1, label: 'All' }, { value: 2, label: 'Images' }, { value: 3, label: 'Video' }, { value: 4, label: 'Text' }, { value: 5, label: 'Audio' }, { value: 6, label: 'PDFs' }];
const sortType = [{ value: 1, label: 'Date Added' }, { value: 2, label: 'Date Edited' }, { value: 3, label: 'Name' }];

type MediaSelectType = {
  experience: SelectOptionType | '',
  mediaType: SelectOptionType | '',
  sortType: SelectOptionType | '',
}

const MediaLibrary: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isFocused, setIsFocused] = useState('');
  const [experience, setExperience] = useState<{ value: number, label: string }[]>([]);
  const [selectedOption, setSelectedOption] = useState<MediaSelectType>({ experience: '', mediaType: '', sortType: '' });
  const [isCreateText, setIsCreateText] = useState<boolean>(false);

  const handleSelection = (e: any, name: string) => {
    const value = e.target.value; // This will work correctly
    console.log("Value ", value, 'name ', name);
    setSelectedOption((prev) => ({ ...prev, [name]: value }));
  }

  const closeCreateText = () => {
    setIsCreateText(false);
  }

  return (
    <div className="min-w-80 sm:min-w-96">
      <h2 className="text-xl sm:text-3xl text-left px-4 py-4">
        Media Library
      </h2>
      <div className="flex flex-row space-x-4 relative text-2xl text-left mb-4 mt-4 px-4">
        <FormControl variant="outlined" className='w-60 p-0'>
          <InputLabel id="my-select-label" className={`w-full text-gray-600 border-b border-gray-600 ${isFocused === 'experience' && 'border-none'} text-gray-600 text-sm sm:text-sm ml-0 pl-0`}>Experience</InputLabel>
          <Select
            labelId="my-select-label"
            value={selectedOption.experience}
            onChange={(e) => handleSelection(e, 'experience')}
            displayEmpty
            onFocus={() => setIsFocused('experience')}
            onBlur={() => setIsFocused('')}
            sx={{
              border: 'none', // Remove the border
              '& .MuiSelect-select': {
                border: 'none', // Remove inner border if any
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove outline border
              },
            }}
          >
            {experience.map((option: { label: string; value: number }) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className='w-60'>
          <InputLabel id="my-select-label" className={`w-full text-gray-600 border-b border-gray-600 ${isFocused === 'mediaType' && 'border-none'} text-gray-600 text-sm sm:text-sm ml-0 pl-0`}>Media Type</InputLabel>
          <Select
            labelId="my-select-label"
            value={selectedOption.mediaType}
            onChange={(e) => handleSelection(e, 'mediaType')}
            displayEmpty
            onFocus={() => setIsFocused('mediaType')}
            onBlur={() => setIsFocused('')}
            // className="w-full border-b border-gray-600 ml-0 pl-0 "
            sx={{
              border: 'none', // Remove the border
              '& .MuiSelect-select': {
                border: 'none', // Remove inner border if any
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove outline border
              },
            }}
          >
            {mediaType.map((option: { label: string; value: number }) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className='w-60'>
          <InputLabel id="my-select-label" className={`w-full text-gray-600 border-b border-gray-600 ${isFocused === 'sort' && 'border-none'} text-sm sm:text-sm ml-0 pl-0`}>Sort</InputLabel>
          <Select
            labelId="my-select-label"
            value={selectedOption.sortType}
            onChange={(e) => handleSelection(e, 'sortType')}
            displayEmpty
            onFocus={() => setIsFocused('sort')}
            onBlur={() => setIsFocused('')}
            // className="w-full border-b border-gray-600 ml-0 pl-0 "
            sx={{
              border: 'none', // Remove the border
              '& .MuiSelect-select': {
                border: 'none', // Remove inner border if any
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove outline border
              },
            }}
          >
            {sortType.map((option: { label: string; value: number }) => (
              <MenuItem key={option.value} value={option.value} >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-row space-x-4 relative text-2xl text-left mb-4 mt-4 px-4">
        <div className='relative w-48 h-36 border border-gray-400 bg-black group'>
          <img src="./erodebusstand.png" className='w-full h-full hover:opacity-60' />
          {/* Layer that appears on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-60 hidden group-hover:flex items-center justify-between p-2">
            {/* Top-right type icon */}
            <Tooltip title="Delete">
              <DeleteIcon
                fontSize="large"
                style={{ color: 'white', position: 'absolute', bottom: '4px', left: '4px' }}
                className="w-6 h-6"
              />
            </Tooltip>

            <Tooltip title="Edit">
              <EditIcon
                fontSize="large"
                style={{ color: 'white', position: 'absolute', bottom: '4px', right: '4px' }}
                className="w-6 h-6 "
              />
            </Tooltip>
            {/* Top-right type icon */}
            <Tooltip title="Image">
              <ImageIcon
                fontSize="large"
                style={{ color: 'white', position: 'absolute', top: '4px', right: '4px' }}
                className="w-6 h-6"
              />
            </Tooltip>
            {/* Text between trash and edit icons */}
            <p className="absolute bottom-2 left-10 right-10 text-white text-sm text-center">
              Some text here
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2 w-full pt-8 pb-8">
        <button
          className="bg-transparent text-gray-700 text-md border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg"
          onClick={onBack}
        >
          Cancel
        </button>

        <button
          className="bg-transparent text-gray-700 text-md border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg"
          onClick={()=>setIsCreateText(true)}
        >
          Create Text
        </button>
        <button
          className="bg-transparent text-gray-700 text-md border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg"
          disabled={true}
        >
          Upload Media
        </button>
      </div>

      {
        isCreateText === true &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="bg-white p-4 rounded shadow-lg relative sm:w-1/2 w-5/6 ">
          <TextEditor onClose={closeCreateText} />
        </div>
      </div>
      }

    </div >
  )
}

export default MediaLibrary