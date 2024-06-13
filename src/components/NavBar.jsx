import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/VueCjY01.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
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

  return (
    <Router>
      <Navbar className={`${scrolled?"scrolled":""}`}>
        <Container>
          <Navbar.Brand href = "/">
            <img className='h-[80px]' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls = "basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link href="#home" className={active === 'home'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={active === 'skills'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#about" className={active === 'about'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#projects" className={active === 'projects'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href="https://www.linkedin.com/in/bhaumik-chauhan-415468257/"><img className='w-6' src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/bhaumik0307"><img className='w-6' src={navIcon2} alt="github" /></a>
                <a href="https://www.instagram.com/bhaumik_chauhan_08/"><img className='w-6' src={navIcon3} alt="instagram" /></a>
              </div>
              <Nav.Link href='#connect'>
                <button className="vvd"><span>Let&apos;s Connect</span></button>
              </Nav.Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar
