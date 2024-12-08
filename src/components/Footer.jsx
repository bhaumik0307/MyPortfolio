import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/VueCjY01.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/leetcode-svg.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer py-4 bg-gray-800 text-white">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
            <img className='w-36 w-md-12' src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mb-3">
              <a href="https://www.linkedin.com/in/bhaumik-chauhan-415468257/" target="_blank" rel="noopener noreferrer">
                <img className='w-6 inline mx-2' src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/bhaumik0307" target="_blank" rel="noopener noreferrer">
                <img className='w-6 inline mx-2' src={navIcon2} alt="github" />
              </a>
              <a href="https://leetcode.com/u/cbhaumik08/" target="_blank" rel="noopener noreferrer">
                <img className='w-6 inline mx-2' src={navIcon3} alt="leetcode" />
              </a>
            </div>
            <p className="mb-0">&copy; {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
