import React from 'react'
import { useParams } from 'react-router-dom'
import ExerrciseJson from '../Gym/Exercise/Exercise.json'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './SingleData.css'

const SingleExercise = () => {
    let {subId,sgId}=useParams();
    let data= ExerrciseJson.Exercise.find((pro)=>pro.id===subId)
    let singleData=data.sub_exercise.find((pro)=>pro.sub_id===sgId)
    console.log("singleData :",singleData);
  return (
    <div className='single'>
        <Container>
            <Row>
                <Col key={singleData.sub_id}>
                    <figure>
                        <img src={singleData.image} className='img-fluid simg'/>
                        
                    </figure>
                </Col>
                <Col>
                    <h2>{singleData.heading}</h2>
                    <p>{singleData.desc}</p>
                    <p>{singleData.perform}</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SingleExercise