import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { connect } from "react-redux";
import { LOGO_IMAGES } from "../../../shared/Methods";

const styles = {
    parentDiv: {
        textAlign: 'center',
        margin: '0px 60px',
        marginBottom: '50px',
        outline: 'none',
    },
    designerChild: {
        padding: '10px 40px',
        height: 150,
        img: {
            width: '70%',
            height: '70%',
            objectFit: 'contain',
            // filter: 'grayscale(100%)'
        }
    }
};

const H3 = styled.h3`
    ::after{
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
`;


class DesignerBrand extends Component{

    render(){
        const settings = {
            slidesToScroll: 1,
            slidesToShow: 5,
            infinite: true,
            speed: 500,
            autoplay: true,
            arrow: false,
            autoplaySpeed: 2000,
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
            <div style={styles.parentDiv}>
        <H3>OUR TOP DESIGNER</H3>

        <Slider {...settings}>
            {
                this.props.logoList.map((item) => (
                    <div
                        className="item"
                        key={item.designerId}
                        style={{cursor: 'pointer'}}
                        onClick={() => this.props.gotoDesigner(item)}
                    >
                        <div style={styles.designerChild}>
                            <img src={LOGO_IMAGES(item.designerLogo)} alt={item.designerName} style={styles.designerChild.img} />
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div >
        )
    }
}

const mapStateToProps = state => state.designer;

export default connect(mapStateToProps)(DesignerBrand);
