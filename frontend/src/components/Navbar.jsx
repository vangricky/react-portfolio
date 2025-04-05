import React from 'react'
import rickylogo from '../assets/images/Ricky-orange-icon.png'

const Navbar = () => {
  return (
    <div className='pl-25 pr-15 w-full h-28 bg-gray-700 flex justify-between'>
        <div>
            <img className='w-15 pt-5' src={rickylogo} alt="" />
        </div>
        <div>
          <ul className='flex gap-10 pt-9 text-orange-300 text-lg'>
            <li className='hover:text-white transition'><a href="">About</a></li>
            <li className='hover:text-white transition'><a href="">Skills</a></li>
            <li className='hover:text-white transition'><a href="">Projects</a></li>
            <li className='hover:text-white transition'><a href="">Contact</a></li>
            <li className='hover:text-white border rounded p-1 cursor-pointer mt-[-5px] transition'><a href="">Resume</a></li>

          </ul>
        </div>
    </div>
  )
}

export default Navbar