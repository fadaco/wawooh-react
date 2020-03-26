import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const H4 = styled.h4`
    position: relative;
    color: var(--text-color);
    margin-bottom: 20px;
    margin-left: 15px;
    margin-top: 20px;
`

const Parent = styled.div`
background-color: rgb(204,153,51,0.04);
margin-top: 60px;
padding-top: 10px;
.productParent{
    margin-right: 15px;
}
`

class FrequentlyBought extends Component {
    render(){
      const settings = {
        slidesToScroll: 1,
        slidesToShow: 4,
        infinite: false,
        speed: 500,
        variableWidth: true,
        arrows: false,
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

      const dataList = this.props.list || [];

      if (dataList.length < 1) {
        return <div></div>
      }
      
      return(
          <Parent>
              <H4>FREQUENTLY BOUGHT</H4>
              <div>
              <Slider {...settings}>
              {
                dataList.map((item) => (
                  <div className="productParent" key={item.id}>
                      <ProductCard data={item} />
                  </div>
                ))
              }
              </Slider>
          </div>
          </Parent>
      )
    }
}

export default FrequentlyBought; 
