import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Categories = ({ searchExercises, setSearchExercises }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      headers: {
        'X-RapidAPI-Key': 'e67dad275cmsh793f4bf9b581d6bp136650jsn60824e322b80',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      // Handle Error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (item) => {
    const filtered = searchExercises.filter((exercise) => exercise.bodyPart === item);
    setSearchExercises(filtered);
  };

  return (
    <>
      <div className="bg-[#c0c0c0] border-t-[8px] border-t-[#ff5c00] h-[200px] sm:h-[230px] lg:h-[320px] 2xl:h-[420px]">
        <div>
          <h1 className="flex justify-center text-[26px] text-white font-bold my-4 lg:text-[36px] 2xl:text-[52px]">
            CATEGORIES
          </h1>
          <div>
            {/* Exercise Categories */}
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-[80%] flex justify-center"
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
              }}
            >
              <div className="flex justify-around h-[120px] mt-10 sm:h-[160px] lg:h-[220px] 2xl:h-[300px]">              
              <SwiperSlide
                onClick={() => setSearchExercises(data)}
                className="h-[118px] sm:h-[152px] lg:h-[220px] 2xl:h-[290px]"
              >
                <div
                  className="border-4 w-[80px] h-[80px] rounded-full drop-shadow-md
                    sm:w-[120px] sm:h-[120px]
                    lg:w-[180px] lg:h-[180px]
                    2xl:w-[250px] 2xl:h-[250px]"
                >
                  <div className="flex flex-col items-center mt-5 sm:mt-9 md:mb-4 lg:mt-[60px] 2xl:mt-[95px]">
                    <p className="flex justify-center text-center p-2 text-[10px] text-white sm:text-[16px] lg:text-[24px] 2xl:text-[30px]">
                      All
                    </p>
                  </div>
                </div>
              </SwiperSlide>  
                {data.map((item, index) => (
                  <SwiperSlide
                    onClick={() => handleClick(item)}
                    key={index}
                    className="h-[118px] sm:h-[152px] lg:h-[220px] 2xl:h-[290px]"
                  >
                    <div
                      className="border-4 w-[80px] h-[80px] rounded-full drop-shadow-md
                        sm:w-[120px] sm:h-[120px]
                        lg:w-[180px] lg:h-[180px]
                        2xl:w-[250px] 2xl:h-[250px]"
                    >
                      <div className="flex flex-col items-center mt-5 sm:mt-9 md:mb-4 lg:mt-[60px] 2xl:mt-[95px]">
                        <p className="flex justify-center text-center p-2 text-[10px] text-white sm:text-[16px] lg:text-[24px] 2xl:text-[30px]">
                          {item}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;