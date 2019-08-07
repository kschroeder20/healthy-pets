import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import Carousel1 from "./store.jpg";
import Carousel2 from "./access.jpg";
import Carousel3 from "./share.jpg";

const PetCarousel = function() {
  return (
    <center>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel1} alt="First slide" />
          <Carousel.Caption>
            <div className="hero">
              <hgroup>
                <h3>Store</h3>
              </hgroup>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel2} alt="Second Slide" />
          <Carousel.Caption>
            <div className="hero">
              <hgroup>
                <h3>Access</h3>
              </hgroup>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Carousel3} alt="Third slide" />
          <Carousel.Caption>
            <div className="hero">
              <hgroup>
                <h3>Share</h3>
              </hgroup>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </center>
  );
};

export default PetCarousel;
