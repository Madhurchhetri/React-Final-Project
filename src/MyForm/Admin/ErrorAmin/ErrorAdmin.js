import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorAdmin = () => {
  return (
    <div className='error-page'>
        <Container>
            <Row>
                <Col >
                <div className='error-content'>
                <h3 className='err_txt'><span><i class="fa-solid fa-face-rolling-eyes fa-bounce"></i></span> !!! Please Admin You need to login first </h3>
                <Link to={`/adminLogin`}><button>login</button></Link>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ErrorAdmin