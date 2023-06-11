import React from 'react'
import Hero from './../assets/hero-shot.webp'
import LandingContent from './LandingContent'

const Landing = () => {
  return (
    <>
      <div className='bg-[#c6c6c6] sm:flex justify-center p-4'>
        <div className='flex justify-center rounded 
        sm:w-[450px] 
        xl:w-[500px]
        2xl:w-[700px]'>
          <img
            className='p-5 h-[350px] rounded-2xl mt-12 sm:mt-20 
            lg:h-[550px] 
            xl:h-[750px] xl:my-10 xl:ml-10'
            src={Hero}
          />
        </div>
        <div className='lg:mt-20'>
          <LandingContent />
        </div>
      </div>
    </>
  )
}

export default Landing
