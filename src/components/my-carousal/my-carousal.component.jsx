import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img src={Slide2} width="100%" height="1100px" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img  src={Slide3} width="100%" height="1100px" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide1} width="100%" height="1100px" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
