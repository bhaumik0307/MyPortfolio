import { useEffect, useState } from 'react'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import bannerBg from '../assets/img/banner-bg.png'
import TrackVisibility from 'react-on-screen'
import 'animate.css'
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ["Web Developer", "UI/UX Designer", "Comp. Programmer"];
  const period = 500

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevdelta => prevdelta * 0.75)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period)
    }
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(200)
    }
    else{
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          {/* col */}
          <Col xs={12} md={6} xl={7} >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Bhaumik `}<br/> <span className='txt-rotate' ><span className='wrap text-purple-500'>{text}</span></span></h1>
                  <p>Student at IIIT Kota(2022-2026),<br/> A passionate web developer and a responsible citizen.<br/></p>
                  <a href='#connect'><button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button></a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible? "animate__animated animate__zoomIn":""}>
                  <img src={headerImg} alt="Header image" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
