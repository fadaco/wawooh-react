import React from "react";
import Styled from "styled-components";
import Verve from "../../../assets/images/verve-card.png";
import Visa from "../../../assets/images/visa-card.png";
import MasterCard from "../../../assets/images/master-card.png";
import Bag from '../../../assets/svg/bag.svg';
import Button from "../../ui/Button";
import {NairaSign} from "../../../config";
import {GET_TOKEN} from '../../../shared/Storage';
import {NavLink} from 'react-router-dom';
import {numberWithCommas} from "../../../shared/Methods";

const CartContainer = Styled.div` 
    background: #f7f7f7;
    padding-top: 15px;
    .mainCartContainer {
       background: var(--white-color);
       padding: 10px 15px;
    }
   .cartContainer {
       display: flex;
       padding: 18px 0;
       border-bottom: 1px solid rgba(0,0,0,.3);
       .rightBar {
            margin-left: 20px;
            width: 100%;
            .priceBar {
                display: flex;
                justify-content: space-between;
                position: relative;
            }
            > div {
                margin: 0px 0 13px 0;
            }  
            .priceName {
                display: flex;
                justify-content: space-between;
                .productName {
                    margin-right: 10px;
                    font-weight: bolder;
                }
            }
            .price {
                color: var(--cart-color);
                font-weight: 700;
                font-size: 16px;
            }
            .cartDetail {
                font-weight: 700;
                color: #686868;
                text-align: center;
                flex: 0 0 50%;
                & div {
                    padding: 0px 2px 0 0;
                }
            }
        }
    }
}
.policy {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 16px;
    padding: 15px;
}
.deleteLabel {
    position: absolute;
    right: 0;
    top: 19px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.4);
    padding: 5px;
    z-index: 1;
    background: #cd9933;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
}
.returnPolicy {
    background: #fff;
    padding: 15px 16px;
    line-height: 0.5;
    font-size: 15px;
}
.totalPrice {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    font-weight: bold;
    font-size: 1.2rem;
}
.checkoutContainer {
    text-align: center;
}
.checkout {
    background: #000000;
    color: #ffffff;
    padding: 16px 100px;
    font-size: 15px;
    margin-bottom: 50px;
}
.productCategory {
    font-size: 13px;
    font-weight: 400;
}
.poweredBy {
    background: #e2e2e2;
    padding: 15px 20px;
}
.poweredBy img {
    margin: 0 10px 10px 0;
    width: 50px
    height: 50px;
    object-fit:contain;
}
.priceTotal {
    text-align: right;
    font-weight: bold;
    margin-top: 10px;
    font-size: 17px;
    color: #333;
}
.priceTotal span {
    margin: 10px;
}
.visa {
    position: relative;
    top: 13px;
}    
 .productInformation {
    display: flex;
}
.bag {
    font-size: 20px;
    font-weight: bold;
}
.divider {
    margin: 0 13px;
}
.empty-cart-not {
    margin: 4em auto;
    text-align: center;
    h5 {
      font-size: .9em;
      font-weight: 400;
      margin: 4px 0;
    }
    h4 {
        color: #888;
        font-size: 1.4rem;
        font-weight: bolder;     
    }
    img {
      width: 70px;
    }
    .img-h {
        background: var(--white-color);
        border-radius: 50%;
        padding: 2rem;
        width: 100px;
        height: 100px;
        margin: auto;
    }
    .btn {
      padding: .6em 4em;
      color: var(--white-color);
      font-weight: bold;
      border: none;
      border-radius: 0;
      text-decoration: none;
    }
    .btn-cart-shop {
        display:flex
        flex-direction: column;
        width: 20%;
        margin: auto;
        background: var(--primary-color);
    }
  }
  .cart-action {
    display: flex;
    justify-content: space-between;
    padding: 0 8px 10px;
  }
`;

const Cart = props => {
    const cart = props.cart;
    return (
        (cart.length > 0) ?
        <CartContainer>
            {/* <Button onClick={props.click} label="Add to Cart" width="60%" /> */}
            <div className="mainCartContainer">
                <div className="bag">My Bag</div>
                {cart.map((item, key) => {
                    return (
                        <div className="cartContainer" key={key}>
                            <div style={{width: '125px'}}>
                                <img style={{width: 'inherit'}} src={item.productPicture} alt={item.productName}/>
                            </div>
                            <div className="rightBar">
                                <div className="priceBar">
                                    <div className="price">{NairaSign}{(item.price) ? numberWithCommas(item.price) : numberWithCommas(item.amount)}</div>
                                    <NavLink to="#" onClick={(e)=> {e.preventDefault(); props.removeCartItem(item.id)}} style={{color:'var(--primary-color)'}} >
                                                <i className="fa fa-trash"></i></NavLink>
                                    {/* <img src={MoreToggle} alt="" onClick={() => props.toggle(key)}/>
                                    {hide === key ?  <label className="deleteLabel">Remove</label> : null} */}
                                </div>
                                <div className="priceName">
                                    <div className="productName"> {item.productName} </div>
                                    <div className="productCategory">
                                        {item.designerName}
                                    </div>
                                </div>
                                <div className="productInformation">
                                    {/* <div className="cartDetail">
                                        <div>Color</div>
                                        <div>{item.productColorStyleDTOS[0].colourName}</div>
                                    </div>*/}
                                    <div className="cartDetail" style={{textAlign:'left'}}>
                                        <div>Size</div>
                                        <div>{item.size}</div>
                                    </div>
                                    <div className="cartDetail" style={{textAlign:'center'}}>
                                        <div>QTY</div>
                                        <div>{item.quantity}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="priceTotal">
                    <span>TOTAL</span>
                    <span>{NairaSign}{numberWithCommas(props.total)}</span>
                </div>
            </div>
            <div className="policy">
                Items placed in this bag are reserved for 60 minutes
            </div>
            <div className="returnPolicy">
                <div> EASY RETURNS</div>
                <p> Items can be returned with 5 days of delivery </p>
                <p> Learn More </p>
            </div>
            <div className="totalPrice">
                <div>TOTAL</div>
                <div>{NairaSign}{numberWithCommas(props.total)}</div>
            </div>
            <div className="divider"><hr/></div>
            <div className="checkoutContainer">
                <NavLink to="/checkout" style={{textDecoration:'none'}}><Button style={{height:'50px'}} bgColor="#000" label="CHECK OUT" width="95%" textColor="#fff"/></NavLink>
            </div>
            <div className="cart-action">
                <Button width="34%" textColor="#fff" style={{margin:'0', height:'40px', letterSpacing:'unset', border:'none'}} bgColor="var(--primary-color)" onClick={props.clearCart} label="Empty Cart?"/>
                <Button width="45%" style={{margin:'0',height:'40px'}}><NavLink to="/" style={{textDecoration:'none', color:'#000'}}>Continue Shopping</NavLink></Button>
            </div>
            <div className="poweredBy">
                <h4 style={{margin:'0', fontSize:'1rem'}}> WE ACCEPT:</h4>
                <img src={MasterCard} alt={'mastercard'}/>
                <img src={Visa} alt={'visacard'}/>
                <img src={Verve} alt={'verve'}/>
            </div>
        </CartContainer>
        :
        <CartContainer>
            <div className='empty-cart-not alert text-center'>
                <div className="img-h">
                    <img src={Bag} alt={'empty-cart'}/>
                </div>
                <h4>Your Bag is empty!</h4>
                {GET_TOKEN('token') ? '' : <h5>You can <NavLink to="/login"><u>login</u></NavLink> to see your items</h5>}
                <NavLink to="/" className='btn btn-cart-shop'>Shop Now</NavLink>
            </div>
        </CartContainer>
    );
};

export default Cart;
