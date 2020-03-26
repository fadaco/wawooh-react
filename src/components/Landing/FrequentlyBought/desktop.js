import React, { Component } from "react";
// import ProductCards from "../ProductCard";
import ProductCards from "../../products/ProductCard";
import ArrowLeft from "../../../assets/svg/arrowLeftWeb.svg";
import ArrowRight from "../../../assets/svg/arrowRightWeb.svg";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const H3 = styled.h3`
  ::after {
    content: " ";
    display: block;
    position: absolute;
    height: 1px;
    background: var(--text-color);
    width: 150px;
    left: 0;
    right: 0;
    bottom: -8px;
    margin: 0 auto;
  }
  position: relative;
  color: var(--text-color);
  text-align: center;
  padding-top: 30px;
`;

const DIV = styled.div`
  .item:focus{
    outline: none;
  }
`;
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

class FrequentlyBought extends Component {
  render() {
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

    const dataList = this.props.list || [];

    if (dataList.length < 1) {
      return <div></div>
    }

    return (
      <DIV
        style={{ backgroundColor: "rgb(204,153,51,0.04)", marginTop: "60px" }}
      >
        <H3>FREQUENTLY BOUGHT</H3>

        <div style={styles.frequentBlock}>
          <div style={styles.ProductList}>
            <Slider {...settings}>
              {
                dataList.map((item) => (
                  <div key={item.id} className="item">
                    <ProductCards
                      data={item}
                    />
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </DIV>
    );
  }
}
export default FrequentlyBought;
