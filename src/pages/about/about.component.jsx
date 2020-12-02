import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.JPG";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Ola Ouso</strong>
                <br/>
Front-End web developer has a passion for coding and building web apps and websites using React JS, JavaScript, CSS and HTML. Being a part of Re: Coded front-end development Bootcamp for the last five months equipped me with coding experience and tools besides soft skills allows me to overcome any obstacles in this field.
Throughout my journey of working for more than four years for a Syrian NGO as a Senior Program Officer in two sectors then as a Senior Finance officer for four sectors gave me the chance of working with more than 11 donors and manage more than 20 teams both ways remotely and in-person by this I gained the experience of being a good team player who manages the work under different policies in different circumstances with people from variant backgrounds, besides the managerial skills, this experience provides me with the resilience to manage the projects from different perspectives as a project manager then as a finance officer in different sectors. 
Through my work and study, I always believed in teamwork and realized that it is the magical recipe to achieve miracles, more than that, I realized that sharing my experience and learning from other's experience ensured me and the teams I worked with the continued development at all level and the high quality and productivity where the whole team can reap the fruits of success.
In the last three years, I accomplished an MBA at the university of south wales besides my work, this experience to manage my time between full-time work and study enhanced my ability of time management and maintained my concentration and productivity under pressures or mental stress.

                <br/> <br/>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/drive/folders/1w1r_b4JYKvcVFTUYCVCxx9-CujiA7OxB?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/olaouso" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ola-ouso-78554845/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
