import React from 'react';
import Styled from 'styled-components';
import Verve from '../../../assets/images/verve-card.png';
import Visa from '../../../assets/images/visa-card.png';
import Bag from '../../../assets/svg/bag.svg';
import MasterCard from '../../../assets/images/master-card.png';
import {NavLink} from 'react-router-dom';
import {GET_TOKEN} from '../../../shared/Storage';
import Button from '../../ui/Button';
import { NairaSign } from '../../../config';
import { numberWithCommas } from '../../../shared/Methods';

const CartContainer = Styled.div`
  display: flex;
  background: #f7f7f7;  
   .bag {
       font-size: 20px;
       font-weight: bold;
    }
    .mainSide {
        width: 58%;
        margin: 10px 20px; 
        .mainInner {
            background: #ffffff;
            padding: 20px;
        }
        .mainCart {
            display: flex;
            border-bottom: 1px solid rgba(0,0,0,.2);
            margin-bottom: 20px;
            padding-bottom:10px;
            &:last-child {
                border-bottom: none;
            }
            .mainContent {
                margin-left: 20px;
                width: 100%;
                .contentDiv {
                    margin: 0 0 10px 0;
                    display: flex;
                    .productDet {
                        font-weight: 700;
                        margin-right: 20px;
                    }
                }
                .flex-1 {
                    flex:0 0 80%;
                }
                .flex-2 {
                    flex:0 0 20%;
                }
                .flex-100 {
                    flex:0 0 100%;
                }
                .cartTotal {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                }
                .btnSave {
                    display: flex;
                    justify-content: space-between;
                }
            }
            .imgHolder {
                height: 150px;
                background: #f9f9f9;
                img {
                    height: 100%;
                    width: 150px;
                    object-fit: contain;
                }
            }
        }
    }
    .leftSide {
        width: 38%;
        margin: 10px 20px;
    }
    .leftSideInner {
        background: #ffffff;
        padding: 20px;
        .subTotal {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
        }
    }
    .price {
        font-weight: 700;
    }
    .bottomImage {
        display: flex;
        img {
            width: 50px
            height: 50px;
            object-fit:contain;
            margin-right: 15px;
        }
    }
    .bottomSide {
        background: #ffffff;
        margin-top:20px;
        padding: 20px;
    }
    .empty-cart-not {
        margin: 6em auto;
        text-align: center;
        height: 100%;
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
          margin-top: 1.2em;
          text-transform: uppercase;
        }
        .btn-cart-shop {
          display: block;
          background: var(--primary-color);
        }
      }
      .cart-action {
        display: flex;
        justify-content: space-between;
      }
`;

const rCart = (props) => {
    const cart = props.cart || [];
    console.log(cart);
    return (
      (cart.length > 0) ?
        <CartContainer>
            <div className="mainSide">
                <div className="mainInner">
                    <div className="bag">My Bags</div>
                    <hr/>
                    {
                        cart.map((item, key) => {
                            return (
                                <div className="mainCart" key={key}>
                                    <div className="imgHolder">
                                        <img src={item.productPicture} alt={item.productName}/>
                                    </div>
                                    <div className="mainContent">
                                        <div className="contentDiv">
                                            <div className="flex-1">
                                                {/* <h4 style={{margin:'0'}}>{NairaSign}{(item.price) ? numberWithCommas(item.price) : numberWithCommas(item.amount)}</h4> */}
                                                <h4 style={{margin:'0'}}>{NairaSign}{(item.slashedPrice > 0 || item.price) ? numberWithCommas(item.slashedPrice) || numberWithCommas(item.price) : numberWithCommas(item.amount)}</h4>
                                            </div>
                                            <div className="flex-2" style={{textAlign:'center'}}>
                                            <NavLink to="#" onClick={(e)=> {e.preventDefault(); props.removeCartItem(item.id, key)}} style={{color:'var(--primary-color)'}} >
                                                <i className="fa fa-trash"></i></NavLink>
                                            </div>
                                        </div>
                                        <div className="contentDiv">
                                            <div className="flex-100"><NavLink to="/"style={{color: '#555',fontWeight:'bold', textDecoration:'none'}}>{item.productName ? item.productName : item.name}</NavLink></div>
                                        </div>
                                        {/*
                                        <div className="contentDiv"><span className="productDet">Color:</span><span>{item.productColorStyleDTOS[0].colourName}</span></div>
                                        */}        
                                        <div className="contentDiv">
                                            <span className="productDet">Size:</span>
                                            <span>{item.size}</span>
                                    </div>

                                        <div className="contentDiv"><span className="productDet">Qty:</span><span>{item.quantity}</span></div>
                                        <div className="btnSave contentDiv">
                                            <div className="flex-1">
                                                <Button width='30%' label="" fontSize="13px" height="32px" style={{padding:'2px 0', margin:'0', border:'1px solid rgba(0,0,0,.2)',letterSpacing:'0', fontWeight:'400'}}><i className="far fa-heart"></i><span style={{paddingLeft:'5px'}}>Save to Wishlist</span></Button>
                                            </div>
                                            <div className="flex-2 cartTotal">
                                                <div>Total</div>
                                                <div className="price">{NairaSign}{(item.slashedPrice > 0 || item.price) ? numberWithCommas(item.slashedPrice) || numberWithCommas(item.price) : numberWithCommas(item.amount)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="bottomSide">
                    <h4 style={{margin:'0 0 10px', fontSize:'1.4rem'}}>We accept</h4>
                    <div className="bottomImage bold">
                        <img src={MasterCard} alt={'mastercard'}/>
                        <img src={Visa} alt={'visacard'}/>
                        <img src={Verve} alt={'verve'}/>
                    </div>
                </div>
            </div>
            
            <div className="leftSide">
                <div className="leftSideInner">
                    <div>Total</div>
                    <hr/>
                    <div className="subTotal priceTotal">
                        <div>Sub Total</div>
                        <div><span style={{fontWeight:'bold'}}>{NairaSign}{numberWithCommas(props.total)}</span></div>
                    </div>
                    <div className="subTotal priceTotal">
                        <div>Delivery</div>
                        <div><i>Shipping not calculated</i></div>
                    </div>
                    <hr/>
                    <div className="subTotal priceTotal">
                        <div className="bold">Total</div>
                        <div><span style={{fontWeight:'bold'}}>{NairaSign}{numberWithCommas(props.total)}</span></div>
                    </div>
                    <div>
                        <NavLink to={'/checkout'} style={{textDecoration:'none'}}><Button label="CHECKOUT" bgColor={'black'}textColor={'white'}/></NavLink>
                    </div>
                    <div className="cart-action">
                        <Button width="27%" textColor="#fff" style={{margin:'0', height:'40px', letterSpacing:'unset', border:'none'}} bgColor="var(--primary-color)" onClick={props.clearCart} label="Empty Cart?"/>
                        <Button width="45%" style={{margin:'0',height:'40px'}}><NavLink to="/" style={{textDecoration:'none', color:'#000'}}>Continue Shopping</NavLink></Button>
                    </div>
                </div>
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
}

export default Cart;