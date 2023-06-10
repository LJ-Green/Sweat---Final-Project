import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';


const ExerciseCard = () => {
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': '7582371533msh19890b585580ac0p1f6b08jsn096843e4e418',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

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
  console.log(exerciseCard)

  return (
    <>
      {exerciseCard.map((exercise, index) => (
      <div
        key={index}
        className='flex flex-col items-center border rounded-xl border-b-4 mx-2 bg-[#d9d9d9] h-[140px] w-[125px]
              sm:h-[220px] sm:w-[205px] sm:mx-4'>
        <img
          src={exercise.gifUrl}
          className='border-4 rounded-l h-[100px] w-[100px] mt-3 sm:w-[180px] sm:h-[180px]'
        />
        <p>{exercise.bodyParts}</p>
      </div>
      ))}
    </>
  )

}

export default ExerciseCard
