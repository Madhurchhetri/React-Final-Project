import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Pnf.css'

const Pnf = () => {
  return (
    <div className='error-page'>
        <Container>
            <Row>
                <Col className='mt-5'>
                    <h1>404!! Sorry Page Not Found</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Pnf