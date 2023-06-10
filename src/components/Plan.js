import { Box } from '@mui/material'
import React, { useState } from 'react';
import Add from './../assets/icons/add-icon.png'
import PlanCard from './PlanCard';
import Modal from './PlanModal'; // import your Modal component

const Plan = () => {
  const [cards, setCards] = useState([{}]);
  const [showModal, setShowModal] = useState(false);
  const [newCardIndex, setNewCardIndex] = useState(null);

  const handleAddCard = () => {
    if (newCardIndex !== null) {
      const newCards = [...cards];
      newCards.splice(newCardIndex + 1, 0, {});
      setCards(newCards);
      setNewCardIndex(null); // Reset the new card index
    }
    setShowModal(false); // Close the modal
  };

  const handleOpenModal = (index) => {
    setNewCardIndex(index);
    setShowModal(true);
  };

  return (
    <Box id='plan'>
      <div className='bg-[#929292] flex flex-col items-center'>
        <h1 className='flex justify-center text-white font-bold text-[24px] p-5'>
          TRACK YOUR LIFTS</h1>
        {/* Training day title */}
        <div className='container px-10 pb-10'>
            <div className='flex justify-center p-5 border-t-4'>
              <input
                className='text-center w-[100px] rounded-md bg-[#cfcfcf]'
                type='text'
                placeholder='push' />
            </div>
          <div className='flex items-center'>
            {/* Weight details card */}
            {cards.map((card, index) => (
              <PlanCard key={index} onAddCard={() => handleOpenModal(index)} />
            ))}
            <button
              onClick={() => handleOpenModal(cards.length - 1)}
              className='bg-[#bebebe] w-10 flex justify-center items-center h-[80px] rounded-lg ml-5'>
              <img src={Add} />
            </button>
            <Modal show={showModal} handleClose={handleAddCard}></Modal>
          </div>
          {/* Add day button */}
          <div className='flex justify-center mt-5'>
            <button className='bg-[#bebebe] rounded-md flex justify-center py-1 w-[300px]'>
              <img src={Add} />
            </button>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Plan;
