import { Box } from '@mui/material';
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Categories from './components/Categories';
import Exercises from './components/Exercises';
import Plan from './components/Plan';
import Footer from './components/Footer'

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
          <Footer />
        </Box>
      </div>
    </>
  );
}

export default App;
