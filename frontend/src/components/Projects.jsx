import React from 'react';
import { useInView } from 'react-intersection-observer'; 
import FlightFinderImg from '../assets/images/flight-finder01.png'
import bookapiimg from '../assets/images/bookapiimg.png'
import discountcatalogimg from '../assets/images/discountcatalogimg.png'

const projects = [
  {
    title: 'Discount Catalog',
    description:
      'A modern affiliate store for Amazon deals built with Node.js and Puppeteer.',
    image: discountcatalogimg,
    github: 'https://github.com/vangricky/discountcatalog',
    live: 'https://discount-catalog.com',
  },
  {
    title: 'Flight Searcher',
    description:
      'Find flights using the Amadeus API, built with Node.js and Express.',
    image: FlightFinderImg,
    github: 'https://github.com/vangricky/wdd330-finalproject',
    live: 'https://flight-finder-nkge.onrender.com',
  },
  {
    title: 'Book API',
    description:
      'My personal portfolio built with React and Tailwind CSS to showcase projects.',
    image: bookapiimg,
    github: 'https://github.com/byui-cse341-f24/Group-3---Book-API',
    live: 'https://group-3-book-api.onrender.com/',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-700 py-16 px-6 sm:px-12" id="projects">
      <h2 className="text-7xl text-center text-white font-bold mb-10">
        <span className="text-orange-300">My</span> Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

// ProjectCard Component with Intersection Observer and Staggered Animation
const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const animationDelay = `${index * 200}ms`;

  return (
    <div
      ref={ref}
      className={`bg-gray-800 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-1000 ease-in-out ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: animationDelay }}
    >
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full h-64"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-3xl transition-transform duration-300 transform hover:scale-[1.1]"
        />
        <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 rounded-t-3xl transition-opacity duration-300"></div>
      </a>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-6">{project.description}</p>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-orange-300 rounded-full text-orange-300 hover:bg-orange-300 hover:text-gray-800 transition duration-300 ease-in-out text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-orange-300 rounded-full text-orange-300 hover:bg-orange-300 hover:text-gray-800 transition duration-300 ease-in-out text-sm font-medium"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
