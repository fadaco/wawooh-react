import React from "react";
import EmailIcon from "../../../assets/dev/img/email.png";
import LaundryIcon from "../../../assets/dev/img/laundry.png";
import UserIcon from "../../../assets/dev/img/user.png";
import styled from "styled-components";
import Button from "../../ui/Button";
import { NairaSign } from "../../../config";
// import ProductCarousel from "../../ProductCarousel";
import Customize from "../../../assets/dev/img/customize.svg";
import ColorHolder from "../ColorHolder";
import Select from "../../ui/SelectField";
import { connect } from "react-redux";
import { setDetailsValue, onColorSelect } from "../../../store/actions/ProductDetailsAction";
import { addToCart } from '../../../store/actions/CartAction';
import { NavLink, withRouter } from 'react-router-dom';
import { LOGGER, numberWithCommas, TO_UPPERCASE } from "../../../shared/Methods";

const INFO = styled.div`
  padding: 0 10px;
  .designer {
    text-transform: capitalize;
    color: grey;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 2px;
  }
  .sizeLink{
    font-size: 12px;
    font-weight: bold;
    color: black
}
`;
const DESC = styled.div`
  .flex {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 10px;
  }
`;

// const PREVIOUS = styled.div`
//
// `;
//
// const RECENTLY = styled.div`
//   background-color: rgb(204,153,51,0.04);
//   padding-top: 15px;
//   margin-bottom: 15px;
//
// `;

class MobileDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        errorMessage: '',
    }
} 
cart = () => {
  this.setErrorMessage('');
  if (!this.props.selectedSize.id) {
      this.setErrorMessage('Pick a size');
      return;
  }
  const body = this.setBody();
  this.props.addToCart(body, this.props.history);
}

setErrorMessage(message) {
  this.setState({
      ...this.state,
      errorMessage: message
  });
}

setBody() {
  const item = this.props.data;
  return {
      amount: item.amount,
      artWorkPictureId: null,
      designerId: item.designerId,
      designerName: item.designerName,
      productColorStyleId: this.props.colorStyleDTO.id,
      productId: item.id,
      productSizeId: this.props.selectedSize.id,
      quantity: "1",
      slashedPrice: item.slashedPrice,
      size: this.props.selectedSize.name,
  };
}

onSelectChange = (ev) => {
  const size = this.props.sizeList.filter((item) => {
    return item.name === ev.target.value;
  });
  this.props.setDetailsValue('selectedSize', size[0]);
}
  render(){
    const product = this.props.data;
    const colorList = product.productColorStyleDTOS || [];
    LOGGER('MobileDetails props', this.props);

    const sizeNames = () => {
      const list = [];
      for (let item of this.props.sizeList) {
        list.push(item.name);
      }
      return list;
    }

    const onDesignerClick = () => {
      const name = product.designerName.trim().replace(/ /gi, '-');
      this.props.history.push(`/designer/${name}-${product.designerId}`);
    };

    const _customize = () => {
      this.props.history.push(`/customize/${product.id}`);
    }
    return (
      <div style={{ backgroundColor: "white", paddingBottom: 10, padding: 6 }}>
        <INFO>
          <div>
            <ColorHolder colorList={colorList} imageList={this.props.imageList} />
          </div>
          <div style={{marginTop: '15px'}}>
            <p>{product.name}</p>
            <p className="designer" style={{cursor: 'pointer'}} onClick={() => onDesignerClick()}>{TO_UPPERCASE(product.designerName)}</p>
          </div>
          <br />
          <div className="flex">
            <div>
              {
                product.slashedPrice > 0
                  ? <span>
                    {NairaSign} {numberWithCommas(product.slashedPrice)}&nbsp;
                    <del style={{ color: 'red', fontSize: 14 }}> {NairaSign} {numberWithCommas(product.amount)}</del>
                  </span>
                  : <span>{NairaSign} {numberWithCommas(product.amount)}</span>
              }
            </div>
            {
              product.acceptCustomSizes === 'Y' && product.bespokeProductDTO
              ? <div>
                  <Button onClick={() => _customize()} label={""} width="auto" height="auto" style={{ padding: 5 }}>
                    <div>
                      <img src={Customize} alt="scissors" /> CUSTOMIZE
                    </div>
                  </Button>
                </div>
              : null
            }
            
          </div>
          <br />
          <div>
            <Select
              value={this.props.selectedSize.name}
              onChange={this.onSelectChange}
              defaultValue=""
              options={sizeNames()}
              forLabel="SizeId"
              labelTitle="Size"
              forName="Size"
              formId="SizeId"
              formHeight="45px"
              bgColor="white"
              marginTop="10px"
              placeholder="Select Size..."
              selectPadding="3px 0 3px 5px"  
              labelMarginTop="10px"
             />
          </div>
          <p className="size-guide"><NavLink to="/size-chart" className="sizeLink">Size Chart</NavLink></p>
          <div>
          <div style={{fontSize: 12, color: 'red'}}>{this.state.errorMessage}</div>
            <Button
              textColor="white"
              bgColor="var(--dark-color)"
              label="ADD TO BAG"
              onClick={this.cart}
            />
          </div>
        </INFO>
        <DESC style={{ padding: '0 10px' }}>
          <div style={{marginBottom: 40}}>
            <h3 style={{marginBottom: 0}}>DESCRIPTION</h3>
            <p dangerouslySetInnerHTML={{ __html: product.description }} style={{ textAlign: "justify", marginTop: 0}} />
          </div>
          <div>
            <h3 style={{marginBottom: 0}}>DETAILS</h3>
            <div className="flex">
              <div className="icon">
                <img src={EmailIcon} alt="Email Icon" />
              </div>
              <div>
                <p><strong>SKU: </strong>{product.sku}</p>
              </div>
            </div>
            <div className="flex">
              <div className="icon">
                <img src={LaundryIcon} alt="Laundry Icon" />
              </div>
              <div>
                <p>
                  {product.prodSummary}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="icon">
                <img src={UserIcon} alt="User Icon" />
              </div>
              <div>
                <p>Question about fit? Email care@wawooh.com</p>
              </div>
            </div>
          </div>
        </DESC>
        {/*<PREVIOUS>*/}
        {/*<h3>PREVIOUS BUYERS ALSO BOUGHT</h3>*/}
  
        {/*<div>*/}
        {/*<ProductCarousel />*/}
        {/*</div>*/}
        {/*</PREVIOUS>*/}
  
        {/*<RECENTLY>*/}
        {/*<h3>RECENTLY VIEWED BY YOU</h3>*/}
  
        {/*<div>*/}
        {/*<ProductCarousel />*/}
        {/*</div>*/}
        {/*</RECENTLY>*/}
      </div>
    )
  }
}

const mapStateToProps = state => state.productDetails;

const stateActions = {
  onColorSelect,
  setDetailsValue,
  addToCart
};
export default connect(mapStateToProps, stateActions)(withRouter(MobileDetails));
