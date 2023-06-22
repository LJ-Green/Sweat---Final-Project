import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import axios from 'axios';
import './PlanModal.css'
import ReactPaginate from 'react-paginate';

const PAGE_SIZE = 10;

const Exercises = ({ searchExercises, setSearchExercises }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [initialExercises, setInitialExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': 'e67dad275cmsh793f4bf9b581d6bp136650jsn60824e322b80',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setSearchExercises(response.data);
      } catch (error) {
        // Handle Error
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredExercises = (searchExercises ?? []).filter(
      (exercise) =>
        exercise.bodyPart.toLowerCase().includes(searchValue) ||
        exercise.equipment.toLowerCase().includes(searchValue) ||
        exercise.name.toLowerCase().includes(searchValue) ||
        exercise.target.toLowerCase().includes(searchValue)
    );
    setSearchExercises(filteredExercises);
    setCurrentPage(0);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    setInitialExercises(searchExercises);
  }, [searchExercises]);
  
  const handleClick = (item) => {
    if (item.name === 'All') {
      setSearchExercises(initialExercises);
    } else {
      const filtered = initialExercises.filter((exercise) => exercise.bodyPart === item.name);
      setSearchExercises(filtered);
    }
  };

  const offset = currentPage * PAGE_SIZE;
  const paginatedExercises = searchExercises.slice(offset, offset + PAGE_SIZE);

  return (
    <>
      <Box id="exercises">
        <div className="bg-[#252525] p-10">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-[26px] text-white font-bold lg:text-[36px] xl:text-[44px] 2xl:text-[52px]">
              EXERCISES TO GET YOU <span className="text-[#ff6c00]">SWEATING</span>
            </h1>
            <div className="flex justify-center mb-8">
              <input
                onChange={handleSearch}
                className="mt-8 bg-[#cfcfcf] rounded text-center sm:text-[22px]"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-4 gap-x-5 gap-y-2 
          sm:gap-y-5
          lg:gap-y-10
          mx-auto place-items-center w-[80%]">
            {paginatedExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </div>
          <div className="pagination-container">
          <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={Math.ceil(searchExercises.length / PAGE_SIZE)}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
              previousClassName={'pagination-previous'}
              nextClassName={'pagination-next'}
              pageClassName={'pagination-page'}
              breakClassName={'pagination-break'}
              disabledClassName={'pagination-disabled'}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Exercises;
