import React, { useRef, useState } from 'react';
import IconList from '../../utils/IconLists';
import { SelectedExperienceType } from '../../../types/Props';


const Collaborators = () => {
    const selectedExperience: SelectedExperienceType = { name: 'Test' };
    const [isFocused, setIsFocused] = useState<string>('name');
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string | ''>('');
    const [collableInputId, setCollableInputId] = useState<string | ''>('');
    const [collaborators, setCollaborators] = useState<number[]>([]);
    const [myUserId, setMyUserId] = useState<string>('akjkjnjhcbekhcb89buebvwe_d82');


    return (
        <div className="min-w-80 sm:min-w-96 px-4 py-4 h-90 overflow-y-auto">
            <h2 className="text-xl sm:text-2xl text-left px-4 py-4">
                Collaborators
            </h2>
            <p className='text-sm sm:text-md mb-4 text-left px-4'>Add users IDs below to allow other users to make changes to the '{selectedExperience.name}' experience.</p>
            <div className="flex flex-row relative text-md sm:text-lg text-left px-4 w-full">
                <input
                    id="collableId"
                    name="collableId"
                    ref={inputRef}
                    value={collableInputId}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollableInputId(e.target.value)}
                    onFocus={() => setIsFocused('collableId')}
                    onBlur={() => setIsFocused('')} // Keep label reduced if there's text
                    className={`w-full border-b border-b-1 border-cyan-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-md sm:text-sm py-2 bg-transparent ${name && 'border-gray-600'} w-[60%]`}
                    placeholder=""
                />
                <label
                    htmlFor="collableId"
                    className={`absolute left-4 transition-all duration-300 ease-in-out ${collableInputId || isFocused === 'collableId' ? 'text-cyan-800 text-xs -top-2' : 'text-cyan-800 text-sm top-4'}  ${name && 'text-gray-600'}`}
                >Enter a user's ID to share</label>

                <button className="flex ml-2 bg-transparent bg-slate-200 text-black text-xl border-none rounded-sm focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg text-sm" color="primary" aria-label="Add user id">
                    <span className='p-0 m-0 mr-2  '>Add </span> <IconList.AddCircleIcon /></button>
            </div>
            {collaborators.length > 0 &&
                <div className='texl-left ml-4 py-2' id="collabList">
                    <ul>
                        <li className='py-1 flex flex-row w-full text-left'><img className={'mr-2 w-10 h-10 rounded-full'} src="public/dd.png" alt='jad' /><span className='truncate block w-60 '> jad jdsjvn kklbkln kln fnnfn,mnfmnm,nfmn dfn  klfdjkjkfdkdlkfd dlkjlkjk </span></li>
                        <li className='py-1 flex flex-row w-full text-left'><img className={'mr-2 w-10 h-10 rounded-full'} src="public/dd.png" alt='jad' /> <span className='truncate block w-60 '> jad jdsjvn kklbkln kln fnnfn,mnfmnm,nfmn dfn  klfdjkjkfdkdlkfd dlkjlkjk </span></li>
                    </ul>

                </div>
            }
            <p className='text-sm sm:text-md mt-4 text-left px-4'>My User ID </p>
            <p className='text-sm sm:text-md mb-4 text-left px-4'>Share <b>{myUserId}</b> with other users to collaborate on their experiences.</p>
            <div className='text-right px-4'>

                <button className="bg-transparent text-black text-sm border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg">Close</button>
            </div>
        </div>
        // </div>
    )
}

export default Collaborators