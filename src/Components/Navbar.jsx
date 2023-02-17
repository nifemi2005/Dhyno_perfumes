import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex flex-col lg:gap-4 lg:pt-7 lg:pb-7 lg:items-center bg-[#faeac6]'>
      <div className='flex items-center justify-between lg:px-0 md:px-8 sm:px-5 px-4 lg:pt-0 md:pt-8 sm:pt-5 pt-4 lg:pb-0 md:pb-8 sm:pb-5 pb-4'>
        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <AiOutlineClose className='opacity-0' size={20}/> :  <AiOutlineMenu size={25}/>}
        </div>
        <h1 className='lg:text-[40px] font-bold text-center leading-none'>DHYNO PERFUMES</h1>
        <div className='flex text-[20px] gap-2'>
          <AiOutlineSearch  className='lg:hidden'/>
          <MdOutlineNotificationsActive  className='lg:hidden'/>
        </div>
      </div>
      <div className='lg:gap-7 lg:flex hidden justify-center text-[18px]'>
        <Link to='/'>Perfume</Link>
        <Link>Perfume</Link>
        <Link>Perfume</Link>
        <Link>Perfume</Link>
        <Link>Perfume</Link>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500 sm:w-[50%]' : 'fixed left-[-100%]'}>
        <div className='flex items-center justify-between m-4'>
          <h1 className='w-full text-[24px] font-bold text-[#292929]'>Dhyno.</h1>
          <div onClick={handleNav}>
            <AiOutlineClose size={26}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar