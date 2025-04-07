import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const About = () => {
  return (
    <div className='h-175 bg-gray-800 gap-10 z-auto'>
        <div grid grid-rows-2 gap-5>
            <div className='pl-30 pt-20 pb-20'>
                <h1 className='text-8xl font-bold text-white'>About me</h1>
                <hr className='w-106 h-3 bg-orange-300' />
            </div>
            <div className='pl-30 pr-30 '>
                <p className='text-md font-bold text-white'>I'm a self-taught web developer with a strong foundation in front-end technologies like HTML, CSS, JavaScript, and
                     React, and I've expanded my skills into modern tools like Tailwind CSS, Node.js, and PostgreSQL. My journey into tech 
                     started with a curiosity for how websites work and grew into a passion for creating clean, responsive, and engaging 
                     user experiences. Alongside my development work, I bring hands-on experience as an IT support specialist, where I've 
                     sharpened my ability to solve problems efficiently and collaborate with teams. As president of the Web Design and 
                     Development Society, I lead initiatives to support fellow developers and foster a creative, growth-driven community. 
                     I'm always pushing to learn more, build better, and contribute to meaningful digital projects.</p>
                     <div className="flex space-x-4 mt-4 gap-3 pt-10">
                        <a href="https://github.com/vangricky" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white hover:text-gray-300 text-4xl transition" />
                        </a>
                        <a href="https://linkedin.com/in/rickyvang" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-blue-500 hover:text-blue-700 text-4xl transition" />
                        </a>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default About