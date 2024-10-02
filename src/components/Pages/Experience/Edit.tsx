import React, { useRef, useState } from 'react'

const Edit = () => {
  const [isFocused, setIsFocused] = useState<string>('name');
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string | ''>('');
    const [desc, setDesc] = useState<string | ''>('');
  
  return (
    <div>
      <p className='p-4 text-left'>Here you can change the details of your experience.</p>
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

      <div className="relative text-2xl text-left px-4 mt-8 ">
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full border-b border-gray-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-sm sm:text-sm resize-none bg-transparent w-[60%] resize-y max-h-[100px]" // Styling for textarea
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

export default Edit