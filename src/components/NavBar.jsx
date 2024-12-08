import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/VueCjY01.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/leetcode-svg.svg';
import { FaGithub } from "react-icons/fa";
// import Insta from './svg/Insta'
// import Fb from './svg/Fb'
// import Linkedin from './svg/Linkedin'
import { BrowserRouter as Router, Link } from 'react-router-dom';



const NavBar = () => {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true)
      } else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActive(value)
  }

  const handleClick = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  }

  return (
    <Router>
      <Navbar className={scrolled?"scrolled":""}>
        <Container>
          <Navbar.Brand href = "/">
            <img className='h-[80px]' src={logo} alt="" />
          </Navbar.Brand>
          <div className="block lg:hidden">
                <button onClick={handleClick} className="text-white focus:outline-none">
                    <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div id='menu' className="hidden lg:flex lg:items-center lg:w-auto w-full">
            <Nav className='ms-auto'>
              <Nav.Link href="#home" className={active === 'home'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={active === 'skills'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#about" className={active === 'about'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#projects" className={active === 'projects'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href="https://www.linkedin.com/in/bhaumik-chauhan-513526330/" target='_blank'><img className='w-6' src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/bhaumik0307" target='_blank'><img className='w-6' src={navIcon2} alt="github" /></a>
                <a href="https://leetcode.com/u/cbhaumik08/" target='_blank'><img className='w-6' src={navIcon3} alt="leetcode" /></a>
              </div>
              <Nav.Link href='#connect'>
                <button className="vvd"><span>Let&apos;s Connect</span></button>
              </Nav.Link>
            </span>
          </div>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar
