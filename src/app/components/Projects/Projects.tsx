"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const isLgOrLarger = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'Faze Project',
      description: 'Successfully completed a project to design and develop a website for the Faze project.Created a custom, responsive design using modern technologies(Next JS, TypeScript, Tailwind CSS).Ensured fast loading times and seamless functionality acrossdevices and browsers.Integrated necessary features and met all technical and designrequirements provided by the client.Delivered the project on time, meeting all client expectationsand specifications.',
      image: '/Images/projectsImages/faze.png',
      demo: 'https://faze-web.vercel.app/',
      code: 'unavailable'
    },
    {
      id: 2,
      name: 'Weather App',
      description: 'Weather App is a sleek and user-friendly weather app designed to provide real-time forecasts with style. Developed using Next.js, TypeScript, and Tailwind CSS, this project demonstrates my expertise in frontend technologies. With features like location-based weather updates, hourly forecasts, and a clean interface, Weather App showcases my ability to create functional and visually appealing applications. Explore Weather App in my portfolio and experience weather forecasting like never before.',
      image: '/Images/projectsImages/weather-searching.png',
      demo: 'https://weather-app-blue-rho-29.vercel.app/',
      code: 'https://github.com/eroabdoyan/weather-app'
    },
    {
      id: 3,
      name: 'NFT Marketplace',
      description: 'Step into the world of non-fungible tokens (NFTs) with NFT Marketplace, a dynamic marketplace built using Next.js and TypeScript. NFT Marketplace empowers users to explore, buy, and sell digital collectibles effortlessly. With intuitive features like user registration and NFT creation, artists can showcase their creativity by minting and selling their own unique pieces. Experience the future of digital ownership with NFT Marketplace, featured in my portfolio.',
      image: '/Images/projectsImages/nft-1.png',
      demo: 'https://youtu.be/Q5PAjO0jUS8',
      code: 'https://github.com/eroabdoyan/nft-market'
    },
  ];

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };


  return (
    <div className='text-white'>
      <div className='h-[2px] my-10 lg:mx-20 mx-10 rounded-full bg-cyan-600 shadow shadow-cyan-600'></div>
      <h1 className='text-center text-3xl mb-10 font-mono'>Projects</h1>

      <div className='flex flex-col items-center mx-2'>
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className={`bg-transparent rounded-lg p-4 my-10 ${isClient && isLgOrLarger ? 'lg:flex' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? slideInFromRight : slideInFromLeft}
          >
            {index % 2 === 1 
              ? (
                <>
                  {isClient && isLgOrLarger 
                    ? (
                      <>
                        <div className='lg:mr-10'>
                          <h2 className='text-xl font-semibold mb-2'>{project.name}</h2>
                          <p className='text-gray-400 xl:w-[500px] lg:w-[360px] cursor-default hover:text-white transition-colors ease-in-out duration-300'>{project.description}</p>
                          <div className='my-8'>
                            <Link href={project.code} className='p-4 px-8 mr-5 border rounded-full transition duration-300 hover:bg-sky-600 hover:border-sky-600'>Code</Link>
                            <Link href={project.demo} className='p-4 px-8 rounded-full transition duration-300 bg-sky-600 hover:bg-opacity-75'>Live Demo</Link>  
                          </div>
                        </div>
                        <Image src={project.image} alt={project.name} width={1000} height={1000} className='w-[500px] h-[300px] rounded-2xl mb-4' />
                      </>
                    ) 
                    : (
                      <>
                        <Image src={project.image} alt={project.name} width={1000} height={1000} className='w-[500px] h-[300px] rounded-2xl mb-4' />
                        <div className='xl:mr-10'>
                          <h2 className='text-xl font-semibold mb-2'>{project.name}</h2>
                          <p className='text-gray-400 xl:w-[500px] lg:w-[360px] cursor-default hover:text-white transition-colors ease-in-out duration-300'>{project.description}</p>
                          <div className='my-8'>
                            <Link href={project.code} className='p-4 px-8 mr-5 border rounded-full transition duration-300 hover:bg-sky-600 hover:border-sky-600'>Code</Link>
                            <Link href={project.demo} className='p-4 px-8 rounded-full transition duration-300 bg-sky-600 hover:bg-opacity-75'>Live Demo</Link>  
                          </div>
                        </div>
                      </>
                    )}
                </>
              ) 
              : (
                <>
                  <Image src={project.image} alt={project.name} width={1000} height={1000} className='w-[500px] h-[300px] rounded-2xl mb-4' />
                  <div className='lg:ml-10'>
                    <h2 className='text-xl font-semibold mb-2'>{project.name}</h2>
                    <p className='text-gray-400 xl:w-[500px] cursor-default hover:text-white transition-colors ease-in-out duration-300'>{project.description}</p>
                    <div className='my-8'>
                      <Link href={project.code} className='p-4 px-8 mr-5 border rounded-full transition duration-300 hover:bg-sky-600 hover:border-sky-600'>Code</Link>
                      <Link href={project.demo} className='p-4 px-8 rounded-full transition duration-300 bg-sky-600 hover:bg-opacity-75'>Live Demo</Link>  
                    </div>
                  </div>
                </>
              )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


