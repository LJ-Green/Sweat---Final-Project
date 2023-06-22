import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Add from './../assets/icons/add-icon.png';
import PlanCard from './PlanCard';
import removeIcon from './../assets/icons/remove-icon.png';

const Plan = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const savedDays = localStorage.getItem('planDays');
    if (savedDays) {
      setDays(JSON.parse(savedDays));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('planDays', JSON.stringify(days));
  }, [days]);

  const handleAddCard = (dayIndex) => {
    const newDays = [...days];
    newDays[dayIndex].cards.push({});
    setDays(newDays);
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

  const handleExerciseDayChange = (dayIndex, event) => {
    const newDays = [...days];
    newDays[dayIndex].exerciseDay = event.target.value;
    setDays(newDays);
  };

  return (
    <Box id='plan'>
      <div className='bg-[#afafaf] flex flex-col items-center'>
        <h1 className='flex justify-center text-white font-bold text-[24px] p-5'>
          TRACK YOUR LIFTS
        </h1>
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className='container px-10 pb-10'>
            <div className='flex justify-center items-center p-5 border-t-4'>
              <input
                className='text-center w-[200px] rounded-md bg-[#cfcfcf] text-[20px]'
                type='text'
                placeholder='Exercise day'
                value={day.exerciseDay || ''}
                onChange={(event) => handleExerciseDayChange(dayIndex, event)}
              />
              <button
                onClick={() => handleDeleteDay(dayIndex)}
                className='border ml-5 bg-[#d3d3d3] rounded-full drop-shadow-lg p-2'
              >
                <img className='w-4' src={removeIcon} alt='remove plan day' />
              </button>
            </div>
            <div className='flex items-center'>
              {day.cards.map((card, cardIndex) => (
                <PlanCard
                  key={cardIndex}
                  onDeleteCard={() => handleDeleteCard(dayIndex, cardIndex)}
                  currentWeight={card.currentWeight}
                  targetWeight={card.targetWeight}
                />
              ))}
              <button
                onClick={() => handleAddCard(dayIndex)}
                className='bg-[#bebebe] w-10 flex justify-center items-center h-[80px] rounded-lg ml-5'
              >
                <img src={Add} alt='Add' />
              </button>
            </div>
          </div>
        ))}
        <div className='flex justify-center'>
          <button
            onClick={handleAddDay}
            className='bg-[#bebebe] rounded-md flex justify-center py-1 w-[300px] mb-8'
          >
            <img src={Add} alt='Add' />
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Plan;