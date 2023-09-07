import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const ALiBilal = () => {
  return (
    <div className="pro-trainer">
    <Container className="pros">
      <Row>
        <Col>
          <figure>
            <img
              src="../../../../../assets/AliBilal2.jpg"
              alt="guruji"
              className=" img-fluid guruji"
            />
          </figure>
        </Col>
        <Col>
          <table class="table">
           
            <tbody>
              <tr>
                <th scope="row" className="first">Full Name</th>
                <td className="first">: Ali Bilal Fakir</td>
              </tr>
              <tr>
                <th scope="row" className="second">Nickname </th>
                <td className="second">: Ali Bilal</td>
                
              </tr>
              <tr>
                <th scope="row" className="first">Gender</th>
                <td colspan="2" className="first">: Male</td>
                
              </tr>
              <tr>
                <th scope="row" className="second">Date of Birth</th>
                <td colspan="2" className="second">: 1997</td>
                
              </tr>
              <tr>
                <th scope="row" className="first">Age</th>
                <td colspan="2" className="first">: 25 years as of 2023</td>
                
              </tr>
              <tr>
                <th scope="row" className="second">Birthplace</th>
                <td colspan="2" className="second">: Afghanistan</td>
                
              </tr>
              <tr>
                <th scope="row" className="first">Profession</th>
                <td colspan="2" className="first">: Professional bodybuilder, Gym Trainer </td>
                
              </tr>
              <tr>
                <th scope="row" className="second">Hometown</th>
                <td colspan="2" className="second">: Afghanistan</td>
                
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default ALiBilal