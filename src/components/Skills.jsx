import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"

import colorShape from "../assets/img/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx wow zoomIn'>
                            <h2 className='text-5xl font-bold mb-4'>Skills</h2>
                            <p className='mb-5'>So far i have studied data structures and algorithm. I have done competitive programming <br/>on various platforms. Web development has always been my interest.</p>
                            <Carousel responsive={responsive} className='owl-carousel owl-theme skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt="" />
                                    <h5>Data Structures</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="" />
                                    <h5>Web development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="" />
                                    <h5>Algorithms</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="" />
                                    <h5>Database Management</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorShape} alt="color Shape" />
        </section>
    )
}

export default Skills
