import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Logo from './../assets/sweat-logo.png'
import removeIcon from './../assets/icons/remove-icon.png'


const ExerciseCard = ({ exercise }) => {
  const sampleData = [
    {
      bodyPart: "chest",
      equipment: "string",
      gifUrl: "string",
      id: "string",
      name: "string",
      target: "string"
    },
    {
      bodyPart: "cardio",
      equipment: "string",
      gifUrl: "string",
      id: "string",
      name: "string",
      target: "string"
    },
    {
      bodyPart: "back",
      equipment: "string",
      gifUrl: "string",
      id: "string",
      name: "string",
      target: "string"
    },
    {
      bodyPart: "arms",
      equipment: "string",
      gifUrl: "string",
      id: "string",
      name: "string",
      target: "string"
    }
  ]
  // const options = {
  //   method: 'GET',
  //   url: 'https://exercisedb.p.rapidapi.com/exercises',
  //   headers: {
  //     'X-RapidAPI-Key': '7582371533msh19890b585580ac0p1f6b08jsn096843e4e418',
  //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //   }
  // };

  // const fetchData2 = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     setExerciseCard(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData2()
  // }, []);

  const [exerciseCard, setExerciseCard] = useState([])
  const [activeExercise, setActiveExercise] = useState({})
  console.log(exerciseCard)

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

  return (
    <>
      
        <>
          <div
            onClick={handleModalOpen}
            className='flex flex-col items-center border rounded-xl border-b-4 mx-2 bg-[#d9d9d9] h-[140px] w-[125px]
              sm:h-[220px] sm:w-[205px] sm:mx-4'>
            {/* <img
              src={exercise.gifUrl}
              className='border-4 rounded-l h-[100px] w-[100px] mt-3 sm:w-[180px] sm:h-[180px]'
            /> */}
            <p>Exercise Name</p>
            <p>{exercise.bodyPart}</p>
          </div>
          <Modal
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
                height: '80vh',
                width: '80%',
                maxWidth: '600px',
                position: 'relative',
                inset: 'auto'
              },
            }}
          >
            <div className='flex flex-col items-center'>
              <img
                className='w-[60%] my-5 lg:my-3'
                src={Logo} />
              <div
                className='border h-[200px] w-[200px] sm:h-[400px] sm:w-[400px]'
              >{activeExercise.gifUrl}</div>
              <div
                className='mt-5 text-center px-5'
              >
                <h1
                  className='text-[24px] mb-5 sm:text-[32px]'
                >{activeExercise.name}</h1>
                <p
                  className='mb-5 mx-5 sm:text-[18px]'
                >adipiscing elit pellentesque habitant morbi tristique senectus fames ac turpis egestas integer eget aliquet nibh praesent tristique cursus in hac eigth hicory temles harockk dictumst quisque sagittis purus sit amet</p>
                <button
                  className='border px-5 py-1 mb-5 bg-[#C5C5C5] rounded-lg text-white drop-shadow-lg'
                >Add to plan</button>
              </div>
              <div
                className='flex flex-col items-center bg-[#C5C5C5] w-[100%] h-[200px] sm:h-[300px]'
              >
                <h2
                  className='my-2 text-[20px]'
                >Same muscle exercises</h2>
                <div
                  className='border w-[80%] h-[70%]'
                >
                  "Exercise Card"
                </div>
              </div>
              <div
                className='flex flex-col items-center w-[100%] h-[200px] sm:h-[300px]'
              >
                <h2
                  className='my-2 text-[20px]'
                >Same equipment exercises</h2>
                <div
                  className='border w-[80%] h-[70%]'
                >
                  "Exercise Card"
                </div>
              </div>
              <div
                className='bg-[#C5C5C5] w-[100%] rounded-b-[10px]'
              >
                <div
                  className='h-[200px] flex flex-col items-center sm:h-[300px]'
                >
                  <h2
                    className='my-2 text-[20px]'
                  >video exercises</h2>
                  <div
                    className='border w-[80%] h-[70%]'
                  >
                    "Exercise Card"
                  </div>
                </div>
                <div
                  className='flex justify-center mb-4'
                >
                  <button
                    className='border p-2 bg-white rounded-full drop-shadow-lg'
                    onClick={closeModal}>
                    <img
                      className='w-6'
                      src={removeIcon} />
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </>
    </>
  )
}

export default ExerciseCard
