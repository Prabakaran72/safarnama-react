import React from 'react'

const Projects = () => {
  return (
    <>
      <h2 className="text-4xl text-left font-semibold mb-4 px-8 py-8">Projects</h2>
      <div className='flex text-left text-xl text-gray-500 border-b-2 pb-4'>
        <div className="w-[65%] px-8">
          Name
        </div>
        <div className="w-[35%]">
          Actions
        </div>
      </div>
      <div className='flex text-left text-2xl text-gray-500 border-b-2 py-4'>
      <div className="w-[65%] px-8">
          Name
        </div>
        <div className="w-[35%]">
          <a href="#">Manage</a>
        </div>
      </div>

      <div>
        <button className="flex justify-end w-full bg-transparent text-black text-xl p-8 border-none rounded-none focus:outline-none hover:outline-none">
          Cancel
        </button>
      </div>
    </>
  )
}

export default Projects