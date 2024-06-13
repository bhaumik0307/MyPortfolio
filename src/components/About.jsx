import React, { useEffect, useRef } from 'react'
import profile from '../assets/img/bhaumik.jpg'
import VanillaTilt from 'vanilla-tilt'
const About = () => {
  const titleRef = useRef(null)
    useEffect(() => {
        VanillaTilt.init(titleRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        })

        return () => {
          if(titleRef.current){
            titleRef.current.vanillaTilt.destroy();
          }
        }
    }, [])
  return (
    <div id='about' className='flex flex-col bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 justify-center items-center py-[100px] h-auto'>
      <h2 className='mb-[50px] text-5xl font-bold text-center'>About me</h2>
      <div className='flex justify-center w-full'>
      <p className='w-1/2 pl-[200px] pt-[50px] text-lg'>Hi! My name is Bhaumik. I am a full stack web developer and a competitive programmer. My interest in web development started from 2nd semester 
      of my college and from then I never stopped myself from learning new technologies in the field of web development. I love building websites from scratch and the designing them on my own
      . To build something and adding it to web just gives me the kick in 
      life.<br/><br/><br/> Apart from web development I also do competetive programming. I am a 3 star 
      coder on codechef and pupil on codeforces, although it keeps on increasing and 
      decreasing 😅. I am a dedicated and hardworking individual and I give my 100% on whatever I start to learn</p>
      <div className='flex justify-center items-center w-1/2'>
      <img ref={titleRef} className='w-[500px] h-[500px] rounded-full filter grayscale hover:filter-none' src={profile} alt="profile" />
      </div>
      </div>
    </div>
  )
}

export default About
