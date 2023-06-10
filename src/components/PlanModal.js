import React from 'react';
import './PlanModal.css'
import Logo from './../assets/sweat-logo.png'

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <img src={Logo}
        className='flex justify-center w-[50%] mt-4'
        />
        <input
          className='border rounded w-[60%] mt-4 text-center text-[12px] sm:text-[18px] max-w-[200px]'
          type='text'
          placeholder='Search for exercise...'>
        </input>
        <div
          className='mt-4'
        >
          <div className='flex flex-col items-center'>
          <p
          className='mb-4 text-white sm:text-[18px]'
          >"Exercise Name"</p>
          <div className='flex flex-col items-center p-5 border-t-4 border-yellow-400 w-[80%]'>
            <input
            className='mb-4 text-center rounded w-[100%] text-[10px] sm:text-[16px] p-1'
            type='number'
            placeholder='Add current weight'/>
            <input
            className='text-center rounded w-[100%] text-[10px] sm:text-[16px] p-1'
            type='number'
            placeholder='Set target weight'/>
            </div>
          </div>
        </div>
        <button 
        className='bg-[#fdfdfd] rounded-xl px-5 py-2 drop-shadow-lg mb-6 text-[10px] sm:text-[16px]'
        onClick={handleClose}>Add to plan</button>
      </section>
    </div>
  );
};

export default Modal;