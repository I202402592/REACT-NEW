import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import tienda1 from './Imagenes/tienda1.jpg';
import tienda2 from './Imagenes/tienda2.jpg';
import tienda3 from './Imagenes/tienda3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {tienda1}
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
          src= {tienda2}
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
          src= {tienda3}
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