import React, { useEffect, useRef } from 'react';
import profile from '../assets/img/bhaumik.jpg';
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(titleRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    });

    return () => {
      if (titleRef.current) {
        titleRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div id="about" className="flex flex-col justify-center items-center py-20 h-auto" style={{background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'}}>
      <h2 className="mb-12 text-5xl font-bold text-center text-white">About Me</h2>
      <div className="flex flex-col lg:flex-row justify-center w-full items-center lg:items-start px-4 lg:px-0">
        <div className="lg:w-1/2 lg:pr-8">
          <p className="text-white text-lg mb-8 mb-lg-0">
            Hi! My name is Bhaumik. I am a full stack web developer and a competitive programmer. My interest in web development started from 2nd semester of my college and from then I never stopped myself from learning new technologies in the field of web development. I love building websites from scratch and designing them on my own. Building something and adding it to the web just gives me a kick in life.
            <br /><br />
            Apart from web development, I also do competitive programming. I am a 3-star coder on CodeChef and a pupil on Codeforces, although it keeps on increasing and decreasing 😅. I am a dedicated and hardworking individual and I give my 100% on whatever I start to learn.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center justify-lg-start">
          <img
            ref={titleRef}
            className="md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-full filter grayscale hover:filter-none"
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
