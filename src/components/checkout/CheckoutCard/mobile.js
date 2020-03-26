import React from "react";
import Styled from "styled-components";
import Button from "../../ui/Button";
import { numberWithCommas, LOGGER } from "../../../shared/Methods";
import { NairaSign } from "../../../config";
import styled from 'styled-components';
import Verve from "../../../assets/images/verve-card.png";
import Visa from "../../../assets/images/visa-card.png";
import MasterCard from "../../../assets/images/master-card.png";

const CheckoutMobileContainer = Styled.div`

.productDetailCard {
    background-color: var(--white-color);
    margin: 10px 12px;
    padding: 10px;
    .myBag {
        font-weight: bold;
    }
    .productDetail {
        display: flex;
        justify-content: space-between;
    }
    .productImage {
        display: flex;
        width: 100%;
        overflow-x: scroll;
    }
    .productImage div {
        margin: 20px 4px;
    } 
    .totalPrice {
        display: flex;
        justify-content: space-between;
        padding: .81em 0;
        font-size: 1.3rem;
        font-weight: bold;
        color: #555;
     }
     .promoCode {
        display: flex;
        justify-content: space-between; 
        padding: .6em 0;
        div {
            color: #555;
            font-weight: 600;
        }
     }
     .deliveryMethod {
         display: flex;
         margin: 20px 0;
     }
    .deliveryTitle {
        line-height: 2;
        flex: 0 0 75%;
        h4 {
            color: var(--dark-color);
            font-weight: bold;
            font-size: 1.2rem;
            margin:0;
        }
    }
    .deliveryAdd {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .deliveryContent {
        h3 {
            margin: 0 0 15px;
            position: relative;
            color: #888;
            font-size: 1rem;
            &:after {
                content:'';
                position: absolute;
                left:0;
                width: 40%;
                bottom: -2px;
                border-bottom: 1px solid rgba(0,0,0,.4);
            }
        }
       p {
           margin: 2px;
       } 
    }
    .buttonContainer {
        flex: 0 0 25%;
    }
    .form-control {
        display: block;
        width: 100%;
        height: calc(2.5em + 7px);
        padding: .375rem .75rem;
        font-size: 1rem;
        outline: none;
        background-color: #f7f7f7;
        border: 1px solid rgba(0,0,0,.02);
        border-radius: 0;
        box-sizing: border-box;
        &:focus {
            box-shadow: none;
            border:1px solid rgba(0,0,0,.8);
        }
    }
    .priceDx {
        display: flex;
        justify-content: space-between;
        padding: 0 0 15px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #555;
        &.totalPrice {
            color: #000 !important;
            font-size: 1.3rem;
            border-top: 1px solid rgba(0,0,0,.09);
            padding-top: .51em;
        }
      }
    .savedAdd {
        .pretty {
            &.p-svg {
                .state {
                    .svg {
                        top: unset
                    }
                    label {
                        &:before {
                            top:unset
                        }
                    }
                }
            }
            input {
                &:checked {
                    ~.state {
                        &.p-warning {
                            label {
                                &:after {
                                top:0
                                }
                            }
                        }
                    }
                }
            }
        }
        ul {
          list-style:none;
          padding-left: 0;
          margin: 0 10px;
      }
      li {
          padding: 5px;
          display:block;
          &:first-child {
              font-weight: bold;
              padding-top: 0;
          }
      }
    }
    .paymentMethod {
        img {
            width: 70px;
            vertical-align: middle;
            margin-left: 5%;
            &:first-child {
                margin-left: 0;
            } 
        }
    }
`;
const RowHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Col6 = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;
const Col12 = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

