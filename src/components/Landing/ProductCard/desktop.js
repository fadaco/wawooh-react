import React, { Component } from "react";
import styled from "styled-components";
import WishlistImg from "../../../assets/svg/wishlistline.svg";
import Button from "../../ui/Button";
import QuickBuyModal from "../../products/QuickBuyModal";
import CustomModal from "../../ui/CustomModal";
import { NairaSign } from "../../../config";
import { THUMBNAIL_PRODUCT, numberWithCommas } from "../../../shared/Methods";
import { withRouter } from 'react-router-dom';

const Card = styled.div`
  margin: 5px;
  display: flex;
  height: 395px;
  flex-direction: column;
  :focus {
    outline: none;
  }

  .ProductImage {
    height: 83%;
    position: relative;
    .productOverlay {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .heartIcon {
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 10;
      border-radius: 50%;
      background-color: white;
      height: 18px;
      width: 18px;
      padding: 8px;
      box-sizing: content-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .detailsParent {
    height: 17%;
    overflow: hidden;
    .productDetails {
      margin-top: 5px;
      padding: 8px;
      display: flex;
      justify-content: space-between;
      background: white;
      padding: 0 10px;
    }
    p {
      margin: 3px 0px;
    }
  }
  .bold {
    font-weight: bold;
  }
  .productOverlay {
    position: relative;
  }
  // .productOverlay:hover .imageOverlay{
  //     opacity: 0.3;
  // }
  .productOverlay:hover .overlay {
    opacity: 1;
  }
  .imageOverlay {
    opacity: 1;
    display: block;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .overlay {
    transition: 0.5s ease;
    background-color: rgb(0, 0, 0, 0.15);
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;

    div {
      text-align: center;
      position: absolute;
      bottom: 5%;
      left: 50%;
      cursor: pointer;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  }
`;

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Card onClick={() => this.props.history.push('/product')}>
        <div className="ProductImage">
          <div className="productOverlay">
            <img
              src={THUMBNAIL_PRODUCT(this.props.img)}
              alt={this.props.name}
              className="imageOverlay"
            />
            <div className="overlay">
              <Button
                label="BUY NOW"
                bgColor="white"
                textColor="#cd9933"
                borderColor="white"
                onClick={this.toggleModal}
                width="170px"
                height="35px"
              />
            </div>
          </div>
          <div className="heartIcon">
            <img src={WishlistImg} alt="WishListImg" />
          </div>
        </div>

        <div className="detailsParent">
          <div className="productDetails">
            <div>
              <p className="bold" style={{ fontSize: 12 }}>
                {this.props.name}
              </p>
              <p style={{ fontSize: 12 }}>{this.props.designer}</p>
            </div>
            <div>
              <p className="bold" style={{ fontSize: 12 }}>
                {NairaSign} <span> {numberWithCommas(this.props.amount)}</span>
              </p>
            </div>
          </div>
        </div>
        <CustomModal
          open={this.state.showModal}
          onClose={this.toggleModal}
          disableBackdropClick={true}
          title = "Quick Buy"
        >
          <div>
            <QuickBuyModal />
          </div>
        </CustomModal>
        
      </Card>
    );
  }
}
export default withRouter(ProductCard);
