import React, { useEffect, useReducer, useRef, useState } from 'react'
import apiHelper from '../../../utils/apiHelper';
import { useAuth } from '../../Auth/AuthProvider';
import { typeReducer, ActionType, InitailState } from './RouteReducer';
import { SketchPicker, ColorResult } from 'react-color';
import ColorPicker from '../../utils/ColorPicker';

const Create = () => {
    const { state, dispatch } = useAuth();
    const colorRef = useRef<HTMLParagraphElement>(null);
    const API = apiHelper(state, dispatch);
    const [isFocused, setIsFocused] = useState<string>('name');
    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, dispatchFun] = useReducer<React.Reducer<any, any>>(typeReducer, InitailState);

    const onColorChange = (hexcolor: string) => {
        dispatchFun({ type: 'handleInput', payload: { colour: hexcolor } }); // Dispatch the hex code of the selected color
        colorRef.current!.innerText = hexcolor; // Update the text directly
    };

    useEffect(()=>{
        if (colorRef.current) {
            colorRef.current.innerText = '#f37012'; // Set the initial value
        }
    },[])
    console.log("formData", formData);

    const addRoute = async () => {
        const response = await API.post('route', formData);
        console.log('Response =>', response)
    }

    console.log('isFocused', isFocused);
    return (
        <>
            <div>
                <p className='pt-4 pl-2 text-left leading-tight'>Click the map to start your Route, then keep clicking to create more lines</p>
                <div className="flex flex-row relative text-md sm:text-lg text-left px-4 pt-4 sm:w-72 w-48">
                    <input
                        id="name"
                        name="name"
                        ref={inputRef}
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatchFun({ type: "handleInput", payload: { name: e.target.value } })}
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused('')} // Keep label reduced if there's text
                        className={`w-full border-b border-b-1 border-cyan-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-md sm:text-sm py-2 bg-transparent ${formData.name && 'border-gray-600'} w-[60%]`}
                        placeholder=""
                    />
                    <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 ease-in-out ${formData.name || isFocused === 'name' ? 'text-cyan-800 text-xs top-2' : 'text-cyan-800 text-sm top-8'}  ${formData.name && 'text-gray-600'}`}>Name</label>
                </div>
                <div className="relative text-2xl text-left px-4 mt-8 sm:w-72 w-48">
                    <textarea
                        value={formData.description}
                        onChange={(e) => dispatchFun({ type: 'handleInput', payload: { description: e.target.value } })}
                        className="w-full border-b border-gray-600 focus:outline-none focus:ring-0 focus:border-cyan-600 focus:border-b-2 text-sm sm:text-sm resize-none bg-transparent resize-y" // Styling for textarea
                        rows={4} // You can adjust the number of rows as needed
                        placeholder=""
                        name={'description'}
                        onFocus={() => setIsFocused('description')}
                        onBlur={() => setIsFocused('')}
                    />
                    <label
                        htmlFor="desc"
                        className={`absolute left-4 transition-all duration-300 ease-in-out ${formData.description || isFocused === 'description' ? 'text-cyan-800 text-xs -top-4' : 'text-gray-500 text-sm top-14'}`}>Description</label>
                </div>
                <div className="relative text-2xl text-left px-4 sm:w-72 w-48">
                    <label className='text-sm text-gray-500'>Color</label>
                    <p className='text-sm' ref={colorRef}></p>
                    <ColorPicker onColorChange={onColorChange} />

                </div>

                <div className="flex w-full pt-8 pb-8 px-4">
                    <button
                        className="bg-slate-300 text-black text-md border-none rounded focus:outline-none hover:outline-none hover:bg-slate-200 hover:rounded-lg"
                        // disabled={true}
                        onClick={addRoute}
                    >
                        Create
                    </button>
                </div>


            </div>

            {/* {
                isModalOpen && (
                    <ModalPops closeModal={closeModal} title="Add new place type" />
                )
            } */}
        </>
    )
}

export default Create;