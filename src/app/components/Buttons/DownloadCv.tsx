'use client'

import React from 'react'

const DownloadCv: React.FC = () => {
  const handleDownload = () => {
    const filePath = '/CV/Erik_Abdoyan_Front-End.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'Erik_Abdoyan_Front-End_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='lg:rounded-full rounded-3xl font-semibold lg:p-4 p-3 w-44 text-white bg-sky-600 uppercase transition duration-300 hover:scale-105' onClick={handleDownload}>
      Download CV
    </button>
  )
}

export default DownloadCv;
