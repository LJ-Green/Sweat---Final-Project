import React from 'react'
import Logo from './../assets/sweat-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
      <img
        className='w-[50%] sm:w-[40%] lg:w-[30%] 2xl:w-[20%]'
        src={Logo} />
      <div className='mb-6'>
        <Link src='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
        <Link href='#exercises' style={{ color: 'black', textDecoration: 'none', margin: '50px' }}>Exercises</Link>
        <Link href='#plan' style={{ color: 'black', textDecoration: 'none' }}>Plan</Link>
      </div>
      <p
      className='text-[14px] mb-10 underline'
      >Designed and developed by LJ Green. All Rights Reserved 2023</p>
    </div>
  )
}

export default Footer
