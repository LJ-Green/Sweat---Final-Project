import React from 'react'
import Logo from "../assets/sweat-logo.png";
import { Link } from '@mui/material';

const Nav = () => {
  return (
    <div className='flex justify-between items-center mx-5'>
      <div>
        <img src={Logo}
          className='w-40'
        />
      </div>
      <div className='text-[14px] cursor-pointer mx-5'>
        <Link src='/'>Home</Link>
        <Link href='#exercises'>Exercises</Link>
        <Link href='#plan'>Plan</Link>
      </div>
    </div>
  )
}

export default Nav
