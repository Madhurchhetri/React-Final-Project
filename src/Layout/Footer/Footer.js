import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Footer.css";

const Footer = () => {
  return (
    // <footer>
    //   <Container>
    //     <Row>
    //       <Col>at cult.fit, we make group workout fun, daily food healthy and tasty,mental fitness easy yoga  and meditation,medical life style care hassle- free #beBetterEveryDay</Col>
    //       <Col>
    //         <ul>
    //           <li>cult.fit for business</li>
    //           <li>cult.fit franchise</li>
    //           <li>Corporate partnership</li>
    //           <li>cult pass network</li>
    //           <li>t&c for business</li>
    //         </ul>
    //       </Col>
    //       <Col>
    //         <ul>
    //           <li>partner fit</li>
    //           <li>security</li>
    //           <li>blogs</li>
    //           <li>carrers</li>
    //         </ul>
    //       </Col>
    //       <Col>
    //         <ul>
    //           <li>contact us </li>
    //           <li>privacy policy</li>
    //           <li>cult bmi calculator</li>
    //           <li>term and conditions</li>
    //         </ul>
    //       </Col>
    //       <Col>
    //         <ul>
    //           <li><i className="fa-brands fa-facebook"></i></li>
    //           <li><i className="fa-brands fa-instagram"></i></li>
    //           <li><i className="fa-brands fa-square-twitter"></i></li>
    //           <li><i className="fa-brands fa-youtube"></i></li>
    //           <li><i className="fa-brands fa-linkedin"></i></li>
    //         </ul>
    //       </Col>
    //     </Row>
    //   </Container>
    //   </footer>
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <div className="fotter_part">
      <ul className="business">
        <li>cult.fit for business</li>
        <li>cult.fit franchise</li>
        <li>Corporate partnership</li>
        <li>cult pass network</li>
        <li>t&c for business</li>
      </ul>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Services
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Team
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      </div>
      <p>&copy;2021 Doon Fitness | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
