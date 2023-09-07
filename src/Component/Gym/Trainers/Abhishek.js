import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Trainer.css'

const Abhishek = () => {
  return (
    <div className="pro-trainer">
      <Container className="pros">
        <Row>
          <Col>
            <figure>
              <img
                src="../../../../../assets/Abhishek-yadav.jpg"
                alt="abhishek"
                className=" img-fluid"
              />
            </figure>
          </Col>
          <Col>
            <table class="table">
             
              <tbody>
                <tr>
                  <th scope="row" className="first">Full Name</th>
                  <td className="first">: Abhishek yadav</td>
                </tr>
                <tr>
                  <th scope="row" className="second">Nickname </th>
                  <td className="second">: abhishek</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="first">Gender</th>
                  <td colspan="2" className="first">: Male</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="second">Date of Birth</th>
                  <td colspan="2" className="second">: 6th June 1997</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="first">Age</th>
                  <td colspan="2" className="first">: 25 years as of 2023</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="second">Birthplace</th>
                  <td colspan="2" className="second">: New Delhi, India</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="first">Profession</th>
                  <td colspan="2" className="first">: Professional bodybuilder,Youtuber and Fitness influencer</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="second">Hometown</th>
                  <td colspan="2" className="second">: New Delhi, India</td>
                  
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Abhishek;
