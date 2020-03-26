import React from "react";
import EmailIcon from "../../../assets/dev/img/email.png";
import LaundryIcon from '../../../assets/dev/img/laundry.png';
import UserIcon from '../../../assets/dev/img/user.png';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Image from 'react-shimmer';
import WishlistImg from "../../../assets/svg/wishlistline.svg";
// import ProductCarousel from '../../ProductCarousel';
import { NairaSign } from "../../../config";
import {
    COLOR_PICTURE,
    LOGGER,
    numberWithCommas,
    SNIPPET_PICTURE,
    TO_UPPERCASE
} from "../../../shared/Methods";
import { connect } from "react-redux";
import { setDetailsValue, onColorSelect } from "../../../store/actions/ProductDetailsAction";
import Skeleton from "react-loading-skeleton";
import Magnifier from "react-magnifier";
import { NavLink, withRouter } from 'react-router-dom';
import { addToCart } from '../../../store/actions/CartAction';
import { addToWishlist } from "../../../store/actions/UserAction";


const DESC = styled.div`
  display: flex;
  padding: 10px 90px;
  .flex-child {
      width: 50%;
      padding: 60px;
    }
    .flex {
        display: flex;
        align-items: center;
    }
    .icon {
        margin-right: 10px
    }
    `;

const INFO = styled.div`
display: flex;
padding: 40px;
.snippet {
    width: 7%;
    display: flex;
    flex-direction: column;
    height: 400px;
    padding: 0 10px;
    div {
        height: 70px;
        padding: 5px;
        margin-bottom: 10px;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .Product-Info{
    width: 93%;
    display: flex;
  }
  .Colors{
    display: flex;
    align-items: center;
  }
  .sizes{
      display: flex;
      div {
      padding: 5px 9px;
      background-color: #f1efef;
      margin-right: 5px;
      border-radius: 3px;
      p{
        margin: 0;
      }
    }
  }
  .cart-button{
    display: flex;

    .CartButton{
      width: 80%
    }
  }
  .addWishlist{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor:pointer;
    }
    div{
        padding: 10px 12px;
        border-radius: 50%;
        background-color: #f3f3f3;
    }
  }
  .ProductImg{
    width: 50%;
    height: 400px;
    padding: 10px;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .Product-Desc{
    width: 50%;
    padding: 10px
  }
  .sizeLink{
    font-size: 12px;
    font-weight: bold;
    color: black
  }
`;

// const PREVIOUS = styled.div`
//   h3{
//     text-align: center;
//   }
// `;

// const RECENTLY = styled.div`
//   background-color: rgb(204,153,51,0.04);
//   padding-top: 15px;
//   margin-bottom: 15px;
//   h3{
//     text-align: center;

//   }
// `;

const imageStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '50%'
};

const divStyle = {
    width: '25px',
    height: '25px',
    backgroundColor: 'whitesmoke',
    borderRadius: '50%',
    marginRight: '5px',
    cursor: 'pointer',
};

