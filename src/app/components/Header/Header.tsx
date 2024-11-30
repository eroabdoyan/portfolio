'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const scrollToSection = (id: string, duration: number) => {
  const element = document.getElementById(id);
  if (element) {
    const startPos = window.pageYOffset;
    const targetPos = element.offsetTop;
    const distance = targetPos - startPos;
    const startTime = performance.now();

    const scrollStep = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      window.scrollTo(0, startPos + distance * progress);

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    };

    window.requestAnimationFrame(scrollStep);
  }
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='text-white flex justify-between lg:p-6 xl:mx-60 md:mx-40 lg:mx-40 mx-10'>
      <div className='text-2xl md:text-xl font-mono'>
        <Link href="/">Abdoyan</Link>
      </div>
      <button className='block items-center md:hidden text-2xl' onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>     
      <ul className={`text-lg font-mono items-center lg:flex md:flex md:space-x-7 lg:mt-0 lg:space-x-10 ${isMenuOpen ? 'absolute border rounded-3xl p-2 right-2 flex flex-col mt-10 space-y-2' : 'hidden'}`}>  
        <li>
          <Link href='#about' onClick={() => scrollToSection('about', 800)}>About</Link>
        </li>
        <li>
          <Link href='#skills' onClick={() => scrollToSection('skills', 800)}>Skills</Link>
        </li>  
        <li>
          <Link href='#projects' onClick={() => scrollToSection('projects', 800)}>Projects</Link>
        </li> 
        <li>
          <Link href='#contact' onClick={() => scrollToSection('contact', 800)}>Contact</Link>
        </li> 
      </ul> 
      
    </header>
  )
}

export default Header