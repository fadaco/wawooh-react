import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import { NairaSign } from "../../../config";
import ColorHolder from "../ColorHolder";
import WishlistImg from "../../../assets/svg/wishlistline.svg";
import BespokeTag from "../../../assets/svg/bespoke-tag.svg";
import QuickBuyModal from "../QuickBuyModal";
import CustomModal from "../../ui/CustomModal";
import { numberWithCommas } from "../../../shared/Methods";
import { withRouter } from "react-router-dom";
import "../../../assets/css/Product.css";

const MainDiv = styled.div`
  background-color: white;
  margin-bottom: 15px;
  padding-bottom: 10px;
  .colorHolder {
    position: relative;

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
  .productDetailsParent {
    margin-top: 25px;
    padding: 0px 15px;
    .productDetails {
      display: flex;
      justify-content: space-between;
      p {
        margin: 2px 0px;
      }
    }
  }
  .bold {
    font-weight: bold;
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

  gotoDesigner = (item) => {
    const name = item.designerName.trim().replace(/ /gi, '-');
    this.props.history.push(`/designer/${name}-${item.designerId}`);
  };

  render(props) {
    const item = this.props.data;
    const colorList = item.productColorStyleDTOS || [];

    return (
      <MainDiv>
        <div className="colorHolder" onClick={() => this.onProductSelect()}>
          <ColorHolder imageList={item.productColorStyleDTOS[0].productPictureDTOS} colorList={colorList}/>

          <div className="heartIcon">
            <img src={WishlistImg} alt="WishListImg" />
          </div>
          {
            item.acceptCustomSizes === "Y" && item.bespokeProductDTO
              ? <div className="bespokeIcon">
                <img src={BespokeTag} alt="bespoke-icon" />
                <span className="tooltiptext">Bespoke</span>
              </div> : null
          }
        </div>
        <div className="productDetailsParent">
          <div className="productDetails">
            <div style={{ fontSize: 18 }}>
              <p>{item.name}</p>
              <p style={{ color: "rgb(160, 160, 160)", fontSize: 15 }} onClick={() => this.gotoDesigner(item)}>
                {item.designerName}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 16 }}>
                {NairaSign} <span> {numberWithCommas(item.amount)}</span>
              </p>
            </div>
          </div>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <Button
            label="BUY NOW"
            onClick={this.toggleModal}
            width="100%"
            bgColor="black"
            textColor="white"
          />
        </div>
        <CustomModal
          open={this.state.showModal}
          onClose={this.toggleModal}
          disableBackdropClick={true}
          title="Quick Buy"
        >
          <div>
            <QuickBuyModal />
          </div>
        </CustomModal>

      </MainDiv>
    )
  }
}

export default withRouter(ProductCard);
