import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
const Projects = () => {
  const projects = [
    {
      imgUrl: '/assets/img/flix-demand.png',
      title: 'Flix Demand',
      description: 'This is a website for renting movies. Users can rent their favourite movies online without any inconvenience',
      githubLink: 'https://github.com/bhaumik0307/flixdemand',
      projectLink: 'https://flixdemand.netlify.app/',
      live: true
    },
    {
      imgUrl: '/assets/img/news.png',
      title: 'News Monkey',
      description: 'News Monkey is an application that provides live news updates using news api hosted locally made with react.js',
      githubLink: 'https://github.com/bhaumik0307/newMonkey',
      projectLink: '',
      live: false
    },
    {
      imgUrl: '/assets/img/text.png',
      title: 'Text Utils',
      description: 'Text Utils is an app which provides all the functionalities to edit a text. According to your needs you can perform various operations on the text.',
      githubLink: 'https://github.com/bhaumik0307/textUtils',
      projectLink: 'https://textutilsbybhaumik.netlify.app/',
      live: true
    },
    {
      imgUrl: '/assets/img/portfolio.png',
      title: 'Portfolio',
      description: 'This is my personal portfolio website that showcases my skills and my recent projects.',
      githubLink: 'https://github.com/bhaumik0307/MyPortfolio',
      projectLink: 'https://bhaumikchauhan.netlify.app/',
      live: true
    },
  ]
  return (
    <section className='bg-black flex justify-center items-cente h-auto' id='projects'>
        <div className='flex flex-col justify-center items-center w-5/6 py-5'>
            <h2 className='text-4xl font-extrabold text-gray-100 mb-3 '>Projects</h2>
            {/* <p className='text-base text-gray-300 mb-5 text-center'>My projects showcase my journey so far. </p> */}
            <div className='flex flex-row flex-wrap justify-between'>
                {projects.map(({imgUrl, title, description, githubLink, projectLink, live}) => (
                  <ProjectCard 
                    key={githubLink}
                    imgUrl={imgUrl}
                    title= {title}
                    description={description}
                    githubLink={githubLink}
                    projectLink={projectLink}
                    isLive= {live}
                  />
                ))}
                
                

            </div>
        </div>
    </section>
  )
}

export default Projects
