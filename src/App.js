import { Box } from '@mui/material';
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Categories from './components/Categories';
import Exercises from './components/Exercises';
import Plan from './components/Plan';
import Footer from './components/Footer'
import { useState } from 'react';


function App() {
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
      name: "head",
      target: "string"
    }
  ]
  const [searchExercises, setSearchExercises] = useState(sampleData)
  return (
    <>
      <div>
        <Box>
          <Nav />
          <Landing />
          <Categories setSearchExercises={setSearchExercises} sampleData={sampleData} />
          <Exercises sampleData={sampleData} searchExercises={searchExercises} setSearchExercises={setSearchExercises} />
          <Plan />
          <Footer />
        </Box>
      </div>
    </>
  );
}

export default App;
