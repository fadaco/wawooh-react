import React, {Component} from 'react';
// import ProductCard from "../products/ProductCard";
import ArrowLeft from "../../../src/assets/svg/arrowLeftWeb.svg";
import ArrowRight from "../../../src/assets/svg/arrowRightWeb.svg";
// import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { NairaSign, TEST_PRODUCT_IMAGE } from "../../config";

const styles = {
  frequentBlock: {
    padding: "20px 110px",
    margin: "0 auto"
  }
};

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{ position: "absolute", top: "50%", zIndex: 300, right: "-45px" }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "white",
            padding: 10,
            boxShadow: '2px 0px 5px -1px rgb(230, 228, 228), 2px 0px 5px -1px rgb(230, 228, 228)'
          }}
        >
          <img
            src={ArrowRight}
            alt="arrow-left"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{ position: "absolute", top: "50%", zIndex: 300, left: "-45px" }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "white",
            padding: 10,
            boxShadow: '2px 0px 5px -1px rgb(230, 228, 228), 2px 0px 5px -1px rgb(230, 228, 228)'
          }}
        >
          <img
            src={ArrowLeft}
            alt="arrow-right"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  }

  class ProductCarousel extends Component{
      render(props){
        const settings = {
            slidesToScroll: 1,
            slidesToShow: 4,
            infinite: false,
            speed: 500,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            arrows: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
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
            <div style={styles.frequentBlock}>
                <Slider {...settings}>
                  {/*<div className="Item">*/}
                    {/*<ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount={NairaSign + `23000`} />*/}
                  {/*</div>*/}
                  {/*<div className="Item">*/}
                    {/*<ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />*/}
                  {/*</div>*/}
                  {/*<div className="Item">*/}
                    {/*<ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />*/}
                  {/*</div>*/}
                  {/*<div className="Item">*/}
                    {/*<ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />*/}
                  {/*</div>*/}
                  {/*<div className="Item">*/}
                    {/*<ProductCard img={TEST_PRODUCT_IMAGE} name="Kaftan" designer="Marcia" amount="23000" />*/}
                  {/*</div>*/}
              </Slider>
            </div>
              
          )
      }
  }
  export default ProductCarousel;