class DesktopDetails extends React.Component {
    constructor(props) {
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

    addItemToWishList = (id) => {
        // console.log(id);
        // this.props.addToWishlist(id, this.props.history);
    }

    setBody() {
        const item = this.props.data;
        console.log(item);
        return {
            amount: item.slashedPrice > 0 ? item.slashedPrice : item.amount,
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

    render() {
        const product = this.props.data;
        const colorList = product.productColorStyleDTOS || [];
        LOGGER('props.selectedSize', this.props);

        const onDesignerClick = () => {
            const name = product.designerName.trim().replace(/ /gi, '-');
            this.props.history.push(`/designer/${name}-${product.designerId}`);
        };

        const _customize = () => {
            this.props.history.push(`/customize/${product.id}`);
        }
        return (

            <div style={{ backgroundColor: 'white', paddingBottom: 10 }}>
                <INFO>
                    <div className='snippet'>
                        {
                            this.props.imageList.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => this.props.setDetailsValue('focusedImage', item)}
                                    style={{ borderRadius: 2 }}
                                    className={item.id === this.props.focusedImage.id ? 'selected-size' : null}
                                >
                                    <Image
                                        src={SNIPPET_PICTURE(item.picture)}
                                        alt={this.props.name}
                                        height={70}
                                        style={{ objectFit: 'contain' }}
                                        fallback={<Skeleton width={'100%'} height={70} />}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="Product-Info">
                        <div className="ProductImg">
                            {/* <Image
                                src={THUMBNAIL_PRODUCT(props.focusedImage.picture)}
                                alt={props.name}
                                height={400}
                                style={{margin: '0 auto'}}
                                fallback={
                                    <div style={{width: '50%', display: 'block', margin: '0 auto'}}>
                                        <Skeleton width={'100%'} height={400}/>
                                    </div>
                                }
                            /> */}
                            <div style={{ width: '50%', display: 'block', margin: '0 auto' }}>
                                <Magnifier width={'100%'} src={this.props.focusedImage.picture} height={400} />
                            </div>
                        </div>

                        <div className="Product-Desc">
                            <p>{product.name}</p>
                            <h5 style={{ cursor: 'pointer' }} onClick={() => onDesignerClick()}>{TO_UPPERCASE(product.designerName)}</h5>
                            <hr />
                            <div>
                                {
                                    product.slashedPrice > 0
                                        ? <span>
                                            {NairaSign} {numberWithCommas(product.slashedPrice)}&nbsp;
                                            <del style={{ color: 'red', fontSize: 14 }}> {NairaSign} {numberWithCommas(product.amount)}</del>
                                        </span>
                                        : <span>{NairaSign} {numberWithCommas(product.amount)}</span>
                                }

                                <div style={{ marginTop: 10, marginBottom: 5, fontSize: 12 }}>
                                    {this.props.colorStyleDTO.colourName}
                                </div>

                                <div className="Colors">
                                    {
                                        colorList.map((item) => (
                                            <div
                                                key={item.id}
                                                style={{ ...divStyle }}
                                                className={item.id === this.props.colorStyleDTO.id ? 'selected-color' : null}
                                                onClick={() => this.props.onColorSelect(item)}
                                            >
                                                <img
                                                    src={COLOR_PICTURE(item.colourPicture)}
                                                    style={imageStyle}
                                                    alt={''} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div style={{ fontSize: 14, marginBottom: 5 }}>Select a size</div>
                                <div className="sizes">
                                    {
                                        this.props.sizeList.length > 0 ?
                                            this.props.sizeList.map((item) => (
                                                <div
                                                    key={item.id}
                                                    style={{ cursor: 'pointer' }}
                                                    className={item.id === this.props.selectedSize.id ? 'selected-size' : null}
                                                    onClick={() => this.props.setDetailsValue('selectedSize', item)}
                                                >
                                                    <p style={{ fontSize: 14 }}>{item.name}</p>
                                                </div>
                                            )) : null
                                    }
                                </div>
                            </div>
                            <p className="size-guide"><NavLink to="/size-chart" className="sizeLink">Size Chart</NavLink></p>

                            <div className="cart-button">
                                <div className="CartButton">
                                    <div style={{ fontSize: 12, color: 'red' }}>{this.state.errorMessage}</div>
                                    <Button
                                        label="ADD TO BAG"
                                        bgColor="black"
                                        textColor="white"
                                        width="100%"
                                        onClick={this.cart}
                                    />
                                </div>
                                <div className="addWishlist">
                                    <div>
                                        <img onClick={this.addItemToWishList(product.id)} src={WishlistImg} alt="wishlistImg" />
                                    </div>
                                </div>
                            </div>
                            <div style={{width: '80%'}}>
                                {
                                    product.acceptCustomSizes === 'Y' && product.bespokeProductDTO
                                        ? <div>
                                            <Button onClick={() => _customize()} label="CUSTOMIZE" width="auto" style={{ padding: '5px', height:"30px"}} />
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </INFO>
                <DESC>
                    <div className="flex-child">
                        <h5>DESCRIPTION</h5>
                        <p
                            dangerouslySetInnerHTML={{ __html: product.description }}
                            style={{ textAlign: 'justify' }}
                        />
                    </div>
                    <div className="flex-child">
                        <h5>DETAILS</h5>
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
                                <p>{product.prodSummary}</p>
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
            </div>
        )
    }
}

// {/*<PREVIOUS>*/}
//   {/*<h3>PREVIOUS BUYERS ALSO BOUGHT</h3>*/}
//   {/**/}
//   {/*<div>*/}
//     {/*<ProductCarousel />*/}
//   {/*</div>*/}
// {/*</PREVIOUS>*/}
// {/*<RECENTLY>*/}
//   {/*<h3>RECENTLY VIEWED BY YOU</h3>*/}
//   {/**/}
//   {/*<div>*/}
//     {/*<ProductCarousel />*/}
//   {/*</div>*/}
// {/*</RECENTLY>*/}
//   </div>
// );

const mapStateToProps = state => ({
    ...state.productDetails,
    ...state.user
});

const stateActions = {
    onColorSelect,
    setDetailsValue,
    addToCart,
    addToWishlist
};

export default connect(mapStateToProps, stateActions)(withRouter(DesktopDetails));
