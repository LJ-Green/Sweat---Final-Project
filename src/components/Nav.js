import React from 'react'
import Logo from "../assets/sweat-logo.png";
import { Link } from '@mui/material';

const Nav = () => {
  return (
    <div 
    className='bg-white w-[100%] fixed flex justify-between items-center z-40
    bg-opacity-20'>
      <div>
        <img src={Logo}
          className='w-40 ml-5'
        />
      </div>
      <div className='text-[14px]
      lg:text-[16px]
      cursor-pointer mx-5'>
        <Link src='/' style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Home</Link>
        <Link href='#exercises' style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Exercises</Link>
        <Link href='#plan' style={{ color: 'white', textDecoration: 'none' }}>Plan</Link>
      </div>
    </div>
  )
}

export default Nav