const Checkout = props => {
  // const showHide = props.state.showHide;
  // const shipping = props.state.shipping;
  // const billing = props.state.billing;
  // const emailTab = props.state.emailTab;
//   const payment = props.state.payment;
  const state = props.state;
  const cart = props.cart;
  const cartTotal = props.cartTotal;
  const userAddress = props.userAddress;
  const shippingFee = props.shippingFee;
//   const addressShow = props.state.addressShow;

  const promoForm = props.toggleIcon
  // const confirmPayment = props.state.confirmPayment;
    LOGGER('user address', userAddress);
  return (
    <CheckoutMobileContainer>
      <div className="productDetailCard">
        <div className="productDetail">
          <div>
            <span className="myBag">My Bag</span> ({cart.length} {cart.length > 1 ? 'Items':'Item'})
          </div>
          <div>View</div>
        </div>
        <div className="productImage">
          {cart.map((item, key) => {
            return (
              <div key={key}>
                <img
                  src={item.productPicture}
                  alt={item.productName}
                  height={150}
                />
              </div>
            );
          })}
        </div>
        <hr />
        <div className="totalPrice">
          <span>Total</span>
          <span className="price">{NairaSign}{numberWithCommas(cartTotal)}</span>
        </div>
      </div>
      <div className="productDetailCard">
        <div className="promoCode" onClick={props.promoFormToggle}>
          <div>PROMO/VOUCHER CODES</div>
          <div> <i className={props.promoFormToggle === promoForm ? 'fa fa-angle-down':'fa fa-angle-right'}></i></div>
        </div>
        <div style={{display: (promoForm ? 'flex':'none'), marginTop:'1em'}}>
            <div style={{flex:'0 0 75%'}}><input className="form-control" type="number" placeholder="Enter Promo Code" name="promo-code"/></div>
            <div style={{flex: '0 0 25%'}}><Button label="Apply" bgColor="var(--dark-color)" style={{margin:'0'}} textColor="var(--white-color)"/></div>
        </div>
      </div>

      <div className="productDetailCard">
        <div className="deliveryTitle"><h4>DELIVERY METHOD</h4></div>
        <div className="deliveryMethod">
          <div>
            <label style={{fontSize:'1.2rem', fontWeight:'bold'}} htmlFor="PICK_UP">Pick up</label>
            <div style={{color: '#555', fontSize:'1rem'}}>Get your item(s) directly from wawooh pickup station</div>
          </div>
          <div>
            <div className="pretty p-default p-round">
                <input id="PICK_UP" type="radio" name="pickupOption" value="PICK_UP" onChange={props.onChange}/>
                <div className="state">
                    <label></label>
                </div>
            </div>
          </div>
        </div>

        <div className="deliveryMethod">
          <div>
            <label style={{fontSize:'1.2rem', fontWeight:'bold'}} htmlFor="STANDARD_DELIVERY">Standard Delivery</label>
            <div style={{color: '#555', fontSize:'1rem'}}>
              Kindly note that there are no deliveries on public holidays
            </div>
          </div>
          <div>
            <div className="pretty p-default p-round">
                <input id="STANDARD_DELIVERY" type="radio" name="pickupOption" value="STANDARD_DELIVERY" onChange={props.onChange}/>
                <div className="state">
                    <label></label>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="productDetailCard">
        <div className="deliveryAdd">
          <div className="deliveryTitle"><h4>DELIVERY</h4></div>
          <div className="buttonContainer">
            <Button
              label="CHANGE"
              textColor={"white"}
              fontSize={"14px"}
              bgColor={"black"}
            />
          </div>
        </div>
        <div className="deliveryContent savedAdd">
          <h3>DELIVERY ADDRESS</h3>
          {userAddress.map((item, key) => {
            return (
                <div key={item.id} className="pretty p-svg p-curve">
                <input type="radio" value={item.id} name="deliveryAddressId" onChange={props.shippingAddressFee}/>
                <div className="state p-warning">
                    <svg className="svg svg-icon" viewBox="0 0 20 20">
                        <path
                            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                            style={{stroke: 'white', fill: 'white'}}></path>
                    </svg>
                    <label>
                        <ul>
                            <li><strong>{item.firstName} {item.lastName}</strong></li>
                            <li>{item.address}</li>
                            <li>{item.city} {item.state}</li>
                            <li>{item.phoneNo}</li>
                            <li>{item.country}</li>
                        </ul>
                    </label>
                </div>
            </div>
            );
          })}
        </div>
      </div>

        {
            userAddress.preferred !== 'Y' ?
            ''
            :
            <div className="productDetailCard">
                <div className="deliveryAdd">
                <div className="deliveryTitle"><h4>BILLING</h4></div>
                <div className="buttonContainer">
                    <Button
                    label="CHANGE"
                    textColor={"white"}
                    fontSize={"14px"}
                    bgColor={"black"}
                    />
                </div>
                </div>
                <div className="deliveryContent">
                <h3>BILLING ADDRESS</h3>
                {userAddress.map((item, key) => {
                    return (
                    <div key={key}>
                        <p>
                        {item.firstName} {item.lastName}
                        </p>
                        <p>{item.address}</p>
                        <p>{item.city}</p>
                        <p>{item.state}</p>
                        <p>{item.country}</p>
                    </div>
                    );
                })}
            </div>
        </div>
        }

        <div className="productDetailCard">
            <div className="deliveryAdd">
            <div className="deliveryTitle"><h4>SUMMARY</h4></div>
            </div>
            <div className="deliveryContent">
            <h3>Total Payment</h3>
            <div className="prices">
                <div className="priceDx">
                    <div>Subtotal</div>
                    <div>{NairaSign}{numberWithCommas(cartTotal)}</div>
                </div>
                <div className="priceDx">
                    <div>Shipping</div>
                    <div>{NairaSign}{numberWithCommas(shippingFee)}</div>
                </div>
                {/* <div className="priceDx">
                    <div className="promoPrice">PROMOCODE/VOUCHERS</div>
                    <div />
                </div> */}
                <div className="priceDx totalPrice">
                    <div>TOTAL(NGN)</div>
                    <div>{NairaSign}{numberWithCommas(cartTotal + shippingFee)}</div>
                </div>
            </div>
            </div>
        </div>

      <div className="productDetailCard">
        <div className="deliveryAdd">
          <div className="deliveryTitle"><h4>PAYMENT</h4></div>
        </div>
        <div className="deliveryContent">
          <RowHolder style={{marginTop:'1rem'}}>
              <Col6 style={{paddingLeft:'0'}}>
                <div className="pretty p-default p-round">
                    <input type="radio" name="paymentType" onChange={props.onChange} value="CARD_PAYMENT" checked={state.paymentType === 'CARD_PAYMENT' ? true : false}/>
                    <div className="state">
                        <label>Wawooh Pay</label>
                    </div>
                </div>
                </Col6>
              <Col6>
                <div className="pretty p-default p-round">
                    <input type="radio" name="paymentType" onChange={props.onChange} value="BANK_TRANSFER" checked={state.paymentType === 'BANK_TRANSFER' ? true : false}/>
                    <div className="state">
                        <label>Bank Transfer</label>
                    </div>
                </div>
              </Col6>
          </RowHolder>
          <RowHolder style={{marginTop:'1.1rem'}}>
              <Col6 style={{paddingLeft:'0'}}>
                <div className="pretty p-default p-round">
                    <input type="radio" name="paymentType" value="WALLET" checked={state.paymentType === 'WALLET' ? true : false} onChange={props.onChange}/>
                    <div className="state">
                        <label>Pay with Wallet</label>
                    </div>
                </div>
              </Col6>
          </RowHolder>
          <RowHolder style={{marginTop:'2rem'}}>
              <Col12>
              <div className="paymentMethod bold">
                    <img src={Verve} alt={'verve'} />
                    <img src={Visa}  alt={'visa'} />
                    <img src={MasterCard} alt={'master'}/>
                  </div>
              </Col12>
          </RowHolder>
        </div>
        <div>
          <Button onClick={props.Checkout} label={"PLACE ORDER"} bgColor="var(--dark-color)" textColor="var(--white-color)"/>
        </div>
      </div>
    </CheckoutMobileContainer>
  );
};

export default Checkout;
