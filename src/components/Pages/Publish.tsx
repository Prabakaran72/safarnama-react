import React from 'react'

const Publish = () => {
  return (
    <>
      <h2 className="text-4xl text-left font-semibold mb-4 px-8 py-8">Publish Experience</h2>
      <div className="text-2xl text-left mb-4 px-8">
        <p>Publishing your experience will make it publicly visible. Users will be able to download a playable experience to their Android devices using a QR code or link.</p>
      </div>
      <div className='flex justify-end w-full pt-8 pb-8'>
        <button className="bg-transparent text-black text-xl border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg">
          Close
        </button>
        <button className="bg-transparent text-black text-xl border-none rounded-none focus:outline-none hover:outline-none hover:bg-slate-100 hover:rounded-lg">
          Publish
        </button>
      </div>
    </>
  )
}

export default Publish