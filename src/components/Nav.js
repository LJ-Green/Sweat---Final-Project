import React from 'react'
import Logo from "../assets/sweat-logo.png";
import { Link } from '@mui/material';

const Nav = () => {
  return (
    <div className='bg-white w-[100%] fixed flex justify-between items-center z-40'>
      <div>
        <img src={Logo}
          className='w-40 ml-5'
        />
      </div>
      <div className='text-[14px] cursor-pointer mx-5'>
        <Link src='/' style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>Home</Link>
        <Link href='#exercises' style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>Exercises</Link>
        <Link href='#plan' style={{ color: 'black', textDecoration: 'none' }}>Plan</Link>
      </div>
    </div>
  )
}

export default Nav
