import { Box } from '@mui/material';
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Categories from './components/Categories';
import Exercises from './components/Exercises';
import Plan from './components/Plan';

function App() {
  return (
    <>
      <div>
        <Box>
          <Nav />
          <Landing />
          <Categories />
          <Exercises />
          <Plan />
        </Box>
      </div>
    </>
  );
}

export default App;
