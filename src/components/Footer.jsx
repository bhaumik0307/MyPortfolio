import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/VueCjY01.svg'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer h-44 flex justify-center items-center">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className='w-36' src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bhaumik-chauhan-415468257/" target="_blank"><img className='w-6' src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/bhaumik0307" target="_blank"><img className='w-6' src={navIcon2} alt="github" /></a>
              <a href="https://www.instagram.com/bhaumik_chauhan_08/" target="_blank"><img className='w-6' src={navIcon3} alt="instagram" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer