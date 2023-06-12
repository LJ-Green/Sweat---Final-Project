import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

const Categories = ({ setSearchExercises, sampleData }) => {

  const [activeCategory, setActiveCategory] = useState({})

  function handleClick(item) {
    let filterd = sampleData.filter(obj => obj.bodyPart === item.name)
    setSearchExercises(filterd)
  }


  const sampleCategories = [
    {
      name: "back",
      icon: ""
    },
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"
  ]

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '7582371533msh19890b585580ac0p1f6b08jsn096843e4e418',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const [data, setData] = useState([])
  return (
    <>
      <div className='bg-[#7d7d7d] border-t-[8px] border-t-[#ff5c00] h-[180px]
      sm:h-[230px]
      lg:h-[320px]
      2xl:h-[420px]'>
        <div>
          <div className='px-10'>
            <h1 className='flex justify-center text-[26px] text-white font-bold my-4 
          lg:text-[36px]
          2xl:text-[52px]'>
              CATEGORIES
            </h1>

            {/* Exercise Categories */}
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-[80%] border-l-2 border-r-2"
            >
              <div className='flex justify-around h-[120px] mt-10 
          sm:h-[160px]
          lg:h-[220px]
          2xl:h-[300px]
          '>
                {sampleCategories.map((item, index) => (

                  <SwiperSlide
                    onClick={() => handleClick(item)}
                    key={index}
                  >
                    <div className='border-4 w-[80px] h-[80px] rounded-full drop-shadow-md
            sm:w-[120px] sm:h-[120px]
            lg:w-[180px] lg:h-[180px]
            2xl:w-[250px] 2xl:h-[250px]
            '>
                      <p className='flex justify-center text-center p-2 mt-6 text-[10px] text-white
              sm:mt-14 sm:text-[16px]
              lg:mt-[100px] lg:text-[24px]
              2xl:mt-[140px] 2xl:text-[30px]
              '>
                        {item.name}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
