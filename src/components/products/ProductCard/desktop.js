import React from "react";
import styled from "styled-components";
import WishlistImg from "../../../assets/svg/wishlistline.svg";
import BespokeTag from "../../../assets/svg/bespoke-tag.svg";
import Button from "../../ui/Button";
import QuickBuyModal from "../QuickBuyModal";
import CustomModal from "../../ui/CustomModal";
import { NairaSign } from "../../../config";
import { THUMBNAIL_PRODUCT, numberWithCommas } from '../../../shared/Methods';
import { withRouter } from 'react-router-dom'

const Card = styled.div`
  height: 395px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  .button-class {
    position: absolute;
    z-index: 500; 
    right: 0; 
    left: 0;
    top: 139px;
    opacity: 0;
  }
  .ProductImage {
    height: 83%;
    position: relative;
    .productOverlay {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
    .bespokeIcon {
      position: absolute;
      left: 6px;
      top: 6px;
      z-index: 10;
      height: 22px;
      width: 22px;
      padding: 8px;
      box-sizing: content-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bespokeIcon:hover .tooltiptext{
      visibility: visible;
    }
    .tooltiptext{
      position: absolute;
      top: 9px;
      left: 30px;
      background-color: #1c1c1c;
      color: white;
      z-index: 100;
      padding: 2px 5px;
      font-size: 12px;
      visibility: hidden;
    }
  }
  .detailsParent {
    height: 17%;
    overflow: hidden;
    .productDetails {
      margin-top: 5px;
      padding: 0px 10px;
      padding-bottom: 5px;
      display: flex;
      justify-content: space-between;
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
  &:hover .overlay {
    opacity: 1;
  }
  &:hover .button-class {
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
    cursor: pointer;

    div {
      text-align: center;
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  }
`;

class ProductCard extends React.Component {
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

  onProductSelect() {
    const item = this.props.data;
    const itemName = item.name.replace(/ /g, '-');
    this.props.history.push(`/product/${itemName}-${item.id}`);
  }

  onDesignerClick() {
    const item = this.props.data;
    const name = item.designerName.trim().replace(/ /gi, '-');
    this.props.history.push(`/designer/${name}-${item.designerId}`);
  }

  render() {

    return (
      <div>
        <Card>
          <Button
            label="BUY NOW"
            bgColor="white"
            onClick={this.toggleModal}
            textColor="#cd9933"
            borderColor="white"
            width="200px"
            className="button-class"
          />

          <div className="ProductImage">
            <div className="productOverlay">
              <img
                src={THUMBNAIL_PRODUCT(this.props.data.productColorStyleDTOS[0].productPictureDTOS[0].picture)}
                alt={this.props.data.name}
                className="imageOverlay"
              />
              <div className="overlay" onClick={() => this.onProductSelect()} />
            </div>
            <div className="heartIcon">
              <img src={WishlistImg} alt="WishListImg" />
            </div>
            {
              this.props.data.acceptCustomSizes === "Y" && this.props.data.bespokeProductDTO
                ? <div className="bespokeIcon">
                  <img src={BespokeTag} alt="bespoke-icon" />
                  <span className="tooltiptext">Bespoke</span>
                </div> : null
            }
          </div>
          <div className="detailsParent">
            <div className="productDetails">
              <div>
                <p
                  style={{
                    cursor: "pointer",
                    fontSize: 15,
                    height: 19,
                    overflow: "hidden"
                  }}
                >
                  {this.props.data.name}
                </p>
                <p
                  style={{
                    cursor: "pointer",
                    fontSize: 14,
                    color: "grey",
                    height: 19,
                    overflow: "hidden"
                  }}
                  onClick={() => this.onDesignerClick()}
                >
                  {this.props.data.designerName}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 14 }}>
                  {NairaSign}<span>{numberWithCommas(this.props.data.amount)}</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
        <CustomModal
          open={this.state.showModal}
          onClose={this.toggleModal}
          disableBackdropClick={true}
          title="Quick Buy"
        >
          <div>
            <QuickBuyModal data={this.props} />
          </div>
        </CustomModal>
      </div>
    )
  }
}
export default withRouter(ProductCard);
