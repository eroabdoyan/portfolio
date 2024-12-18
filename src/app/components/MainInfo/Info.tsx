'use client';

import React, { useState, useEffect } from 'react';
import './main.css';

const Info: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const text = "Dedicated to crafting seamless and captivating web experiences, here you'll find a showcase of my passion for creating dynamic user interfaces and responsive designs. Dive in and explore the projects that highlight my expertise in HTML, CSS, JavaScript, and modern frameworks like React JS and Next JS. Let's connect and bring your digital ideas to life!";
  const maxWidth = 620; 

  useEffect(() => {
    let currentIndex = 0;
    let lineText = '';
    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        const newChar = text[currentIndex];
        lineText += newChar;
        setDisplayedText((prev) => prev + newChar);
        currentIndex++;

        if (getTextWidth(lineText) > maxWidth) {
          setDisplayedText((prev) => prev + '\n' + newChar); 
          lineText = newChar; 
        }
      } else {
        clearInterval(typingInterval); 
      }
    }, 50); 

    return () => clearInterval(typingInterval);
  }, []);

  const getTextWidth = (text: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      context.font = '1.2em monospace';
      return context.measureText(text).width;
    }
    return 0;
  };

  return (
    <div className="text-container text-white text-center lg:w-[620px] lg:p-4 lg:px-5 p-2 -mx-10 pb-10 border rounded-2xl shadow-md shadow-white">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Info;
