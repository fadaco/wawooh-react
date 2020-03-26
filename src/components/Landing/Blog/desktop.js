import React, { Component } from "react";
import styled from "styled-components";
import ArrowLeft from "../../../assets/svg/arrowLeftWeb.svg";
import ArrowRight from "../../../assets/svg/arrowRightWeb.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../BlogCard/desktop";
import { TEST_PRODUCT_IMAGE } from "../../../config";

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
          boxShadow: '-2px 0px 5px -1px rgb(230, 228, 228), -2px 0px 5px -1px rgb(230, 228, 228)'
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

const styles = {
  frequentBlock: {
    padding: "30px 110px"
  },
  // arrow: {
  //   width: "5%",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // ProductList: {
  //   width: "90%"
  // },
  // ArrowParent: {
  //   width: 15,
  //   img: {
  //     width: "100%"
  //   }
  // },
  parentText: {
    textAlign: "center"
  }
};

const H3 = styled.h3`
  ::after {
    content: " ";
    display: block;
    position: absolute;
    height: 1px;
    background: var(--text-color);
    width: 200px;
    left: 0;
    right: 0;
    bottom: -8px;
    margin: 0 auto;
  }
  position: relative;
  color: var(--text-color);
`;

const Parent = styled.div`
  background-color: #b7ffff;
  padding: 15px 0px;
`;

class Blog extends Component {
  render() {
    const settings = {
      slidesToScroll: 1,
      slidesToShow: 4,
      infinite: false,
      speed: 500,
      dotsClass: "slick-dots slick-thumb",
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

    return (
      <Parent>
        <div style={styles.parentText}>
          <H3>WAWOOH'S SPECIAL</H3>
          <p>By, Ipsum Ipsum lorem domitus</p>
        </div>

        <div style={styles.frequentBlock}>
          <div style={styles.ProductList}>
            <Slider {...settings}>
              <div className="item">
                <BlogCard source={TEST_PRODUCT_IMAGE} />
              </div>
              <div className="item">
                <BlogCard source={TEST_PRODUCT_IMAGE} />
              </div>
              <div className="item">
                <BlogCard source={TEST_PRODUCT_IMAGE} />
              </div>
              <div className="item">
                <BlogCard source={TEST_PRODUCT_IMAGE} />
              </div>
              <div className="item">
                <BlogCard source={TEST_PRODUCT_IMAGE} />
              </div>
            </Slider>
          </div>
        </div>
      </Parent>
    );
  }
}

export default Blog;
