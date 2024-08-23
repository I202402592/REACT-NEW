import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import alf1 from './Imagenes/alfombra1.jpg';
import alf2 from './Imagenes/alfombra2.jpg';
import alf3 from './Imagenes/alfombra3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {alf1}
          alt="Alfombra 1"
        />
        <Carousel.Caption>
          <h5>Alfombra l</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {alf2}
          alt= "Alfombra 2"
        />
        <Carousel.Caption>
          <h5>Alfombra 2</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {alf3}
          alt= "Alfombra 3"
          />
          <Carousel.Caption>
            <h5>Alfombra 3</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default DarkVariantExample;