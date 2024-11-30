'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Contact: React.FC = () => {
  const iconsArr = [
      {svg: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>)},
      {svg: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className='hover:fill-[#0077B5] transition ease-in-out' viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>)},
      {svg: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className='hover:fill-[#0088cc] transition ease-in-out' viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z" fillRule="evenodd"></path></svg>)}
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
              {iconsArr.map(({svg},i) => <div key={i} className='mr-5'>
                <Link href={linksIcons[i]} target="_blank" className='fill-white'>
                  {svg}
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
              <Image src='/Images/icons/gmail.png' alt='gmail' width={1000} height={1000} className='w-12 h-12'/>
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
