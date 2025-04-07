import React from 'react'
import rickyhero from '../assets/images/ricky-transparent-hero.png'

const Hero = () => {
  return (
    <div className='h-[166.5] bg-gray-700 gap-10 z-auto overflow-hidden'>
        <div className='flex justify-between'>
            <div>
                <img className='w-178 drop-shadow-[0_15px_40px_rgba(255,140,0,0.5)]' src={rickyhero} alt="" />
            </div>
            <div className='text-white text-8xl mr-10 mt-35'>
              <p className='montserrat-main text-6xl mb-7'>Hello, I'm <span className='font-semibold text-orange-300'>Ricky</span>,</p>
              <h1 className='font-bold'>Full-Stack <br/> Web Developer.</h1>
            </div>
        </div>

    </div>
  )
}

export default Hero