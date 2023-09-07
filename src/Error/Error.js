import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='error-page'>
        <Container>
            <Row>
                <Col >
                <div className='error-content'>
                <h3 className='err_txt'><span><i class="fa-solid fa-face-rolling-eyes fa-bounce"></i></span> !!! You need to login first </h3>
                <Link to={`/login`}><button>login</button></Link>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Error