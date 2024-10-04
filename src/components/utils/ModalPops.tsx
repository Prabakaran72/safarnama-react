import React from 'react'
import { ModalPopupType } from '../../types/Props';
import AddType from '../Pages/Place/AddType';

const ModalPops: React.FC<ModalPopupType> = ({ closeModal, title = null, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      {/* <div className="bg-white rounded-lg p-8 z-10 w-[400px]">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-4">This is the modal content.</p>
        <button
          className="mt-6 bg-cyan-600 text-white px-4 py-2 rounded"
          onClick={closeModal}>
          Close Modal
        </button>
      </div> */}
      <AddType onClose={closeModal} onSubmit={onSubmit}/>
    </div>
  )
}

export default ModalPops