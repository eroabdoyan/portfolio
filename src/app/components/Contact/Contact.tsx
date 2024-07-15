'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Contact: React.FC = () => {
  const iconsArr = [
      '/Images/icons/github.png',
      '/Images/icons/linkedin.png',
      '/Images/icons/telegram.png',
  ]
  const linksIcons = [
    'https://github.com/eroabdoyan',
    'https://www.linkedin.com/in/erik-abdoyan-44ab90256/',
    'https://t.me/Ero33',
  ]
  const [isHovered, setIsHovered] = React.useState(false);
  const [tooltipText, setTooltipText] = React.useState('Copy');
  const handleTextClick = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setTooltipText('Copied!');
        setTimeout(() => {
          setTooltipText('Copy');
        }, 1500);
        console.log('Text copied to clipboard:', text);
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard:', error);
        setTooltipText('Failed to Copy!');
        setTimeout(() => {
          setTooltipText('Copy to Clipboard');
        }, 1500);
      });
  };

  

  return (
    <div className='text-white'>
        <div className='h-[2px] my-10 lg:mx-20 mx-10 rounded-full bg-cyan-600 shadow shadow-cyan-600'></div>
        <h1 className='text-center text-3xl my-10 font-mono'>Contacts</h1>
        <div className='lg:flex justify-between xl:mx-20 lg:mx-20 mx-10'>
          <div>
            <p className='xl:w-[600px] lg:w-[500px] font-mono text-lg'>
              Ready to elevate your project? Have a question or simply want to connect? I'm here to assist! Whether you're seeking collaboration on a new endeavor or require support with an ongoing project, let's delve into how we can craft exceptional user experiences and breathe life into your concepts. I eagerly await your message!
            </p>

            <div className='flex my-10'>
              {iconsArr.map((icon,i) => <div key={i} className='mr-5'>
                <Link href={linksIcons[i]}>
                  <Image src={icon} alt='sa' width={1000} height={1000} className='w-12 h-12 '/>
                </Link>
              </div>)}
            </div>
          </div>
          <div className='xl:mr-40'>
            <div className='mb-6'>
              <h1 className='text-2xl'>Contact Me</h1>
              <div className='h-[2px] w-[135px] rounded-full bg-cyan-600 shadow shadow-cyan-600'></div>
            </div>
            <div className='flex items-center'>
              <Image src='/images/icons/gmail.png' alt='gmail' width={1000} height={1000} className='w-12 h-12'/>
              <h3 className='font-bold text-lg relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => handleTextClick('abdoyan.erikk@gmail.com')}
                style={{ cursor: 'pointer' }}
              >
                {isHovered && (
                  <span className='absolute bottom-[-30px] left-[50%] transform translate-x-[-50%] text-xs bg-gray-700 text-white px-2 py-1 rounded'>{tooltipText}</span>
                )}
                abdoyan.erikk@gmail.com
              </h3>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Contact;
