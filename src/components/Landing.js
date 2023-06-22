import React, { useEffect } from 'react';
import Hero from './../assets/hero-shot.webp';
import LandingContent from './LandingContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='bg-[#1f1f1f] sm:flex justify-center p-4 2xl:h-screen'>
        <div className='flex justify-center rounded 
        sm:w-[450px] 
        xl:w-[500px]
        2xl:w-[700px]'>
          <div data-aos="fade-up">
            <img
              className='p-5 h-[350px] rounded-2xl mt-12 sm:mt-20 
              lg:h-[550px] 
              xl:h-[750px] xl:my-10 xl:ml-10'
              src={Hero}
            />
          </div>

        </div>
        <div className='lg:mt-20'>
          <div data-aos="fade-down">
            <LandingContent />
          </div>

        </div>
      </div>
      <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
    </>
  )
}

export default Landing
