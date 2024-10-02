import React from 'react'

const Routes = () => {
  return (
    <><div className="min-w-80 sm:min-w-96 px-4 py-4">
      <h2 className="text-4xl text-left font-semibold mb-4 px-8 py-8">Routes</h2>
      <div className='flex text-left text-xl text-gray-500 border-b-2 pb-4'>
        <div className="w-[35%] px-8">
          Name
        </div>
        <div className="w-[45%]">
          Length (number of points)
        </div>
        <div className="w-[20%]">
          Actions
        </div>
      </div>
      <div className='flex text-left text-2xl text-gray-500 border-b-2 py-4'>
      <div className="w-[35%] px-8">
          Name
        </div>
        <div className="w-[45%]">
          Length (number of points)
        </div>
        <div className="w-[20%]">
          <a href="#">Manage</a>
        </div>
      </div>

      <div className='flex justify-end w-full pt-8 pb-8'>
        <button className="bg-transparent text-black text-2xl border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg">
          Close
        </button>
        <button className="bg-transparent text-black text-2xl border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg">
          Create
        </button>
      </div>
      </div>
    </>
  )
}

export default Routes;