import React from 'react'
import removeIcon from './../assets/icons/remove-icon.png'

const PlanCard = ({ onAddCard, onDeleteCard }) => {

  return (
    <div className='bg-[#d9d9d9] w-[120px] rounded-[8px] flex flex-col items-center max-w-[1200px] p-2 ml-5 drop-shadow-xl'>

      <img src='/'
        className='border-black border-4 w-[100px] h-[100px]'
      />
      <p
        className='text-center text-[12px] m-2'
      >"Exercise Name"</p>
      <div className=' flex flex-col items-center'>
        <input
          className='w-20 rounded-l bg-[#7a7a7a] placeholder-white text-[10px] text-center py-1 drop-shadow-md'
          type='number'
          placeholder='Current' />
        <input
          className='w-20 mt-3 rounded-l bg-[#09DE12] placeholder-white text-[10px] text-center py-1 drop-shadow-md'
          type='number'
          placeholder='Target' />
        <button onClick={onDeleteCard}>
          <img
            className='w-4 mt-4 border bg-[#d3d3d3] drop-shadow-lg'
            src={removeIcon}
            alt='remove plan card' />
        </button>
      </div>
    </div>
  )
}

export default PlanCard
