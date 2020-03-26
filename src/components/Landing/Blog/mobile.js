import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../BlogCard/mobile";
import { TEST_PRODUCT_IMAGE } from "../../../config";

const H4 = styled.h4`
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
  }

  position: relative;
  color: var(--text-color);
  margin-bottom: 20px;
  // margin-left: 15px;
`;
const styles = {
  frequentBlock: {
    paddingLeft: 15
  },
  parentText: {
    // textAlign: "center"
    marginLeft: 15,
  },
  item: {
    width: 230,
  }
};

const Parent = styled.div`
  background-color: #B7FFFF;
  padding: 15px 0px;
`

class Blog extends Component {
  render(){
    const settings = {
      slidesToScroll: 1,
      slidesToShow: 4,
      infinite: false,
      speed: 500,
      arrows: false,
      variableWidth: true,
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
      <Parent>
    <div style={styles.parentText}>
      <H4>WAWOOH'S SPECIAL</H4>
      <p>By, Ipsum Ipsum lorem domitus</p>
    </div>

    <div style={styles.frequentBlock}>
      <div>
        <Slider
          {...settings}
        >
          <div className="item"  style={styles.item}>
            <BlogCard source={TEST_PRODUCT_IMAGE}/>
          </div>
          <div className="item" style={styles.item}>
            <BlogCard source={TEST_PRODUCT_IMAGE} />
          </div>
          <div className="item" style={styles.item}>
            <BlogCard source={TEST_PRODUCT_IMAGE} />
          </div>
          <div className="item" style={styles.item}>
            <BlogCard source={TEST_PRODUCT_IMAGE} />
          </div>
          <div className="item" style={styles.item}>
            <BlogCard source={TEST_PRODUCT_IMAGE} />
          </div>
        </Slider>
      </div>
    </div>
  </Parent>
    )
  }
}

export default Blog;