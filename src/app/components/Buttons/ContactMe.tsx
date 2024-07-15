'use client'

import Link from 'next/link';
import React from 'react'

const ContactMe: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button className='lg:rounded-full rounded-3xl font-semibold border lg:p-4 p-2 text-white bg-transparent bg-opacity-40 uppercase transition duration-300 hover:bg-sky-600 hover:border-sky-600 hover:scale-105 ml-5'>
      <Link href='#contact' onClick={handleClick} >
          Contact Me
      </Link>  
    </button>
    
  )
}

export default ContactMe;
