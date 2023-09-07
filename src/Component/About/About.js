import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(()=>{
    AOS.init({duration:3000})
  })
  return (
    <div className='abt-page'>
    <h2 className='abt_h'>About us</h2>
    <div className='about-section'>
       <Container>
            <Row>
                <Col className='aboutImg'  xl={6} md={12} xs={12}>
                    <figure >
                        <img src="../../../../assets/About.webp" alt="about" className='image' data-aos='fade-up' />
                    </figure>
                </Col>
                <Col className='content abt-home-content'  xl={6} md={12} xs={12} >
                    <h2 className='content_h' data-aos='fade-up-right'>EXPERT PERSONAL TRAINING</h2>
                    <p className='content_p' data-aos='fade-up-right'>Doon Fitness Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins. </p>
                   <Link to={`/registration`}>
                    <Button variant="primary">Click to join us</Button>
                    </Link>
                </Col>
            </Row>
    </Container>
    </div>
    </div>
  )
}

export default About