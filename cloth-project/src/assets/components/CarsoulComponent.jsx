import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carsoulcomponent.css';
import Slide1 from '../img/img1.png'
import Slide2 from '../img/img1.png'
import Slide3 from '../img/img1.png'

export default function CarsoulComponent() {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
