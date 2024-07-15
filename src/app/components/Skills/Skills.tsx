import Image from 'next/image';
import React from 'react';

const Skills: React.FC = () => {
    const skillsIcon = [
        {
            skill: 'HTML',
            icon: '/Images/SkillsIcon/html.png'
        },{
            skill: 'CSS',
            icon: '/Images/SkillsIcon/css.png'
        },
        {
            skill: 'Tailwind CSS',
            icon: '/Images/SkillsIcon/tailwind-css.svg'
        },
        {
            skill: 'JavaScript',
            icon: '/Images/SkillsIcon/javascript.png'
        },
        {
            skill: 'React JS',
            icon: '/Images/SkillsIcon/react.png'
        },
        {
            skill: 'Redux/toolkit',
            icon: '/Images/SkillsIcon/redux_toolkit.png'
        },
        {
            skill: 'Next JS',
            icon: '/Images/SkillsIcon/next-js.svg'
        },
    ];
  
    return (
        <div className='text-white mt-32'>
            <div className='h-[2px] my-10 lg:mx-20 mx-10 rounded-full bg-cyan-600 shadow shadow-cyan-600'></div>
            <h1 className='text-center text-3xl mb-10 font-mono'>Skills</h1>
            <div className='flex flex-wrap justify-center items-center md:mx-72 lg:mx-20 xl:mx-[400px]'>
                {skillsIcon.map((skill, i) => (
                    <div key={i} className='flex flex-col items-center lg:mx-10 mx-7 my-3 w-20 '>
                        <Image src={skill.icon} alt={skill.skill} width={1000} height={1000} className='lg:w-16 lg:h-16 w-14 h-14'/>
                        <h1 className='text-lg font-mono my-3 text-nowrap'>{skill.skill}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;