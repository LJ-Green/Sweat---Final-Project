import React, { useState } from 'react';
import removeIcon from './../assets/icons/remove-icon.png';

const PlanCard = ({ exercise, onDeleteCard, currentWeight, targetWeight }) => {
  const [cardName, setCardName] = useState(exercise);

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleWeightChange = (weightType, value) => {
    if (weightType === 'currentWeight') {
      // Handle current weight change
    } else if (weightType === 'targetWeight') {
      // Handle target weight change
    }
  };

  return (
    <div className='bg-[#353535] w-[120px] rounded-[8px] flex flex-col items-center max-w-[1200px] p-2 ml-5 drop-shadow-xl lg:w-[200px] lg:h-auto'>
      <input
        className='w-full text-center text-[12px] lg:text-[20px] m-2 text-white bg-transparent border-b border-white'
        type='text'
        value={cardName}
        onChange={handleCardNameChange}
      />
      <div className='flex flex-col items-center'>
        <input
          className='w-20 lg:w-[100px] rounded-l bg-[#7a7a7a] placeholder-white text-[10px] lg:text-[16px] text-center py-1 drop-shadow-md'
          type='number'
          placeholder='Current'
          value={currentWeight}
          onChange={(event) =>
            handleWeightChange('currentWeight', event.target.value)
          }
        />
        <input
          className='w-20 lg:w-[100px] mt-3 rounded-l bg-[#09DE12] placeholder-white text-[10px] lg:text-[16px] text-center py-1 drop-shadow-md'
          type='number'
          placeholder='Target'
          value={targetWeight}
          onChange={(event) =>
            handleWeightChange('targetWeight', event.target.value)
          }
        />
        <button className='rounded-full bg-[#d3d3d3] drop-shadow-lg mt-2' onClick={onDeleteCard}>
          <img className='w-4 lg:w-6 p-1' src={removeIcon} alt='remove plan card' />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;