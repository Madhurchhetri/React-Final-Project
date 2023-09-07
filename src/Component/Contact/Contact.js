import React, { useEffect } from 'react'
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration:3000})
    })
  return (
    <div className='contact'>
    <Container>
    <Row>
    
    <h3 className=' contact-heading text-center'>Send Me Your Query</h3>
    <Col xl={12} md={12} xs={12}>
        <form action="https://formspree.io/f/xknloalj" method='POST' className='cntct' data-aos='flip-left'>
            <div className='inpt_box1'>
            <input type="text" name='Username' required />
            <label htmlFor='Username' className='inpt-lbl'> Name </label>
            </div>
            
            <div className='inpt_box1'>
                        <input type="text" name='email' required/>
                        <label htmlFor="email" className='inpt-lbl'>Email</label>
                    </div>
                    <div className='inpt_box1'>
                    <textarea name="Message" cols="30" rows="2" required autoComplete='off' ></textarea>
                    <label htmlFor="Message" className='inpt-lbl'>Enter your message</label>
                    </div>
            
            <button className="btn query">send</button>
            
        </form>
        </Col>
        </Row>
        </Container>
    </div>
  
  )
}

export default Contact