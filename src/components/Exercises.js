import { Box } from '@mui/material'
import ExerciseCard from './ExerciseCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useState } from 'react';


const Exercises = ({ searchExercises, setSearchExercises, sampleData }) => {

  function handleSearch(e) {
    let filterd = sampleData.filter(item => (item.bodyPart.includes(e.target.value) 
    || item.equipment.includes(e.target.value) || item.name.includes(e.target.value)) || item.target.includes(e.target.value))
    setSearchExercises(filterd)
  }


  return (
    <>
      <Box id="exercises">
        <div className='bg-[#c6c6c6] p-10'>
          <div className='flex flex-col items-center'>
            <h1 className='text-center text-[26px] text-white font-bold
            lg:text-[36px] xl:text-[44px] 2xl:text-[52px]'>
              EXERCISES TO GET YOU <span className='text-[#ff6c00]'>SWEATING</span>
            </h1>
            <div className='flex justify-center mb-8'>
              <input
                onChange={(e) => handleSearch(e)}
                className='mt-6 bg-[#cfcfcf] rounded text-center sm:text-[22px]'
                placeholder='Search'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 grid-rows-4 gap-4 mx-auto place-items-center w-[80%] h-[800px]'>

            {searchExercises.map((exercise, index) => (
              <ExerciseCard exercise={exercise} />

              //   searchExercises.slice(11*(pageNumber -1 ), 11 + ( 12 * (pageNumber -1)).map(...
              //   but would make more sense to have page number 1 having a value of 0 because then its just:
              //   slice(11*(pageNumber), 11+(12*(pageNumber)))
            ))}
          </div>
        </div>
      </Box>
    </>
  )
}

export default Exercises
