import React from 'react'
import rickyhero from '../assets/images/ricky-transparent-hero.png'

const Hero = () => {
  return (
    <div className="bg-gray-700 overflow-hidden flex items-center px-6 sm:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">

        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 h-full items-end justify-center">
          <img
            className="h-full w-full object-cover drop-shadow-[0_15px_40px_rgba(255,140,0,0.5)]"
            src={rickyhero}
            alt="Ricky Vang Hero"
          />
        </div>

        {/* Text Section */}
        <div className="text-white text-center md:text-left md:w-1/2 flex flex-col justify-center">
          <p className="montserrat-main text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Hello, I'm <span className="font-semibold text-orange-300">Ricky</span>,
          </p>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Full-Stack <br /> Web Developer.
          </h1>
        </div>

      </div>
    </div>
  )
}

export default Hero
