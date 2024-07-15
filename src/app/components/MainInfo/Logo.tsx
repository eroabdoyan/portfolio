import Image from 'next/image';
import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-sky-300 to-sky-700 rounded-full p-2 mb-10 md:w-60 md:h-60 lg:w-60 lg:h-60 flex items-center justify-center w-40 h-40'>
      <Image src='/images/logo.webp' alt='logo' width={1000} height={1000}  className='rounded-full w-full h-full'/>
    </div>
  )
}

export default Logo;
