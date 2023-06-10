import React from 'react'
import MgIcon from './../assets/icons/magnifying-glass.png'
import CategoriesIcon from './../assets/icons/categories-icon.png'
import NoteIcon from './../assets/icons/note-icon.png'
import FilterIcon from './../assets/icons/filter-icon.png'

const LandingContent = () => {
  return (
    <div className='flex flex-col items-center px-10 sm:px-4'>
      <h1 className='text-[26px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] text-white text-center font-bold'>
        INSPIRATION FOR YOUR NEXT WORKOUT
      </h1>
      {/* Landing Content */}
      <div className='flex flex-col items-start'>

        {/* Content 1 */}
        <div className='flex justify-around mt-5'>
          <div className='border-4 border-[#FF5C00] p-2 rounded-full
          xl:mt-8'>
            <img
              className='h-4 lg:h-8 lg:p-1 2xl:h-12'
              src={MgIcon} />
          </div>
          <p className='flex items-center text-white ml-4
          text-[15px] 
          lg:text-[24px]
          xl:text-[32px]
          2xl:text-[40px]'>
            Search for specific exercises
          </p>
        </div>
        {/* Content 2 */}
        <div className='flex justify-around mt-5'>
          <div className='border-4 border-[#FF5C00] p-2 rounded-full
          xl:mt-8
          2xl:mt-4'>
            <img
              className='h-4 lg:h-8 lg:p-1 2xl:h-12'
              src={CategoriesIcon} />
          </div>
          <p className='flex items-center text-white ml-4
          text-[15px]
          lg:text-[24px]
          xl:text-[32px]
          2xl:text-[40px]'>
            Find categories for specific days
          </p>
        </div>
        {/* Content 3 */}
        <div className='flex justify-around mt-5 2xl:mt-4'>
          <div className='border-4 border-[#FF5C00] p-2 rounded-full
          xl:mt-8
          2xl:mt-4'>
            <img
              className='h-4 lg:h-8 lg:p-1 2xl:h-12'
              src={NoteIcon} />
          </div>
          <p className='flex items-center text-white ml-4
          text-[15px]
          lg:text-[24px]
          xl:text-[32px]
          2xl:text-[40px]'>
            Plan exercises for the future
          </p>
        </div>
        {/* Content 4 */}
        <div className='flex justify-around mt-5'>
          <div className='border-4 border-[#FF5C00] p-2 rounded-full
          xl:mt-8
          2xl:mt-4'>
            <img
              className='h-4 lg:h-8 lg:p-1 2xl:h-12'
              src={FilterIcon} />
          </div>
          <p className='flex items-center text-white ml-4
          text-[15px]
          lg:text-[24px]
          xl:text-[32px]
          2xl:text-[40px]'>
            Document your progress
          </p>
        </div>
      </div>
      <button className='border-none bg-[#c6c6c6] rounded-l p-3 my-10 2xl:my-6 text-white drop-shadow-md cursor-pointer 
      sm:my-4 
      lg:my-10
      xl:my-14
      xl:w-[400px]'>
        Explore Exercises
      </button>
    </div>
  )
}

export default LandingContent
