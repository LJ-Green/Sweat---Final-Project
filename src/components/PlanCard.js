import React, { useState } from 'react'


const PlanCard = ({ onAddCard }) => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='bg-[#d9d9d9] w-[115px] rounded-[8px] flex max-w-[1200px] ml-5'>
      <div className='p-2'>
        <img src='/'
          className='border-black border-4 w-[100px] h-[100px]'
        />
        <div className='flex-col items-center px-2'>
          <input
            className='w-20 mt-3 rounded-l bg-[#FF5C00] placeholder-white text-[10px] text-center py-1'
            type='number'
            placeholder='Current' />
          <input
            className='w-20 mt-3 rounded-l bg-[#09DE12] placeholder-white text-[10px] text-center py-1'
            type='number'
            placeholder='Target' />
        </div>
      </div>
      <div className='ml-5 flex justify-center items-center'>
        
      </div>
    </div>
  )
}

export default PlanCard
