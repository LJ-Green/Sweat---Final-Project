import { Box } from '@mui/material'

import ExerciseCard from './ExerciseCard';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


const Exercises = () => {

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
                className='mt-6 bg-[#cfcfcf] rounded text-center sm:text-[22px]'
                placeholder='Search'
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-2 grid-rows-4 w-[80%] h-[800px]'>
            <Swiper 
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                  <ExerciseCard />
              </SwiperSlide>
            </Swiper>
                </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Exercises
