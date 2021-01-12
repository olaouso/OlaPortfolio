import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.JPG";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";

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
                <br/>Programs management experience for more than four years at the seniority level in the humanitarian work sector, occupying positions as a senior program officer in two sectors, programs consultant, then as a senior finance officer, gave me the chance of managing about 18 projects, working with more than 11 donors and managing more than 15 teams both ways remotely and in-person, in addition to developing SoPs and managerial tools to implement the projects in an efficient and effective way. I believe in teamwork and know that it is a magical recipe to achieve miracles and seek to find a challenging work opportunity where I can share my experience, enrich it, and participate to add a positive impact on people's lives. As well as being Re: Coded alumni I have a good experience in front-end web development and familiar with Re: Coded Bootcamps work flow.
                <br/> <br/>
                {/* <Col className="d-flex justify-content-center flex-wrap">
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
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
