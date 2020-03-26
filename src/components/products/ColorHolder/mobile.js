import React, {Component}from "react";
import styled from "styled-components";
import ColorSnippet from "../ColorSnippet";
import ArrowLeft from "../../../assets/svg/arrowLeftWeb.svg";
import ArrowRight from "../../../assets/svg/arrowRightWeb.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { THUMBNAIL_PRODUCT } from "../../../shared/Methods";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div 
    onClick={onClick}
    style={{position: 'absolute', top: '50%', zIndex: 300, right: 10,}}>
    <div style={{width: '10px'}}>
      <img src={ArrowRight} alt="arrow-left" style={{width: '100%'}}/>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div 
    onClick={onClick}
    style={{position: 'absolute', top: '50%', zIndex: 300, left: 10,}}>
      <div style={{width: '10px'}}>
        <img src={ArrowLeft} alt="arrow-right" style={{width: '100%'}}/>
      </div>
    </div>

  );
}

const COLOR = styled.div`
  @media (min-width: 500px){
    .imgHolder{
      img{
        object-fit: contain;
      }
    }
  }
  .imgHolder {
    height: 304px;
 
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .flexColorSnippet {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    .ColorSnippet {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: blue;
    }
  }
`;

class Product extends Component {
  render() {
    const settings = () => ({
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      speed: 500,
      nextArrow: <SampleNextArrow className="arrowNext"/>,
      prevArrow: <SamplePrevArrow className="arrowPrev"/>,
      arrows: true,
      
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
    });

    const list = this.props.imageList || [];
    const colors = this.props.colorList || [];

    return (
      <COLOR>
        <Slider {...settings()}>
        {
          list.map((item) => (
            <div key={item.id}>
              <div className="imgHolder">
                <img src={THUMBNAIL_PRODUCT(item.picture)} alt="product-color" />
              </div>
            </div>
          ))
        }
        </Slider>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {
            colors.map((item) => (
              <ColorSnippet key={item.id} backgroundImage={item.colourPicture}/>
            ))
          }
        </div>
      </COLOR>
    );
  }
}

export default Product;
