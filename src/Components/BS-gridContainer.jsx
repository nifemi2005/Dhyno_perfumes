import React from 'react'
import { Link } from 'react-router-dom'
import GridImage13 from '../assets/Grid-Image13.jpeg'
import GridImage14 from '../assets/Grid-Image14.jpeg'
import GridImage15 from '../assets/Grid-Image15.jpeg'
import GridImage16 from '../assets/Grid-Image16.jpeg'
import GridImage17 from '../assets/Grid-Image17.jpeg'
import GridImage18 from '../assets/Grid-Image18.jpeg'
import GridImage19 from '../assets/Grid-Image19.jpeg'
import GridImage20 from '../assets/Grid-Image20.jpeg'

const BSgridContainer = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto lg:w-[90%] md:w-[80%] w-[70%] lg:gap-[20px] md:gap-[20px] sm:gap-[15px] gap-3 lg:pt-[50px] sm:pt-[45px] lg:pb-[60px] sm:pb-[45px] pt-[25px] pb-[40px]'>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage13} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Adeeb</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage14} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Carbbean vanilla</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage15} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Temptation</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage16} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Paradox</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage17} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Cool breeze</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage18} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Blu</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage19} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Qaed</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
        <div className='bg-[#F5E9CF] md:p-4 p-3.5'>
            <div>
                <img src={GridImage20} alt=""/>
            </div>
            <div className='flex items-center justify-between pt-3 pb-4'>
                <p>Choco musk</p>
                <p>#1000</p>
            </div>
            <div className='text-center'>
                <Link to='/payment1' className='bg-white px-9 py-2'>Checkout</Link>
            </div>
        </div>
    </div>
  )
}

export default BSgridContainer