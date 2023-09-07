import React from "react";
import ExerciseJson from "../Gym/Exercise/Exercise.json";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './SubExercise.css'

const SubExercise = () => {
  let { subId } = useParams();
  let data = ExerciseJson.Exercise.find((pro) => pro.id === subId);
  console.log("data :", data);
  return (
    <>
    
    <div className="subEx"> 
    <h1>WORKOUTS</h1>  
      
      <Container>
      <h5 className="text-center text-light" > Exercise involves engaging in physical activity and increasing the heart rate beyond resting levels. It is an important part of preserving physical and mental health.</h5>
        <Row>

          {data.sub_exercise.map((pro) => (
            <Col key={pro.id}>
                
              <Card style={{ width: "18rem" }} className="mt-3 s_card">
                <Card.Img variant="top" src={pro.image} className="exerimg" />
                <Card.Body>
                  <Card.Title className="text-center">{pro.heading}</Card.Title>
                  <Link to={`single/${pro.sub_id}`}>
                  <Button variant="primary">Go To Detail More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </>
  );
};

export default SubExercise;
