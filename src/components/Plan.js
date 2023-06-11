import { Box } from '@mui/material';
import React, { useState } from 'react';
import Add from './../assets/icons/add-icon.png';
import PlanCard from './PlanCard';
import Modal from './PlanModal';
import removeIcon from './../assets/icons/remove-icon.png'

const Plan = () => {
  const [showModal, setShowModal] = useState(false);
  const [newCardIndex, setNewCardIndex] = useState(null);
  const [days, setDays] = useState([{ cards: [{}] }]);

  const handleAddCard = (dayIndex) => {
    const newDays = [...days];
    newDays[dayIndex].cards.push({});
    setDays(newDays);
    setNewCardIndex(null);
    setShowModal(false);
  };

  const handleOpenModal = (dayIndex, cardIndex) => {
    setNewCardIndex({ dayIndex, cardIndex });
    setShowModal(true);
  };

  const handleAddDay = () => {
    setDays([...days, { cards: [{}] }]);
  };

  const handleDeleteDay = (dayIndex) => {
    const newDays = [...days];
    newDays.splice(dayIndex, 1);
    setDays(newDays);
  };

  const handleDeleteCard = (dayIndex, cardIndex) => {
    const newDays = [...days];
    newDays[dayIndex].cards.splice(cardIndex, 1);
    setDays(newDays);
  };

  return (
    <Box id='plan'>
      <div className='bg-[#929292] flex flex-col items-center'>
        <h1 className='flex justify-center text-white font-bold text-[24px] p-5'>
          TRACK YOUR LIFTS
        </h1>
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className='container px-10 pb-10'>
            <div className='flex justify-center items-center p-5 border-t-4'>
              <input
                className='text-center w-[200px] rounded-md bg-[#cfcfcf] text-[20px]'
                type='text'
                placeholder='Exercise day' />
              <button
              onClick={() => handleDeleteDay(dayIndex)}
              className='border ml-5 bg-[#d3d3d3] rounded-full drop-shadow-lg p-2'>
                <img
                  className='w-4'
                  src={removeIcon}
                  alt='remove plan day' />
              </button>
            </div>
            <div className='flex items-center'>
              {day.cards.map((card, cardIndex) => (
                <PlanCard
                  key={cardIndex}
                  onAddCard={() => handleOpenModal(dayIndex, cardIndex)}
                  onDeleteCard={() => handleDeleteCard(dayIndex, cardIndex)}
                />
              ))}
              <button
                onClick={() => handleOpenModal(dayIndex, day.cards.length - 1)}
                className='bg-[#bebebe] w-10 flex justify-center items-center h-[80px] rounded-lg ml-5'>
                <img src={Add} alt="Add" />
              </button>
              {newCardIndex && newCardIndex.dayIndex === dayIndex &&
                <Modal show={showModal} handleClose={() => handleAddCard(dayIndex)}></Modal>
              }
            </div>
          </div>
        ))}
        <div className='flex justify-center'>
          <button onClick={handleAddDay} className='bg-[#bebebe] rounded-md flex justify-center py-1 w-[300px] mb-8'>
            <img src={Add} alt="Add" />
          </button>
        </div>
      </div>
    </Box>
  )
}

export default Plan;
