import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
