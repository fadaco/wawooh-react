import React, {Component} from 'react'
import ProductCard from "../products/ProductCard";
// import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TEST_PRODUCT_IMAGE} from "../../config";

class ProductCarousel extends Component {

    render(props){
        const settings = {
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: false,
            speed: 500,
            variableWidth: true,
            arrows: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
    
        return(
            <div>
               <Slider {...settings}>
                  <div className="Item">
                    <ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />
                  </div>
                  <div className="Item">
                    <ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />
                  </div>
                  <div className="Item">
                    <ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />
                  </div>
                  <div className="Item">
                    <ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />
                  </div>
               </Slider> 
            </div>
        )
    }
}

export default ProductCarousel;