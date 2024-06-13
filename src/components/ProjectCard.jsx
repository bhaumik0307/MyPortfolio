import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { FaGithub } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const ProjectCard = ({title, description, imgUrl, projectLink, githubLink, isLive}) => {
    const titleRef = useRef(null)
    useEffect(() => {
        VanillaTilt.init(titleRef.current, {
            max: 20,
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
    <div className="w-[360px] h-auto rounded-2xl p-3 border-1 border-blue-800 shadow-3 shadow-white my-10" 
    style={{background: 'rgb(16 10 71)'}} ref={titleRef} >
      <img className='rounded-xl mb-4 h-48' src={imgUrl} alt="" />
      <div>
        <h2 className='text-3xl mb-2'>{title}</h2>
        <p className='text-base text-gray-300 mb-2'>{description}</p>
        <div className='flex flex-row justify-between h-auto'>

        <a className='rounded-full bg-black p-2 hover:bg-gray-400 align-right' href={githubLink} target='_blank'>
        <FaGithub className='w-[30px] h-[30px]' /></a>

        {isLive && <a className='flex bg-black h-auto p-2 rounded-full justify-center items-center' 
        href={projectLink} target='_blank'><MdOutlineRemoveRedEye className='w-[30px] h-[30px]' /></a>}
        
        </div>

      </div>
    </div>
  )
}

export default ProjectCard
