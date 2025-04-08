import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-8xl font-bold text-white"
              data-aos="fade-up" data-aos-delay="200"> 
            About me
          </h1>
          <hr className="w-40 h-1 bg-orange-300 my-4"
              data-aos="fade-up" data-aos-delay="300" /> 
        </div>
        <div className="text-white text-lg font-medium"
             data-aos="fade-up" data-aos-delay="400"> 
          <p className="mb-6">
            I'm a self-taught web developer with a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React. 
            I’ve expanded my skills into modern tools like Tailwind CSS, Node.js, and PostgreSQL. My journey into tech started with a curiosity 
            for how websites work and grew into a passion for creating clean, responsive, and engaging user experiences. 
            Alongside my development work, I bring hands-on experience as an IT support specialist, where I’ve sharpened my ability to solve 
            problems efficiently and collaborate with teams. As president of the Web Design and Development Society, I lead initiatives to 
            support fellow developers and foster a creative, growth-driven community. I'm always pushing to learn more, build better, 
            and contribute to meaningful digital projects.
          </p>
          <div className="flex space-x-4 mt-4 gap-3 pt-10"
               data-aos="fade-right" data-aos-delay="500"> 
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
  );
};

export default About;
