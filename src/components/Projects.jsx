import React from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
// import banner from '../assets/projects/food.png'
const Projects = () => {
  const projects = [
    {
      imgUrl: '/src/assets/projects/food.png',
      title: 'Food Ordering UI',
      description: 'Built a UI design for a food ordering website. It can be used as an example to create fully functional website',
      githubLink: 'https://github.com/bhaumik0307/Food_ordering_website',
      projectLink: 'https://bhaumik0307.github.io/Food_ordering_website/',
      live: true
    },
    {
      imgUrl: '/src/assets/projects/news.png',
      title: 'News Monkey',
      description: 'News Monkey is an application that provides live news updates using news api hosted locally made with react.js',
      githubLink: 'https://github.com/bhaumik0307/newMonkey',
      projectLink: '',
      live: false
    },
    {
      imgUrl: '/src/assets/projects/text.png',
      title: 'Text Utils',
      description: 'Text Utils is an app which provides all the functionalities to edit a text. According to your needs you can perform various operations on the text.',
      githubLink: 'https://github.com/bhaumik0307/textUtils',
      projectLink: 'https://textutilsbybhaumik.netlify.app/',
      live: true
    },
    {
      imgUrl: '/src/assets/projects/todo.png',
      title: 'Todo List',
      description: 'A simple example of CRUD operations using Node.js Express.js and mongodb, todo list can be hosted locally to make a note of all daily tasks',
      githubLink: 'https://github.com/bhaumik0307/To_do_list',
      projectLink: '',
      live: false
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
