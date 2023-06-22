import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import Logo from './../assets/sweat-logo.png'
import removeIcon from './../assets/icons/remove-icon.png'


const ExerciseCard = ({ exercise }) => {
  const [exerciseCard, setExerciseCard] = useState([])
  const [activeExercise, setActiveExercise] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false);


  function openExerciseModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleModalOpen() {
    setActiveExercise(exercise)
    openExerciseModal()
  }

  useEffect(() => {
    const savedExerciseCard = localStorage.getItem('exerciseCard');
    if (savedExerciseCard) {
      setExerciseCard(JSON.parse(savedExerciseCard));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('exerciseCard', JSON.stringify(exerciseCard));
  }, [exerciseCard]);

  return (
    <>

      <>
        <div
          onClick={handleModalOpen}
          className='flex flex-col items-center border rounded-xl border-b-4 mx-2 bg-[#d9d9d9] h-auto w-[125px]
              sm:w-[205px] sm:mx-4
              md:w-[265px]
              lg:h-auto lg:w-[350px]
              xl:w-[450px]'>
          <img
            src={exercise.gifUrl}
            className='border-4 rounded-l h-[100px] w-[100px] mt-3 
            sm:w-[180px] sm:h-[180px] 
            md:w-[220px] md:h-[220px]
            lg:w-[320px] lg:h-[320px]
            xl:w-[420px] xl:h-[420px]'
          />
          <p className='text-center text-[12px] sm:text-[18px] lg:text-[24px]'>
            {exercise.name}
          </p>
          <div className='flex space-x-1'>
            <div className='bg-white rounded-full px-2 text-[8px] sm:text-[12px] lg:text-[24px]'>
              {exercise.bodyPart}
            </div>
            <div className='bg-[#505050] rounded-full px-2 text-white text-[8px] sm:text-[12px] lg:text-[24px]'>
              {exercise.equipment}
            </div>
          </div>
        </div>
        <Modal
        ariaHideApp={false}
          className='exercise__modal'
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            content: {
              overflowY: 'auto',
              height: '60vh',
              width: '80%',
              maxWidth: '600px',
              position: 'relative',
              inset: 'auto'
            },
          }}
        >
          <div className='flex flex-col items-center bg-[#333333] h-[80vh]'>
            <img
              className='w-[60%] my-5 lg:my-3'
              src={Logo} />
            <div
              className='border h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] 2xl:w-[400px] 2xl:h-[400px]'
            >
              <img src={exercise.gifUrl} alt="Exercise GIF" className='h-full w-full' />
              </div>
            <div
              className='mt-5 text-center px-5'
            >
              <h1
                className='text-[24px] mb-5 text-white sm:text-[32px]'
              >{activeExercise.name}</h1>
              <p
                className='mb-5 mx-5 sm:text-[18px] text-white'
              >adipiscing elit pellentesque habitant morbi tristique senectus fames ac turpis egestas integer eget aliquet nibh praesent tristique cursus in hac eigth hicory temles harockk dictumst quisque sagittis purus sit amet</p>
            </div>
            <button
              className='border p-2 bg-white rounded-full drop-shadow-lg mb-5'
              onClick={closeModal}>
              <img
                className='w-6'
                src={removeIcon} />
            </button>
          </div>
        </Modal>
      </>
    </>
  )
}

export default ExerciseCard





