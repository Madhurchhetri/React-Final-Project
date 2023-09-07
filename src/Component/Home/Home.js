import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

import ExerciseJson from "../Gym/Exercise/Exercise.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../Contact/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <>
      <div className="hero">
        <figure className="w-100 banner">
          <img
            src="../../../../assets/banner.gif"
            alt="baner"
            className="w-100"
          />
        </figure>

        <div className="hero_content">
          <h1>Train with us today!</h1>
          <h4 className="text-capitalize fs-2">to be the Champion tomorrow!</h4>
          <p >first training for free</p>
          <Link to={`login`}>
          <Button variant="primary">Connect with us</Button>
          </Link>
        </div>
      </div>

{/*...................... section about................ */}

      
      <div className='abouth-section'>
      <div className=" text-center abouth " >
      <h2 className="py-3 fs-1 text-white">About Us</h2>
       <Container>
            <Row>
                <Col className='abouthImg ' xl={6} md={12} xs={12}>
                    <figure >
                        <img src="../../../../assets/About.webp" alt="about" className='image' data-aos='fade-up' />
                    </figure>
                </Col>
                <Col className='content text-white ' xl={6} md={12} xs={12} >
                    <h2 className='content_h' data-aos='fade-up-right'>EXPERT PERSONAL TRAINING</h2>
                    <p className='content_p' data-aos='fade-up-right'>Doon Fitness Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins. </p>
                   <Link to={`/registration`}>
                    <Button variant="primary">Click to join us</Button>
                    </Link>
                </Col>
            </Row>
    </Container>
    </div>
       
      </div>

      {/* ...............SERVICE section start............ */}

      <section className="trainer py-5" data-aos="zoom-in">
        <Container>
          <Row>
            <h2>fitt pass</h2>
            <p>one membership for all your fitness needs</p>
            {ExerciseJson.Exercise.map((pro) => (
              <Col key={pro.id} xl={4} md={12} xs={12}>
                <div className="service_Section" data-aos='zoom-out'>
                  <div className="serviceImg">
                    <figure>
                      <img src={pro.main_image} alt="service" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="serviceContent">
                    <Link to={`/service/subservice/${pro.id}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ...............END SERVICE section............ */}

      {/* ...............GALLERY section start............ */}
      
      <section className="trainer" data-aos="fade-up">
        <Container>
          <Row>
            <h2>Dedication In Your self</h2>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery1.avif"
                  alt="gallery1"
                  className="galleryImg"
                  
                />
              </figure>
            </Col>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery2.avif"
                  alt="gallery2"
                  className="galleryImg"
                  
                />
              </figure>
            </Col>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery3.avif"
                  alt="gallery3"
                  className="galleryImg"
                  
                />
              </figure>
            </Col>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery4.avif"
                  alt="gallery4"
                  className="galleryImg"
                  
                />
              </figure>
            </Col>
          </Row>
          <Row>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery5.avif"
                  alt="gallery1"
                  className="galleryImg"
                
                />
              </figure>
            </Col>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery6.avif"
                  alt="gallery2"
                  className="galleryImg"
                
                />
              </figure>
            </Col>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery7.avif"
                  alt="gallery3"
                  className="galleryImg"
                  
                />
              </figure>
            </Col>
            <Col xl={3} md={12} xs={12}>
              <figure>
                <img
                  src="../../../../assets/gallery8.avif"
                  alt="gallery4"
                  className="galleryImg"
                  
                />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ...............END GALLERY section .....*/}

      {/* ...............Trainer section start............ */}
      
      <section className="trainer">
        <Container>
          <Row>
          <h2 className="my-5" data-aos="fade-down">OUR TRAINERS</h2>
            <Col>
              <div className="trainer_card mt-5" data-aos="flip-left">
                <div className="img-box">
                  <img src="../../../../assets/abhishek.jpeg" alt="" />
                </div>
                <div className="trainerContent">
                  <div className="detail">
                    <h2>Abhishek Yadav</h2>
                    <Link to={`/abhi`}>
                    <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="trainer_card mt-3" data-aos="flip-right">
                <div className="img-box">
                  <img src="../../../../assets/GuruJi.jpg" alt="" />
                </div>
                <div className="trainerContent">
                  <div className="detail">
                  
                    <h2>Mukesh singh Ghailot</h2>
                    <Link to={`/guru`}>
                    <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="trainer_card mt-5" data-aos="flip-left">
                <div className="img-box">
                  <img src="../../../../assets/aliBilal.webp" alt="" />
                </div>
                <div className="trainerContent">
                  <div className="detail">
                    <h2>Ali Bilal</h2>
                    <Link to={`/ali`}>
                    <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trainer">
        <Container fluid>
          <h2>Contact us </h2>
          <iframe
          title="google_map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.416522488256!2d88.4274345!3d22.5752084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1691239675205!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-aos='zoom-in'
          ></iframe>
          <Row>
            <Col className="sendQuery">
              <Contact />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
