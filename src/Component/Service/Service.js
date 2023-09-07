import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ExerciseJson from '../Gym/Exercise/Exercise.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Service.css'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div className='service_section'>
        <Container>
        <h1>Our Services</h1>
            <Row>
                {ExerciseJson.Exercise.map((pro)=>(
                  <Col key={pro.id}>
                  <Card style={{ width: '18rem' }} className='s_card'>
                      <Card.Img variant="top" src={pro.main_image} className='serviceImg' />
                      <Card.Body>
                        <Card.Title className='text-capitalize text-center'>{pro.title}</Card.Title>
                       
                        <Link to={`subservice/${pro.id
                        }`}>
                        <Button variant="primary">Go To Exercises </Button>
                        </Link>
                        </Card.Body>
                     </Card>
                  </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default Service