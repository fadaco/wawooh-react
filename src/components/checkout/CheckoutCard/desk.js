import React from "react";
import Styled from "styled-components";
import Button from "../../ui/Button";
import { GET_TOKEN } from "../../../shared/Storage";
import { NavLink } from "react-router-dom";
import { NairaSign } from "../../../config";
import { numberWithCommas } from "../../../shared/Methods";
import TextInput from "../../ui/InputField";
import Verve from "../../../assets/images/verve-card.png";
import Visa from "../../../assets/images/visa-card.png";
import MasterCard from "../../../assets/images/master-card.png";
import AddressForm from "../../address";

const CheckoutDesktopContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 4em;
    background: #f7f7f7;
    .deliveryTitle {
      h3 {
        margin: 20px 0;
        color: #444;
        font-size: 1rem;
        font-weight: bold;
        position: relative
        &:after {
          content:'';
          position: absolute;
          width: 30%;
          left: 0;
          bottom: -4px;
          border-bottom: 1px solid rgba(0,0,0,.05);
        }
      }
    }
    .leftCheckout {
        flex: 0 0 60%;
        max-width: 60%;
        padding-left:10px;
        padding-right:10px;
        position:relative;
        box-sizing:border-box;
    }
    .rightCheckout {
        flex: 0 0 40%;
        max-width: 40%;
        padding-left:10px;
        padding-right:10px;
        position:relative;
        box-sizing:border-box;
    }
    .inputField {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        position: relative;
        background-color: rgba(208, 208, 208, 0.3);
        transition: ease 0.3s all;
    }
    .numberHolder {
        border-radius: 50px;
        background: #000;
        width: 20px;
        height: 20px;
        padding: 3px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bolder;
    }
    .customer {
        padding: 20px;
        background: var(--white-color);
        margin: 0 0 10px 0;
        .customerInner {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            .customerEmail {
                display: flex;
                span, a {
                    color: var(--primary-color);
                    font-weight: 600;
                    padding-left:3px;
                }
                
            }
            h4 {
                font-size: 1.1em;
                font-weight:bolder;
                margin:0 0 6px;
            }
            h5 {
                font-size: 1em;
                font-weight:500;
                margin:0 0 10px;
            }
        }
        
    }
    .emailContainer {
       display: flex;
       flex-direction:row;
       align-items: baseline;
    } 
    .rightCheckout{
        background: #ffffff;
        padding: 20px;
        .productCategory {
            font-size: 15px;
            color: #9a9a9acc;
            font-weight: 400;
        }
        .productName {
            font-weight: 700;
            line-height: 1.2;
            color: #828181;
        }
        .checkoutqty {
            display: flex;
        }
        .itemCount {
            border-top: 1px solid #ccc;
            padding: 10px 3px;
        }        
        .emailContainerSidebar {
            display: flex;
            justify-content: space-between;
            margin: 10px 2px;
            .item-1 {
                flex: 0 0 15%;
            }
            .item-2 {
                flex: 0 0 55%;
            }
            .priceD {
                display: flex;
                justify-content: space-between;
                margin: 20px 0;
            }
            .pricediv {
                display:flex;
                align-items: baseline;
                padding-top: 10px;
            }
        }
   .prices {
       border-top: 1px solid #ccc;
       padding: 20px 0;
       color: #ababab;
       font-weight: 600;
   }
   .totalPrice {
       border-top: 1px solid #ccc;
       padding: 20px 0;
       font-weight:bolder;
   }
   .promoPrice {
       color: var(--primary-color);
   } 
   .qty {
       margin-right: 13px;
       color: #828181;
       font-weight: bold;
   }
}   
.shipping {
    flex-grow: 2;
}   
.formField {
    display: flex;
    justify-content: space-evenly;
}
.formText {
    width: 46%;
}
.pad {
  padding: 15px 0 !important;
}
.deliveryMethod {
  display: flex;
  justify-content: space-between;
  margin: .52rem 0 1.2rem;
}
.paymentMethod {
  display: flex;
}
.emailContainerSidebars {
  display: flex;
  justify-content: space-between;
}
.confirmWidth {
  width: 100%;
}
.priceDx, .customerInnerOuter {
  display: flex;
  justify-content: space-between;
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
`;

const Col1 = Styled.div`
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
    box-sizing: border-box;
`;
const Col2 = Styled.div`
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
    box-sizing: border-box;
`;
const Col6 = Styled.div`
    flex: 0 0 75%;
    max-width: 75%;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
    box-sizing: border-box;
`;
const Col9 = Styled.div`
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
    box-sizing: border-box;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
`;

const Checkout = props => {
  const viewComponent = props.state.viewComponent;
  const showHide = props.state.showHide;
  const cart = props.cart;
  const state = props.state;
  const cartTotal = props.cartTotal;
  const userAddress = props.userAddress;
  const shippingFee = props.shippingFee;
  const addressShow = props.state.addressShow;
  const showDeliveryType = props.showDeliveryType;
  console.log(showDeliveryType);

  return (
    <CheckoutDesktopContainer>
      <div className="leftCheckout">
        {(viewComponent !== 'email') || (GET_TOKEN()) ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">1</div>
              </Col1>
              <Col6>
                <h4 className="bold">CUSTOMER</h4>
                <span className="bold">{props.state.guestEmail}</span>
              </Col6>

              {!GET_TOKEN() ? (
                <Col2>
                  <div>
                    <Button
                      width="80%"
                      bgColor="#000"
                      textColor="#fff"
                      onClick={() => props.click("email")}
                      label={"Edit"}
                      style={{ height: "30px", marginTop: "0" }}
                    />
                  </div>
                </Col2>
              ) : null}
            </div>
          </div>
        ) : null}
        
        {(viewComponent === 'email') || (!GET_TOKEN()) ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">1</div>
              </Col1>
              <Col9>
                <div style={{ padding: "0 4em 0 0" }}>
                  <h4 className="bold">CUSTOMER</h4>
                  <h5>
                    Checking out as a Guest? You'll able to save your details to
                    create an account with us later
                  </h5>
                  <div className="customerEmail">
                    <div style={{ width: "100%" }}>
                      <label style={{ fontWeight: "bold" }}>
                        Email Address
                      </label>
                      <div className="emailContainer">
                        <div style={{ flex: "0 0 55%", paddingRight: "5px" }}>
                          <TextInput
                            formname="guestEmail"
                            type="email"
                            value={state.guestEmail}
                            onChange={props.onChange}
                            className="inputField"
                            style={{ height: "3em", background: "#f7f7f7" }}
                          />
                          {showHide ? (
                            <label style={{ color: "#f00" }}>
                              Email field cannot be empty
                            </label>
                          ) : null}
                        </div>
                        <div style={{ flex: "0 0 35%", paddingLeft: "5px" }}>
                          <Button
                            onClick={() => props.click("shipping")}
                            label="CONTINUE AS GUEST"
                            textColor="var(--white-color)"
                            fontSize={"14px"}
                            bgColor="var(--dark-color)"
                            style={{ marginTop: "0", letterSpacing: "unset" }}
                          />
                        </div>
                      </div>

                      <div style={{ padding: "0 0 15px" }}>
                        <div className="pretty p-svg p-curve">
                          <input type="checkbox" />
                          <div className="state p-warning">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label>Subscribe to our news letter</label>
                          </div>
                        </div>
                      </div>
                      <div style={{ color: "#444", fontWeight: "bold" }}>
                        Already Have an account?
                        <span>
                          <NavLink to={"/login"}>SIGN IN HERE</NavLink>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col9>
            </div>
          </div>
        ) : null}

        {viewComponent !== "shipping" ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">2</div>
              </Col1>
              <Col6>
                <div>
                  <h4 className="bold">SHIPPING</h4>
                </div>
              </Col6>
              {state.editShipping === "payment" ? (
                <Col2>
                  <div>
                    <Button
                      width="80%"
                      bgColor="#000"
                      textColor="#fff"
                      onClick={() => props.click("shipping")}
                      label={"Edit"}
                      style={{ height: "30px", marginTop: "0" }}
                    />
                  </div>
                </Col2>
              ) : null}
            </div>
          </div>
        ) : null}

        {viewComponent === "shipping" ? (
          <div className="customer shipping">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">2</div>
              </Col1>
              <Col9>
                <div className="shipping">
                  <div>
                    <h4 className="bold">SHIPPING</h4>
                  </div>

                  <div className="productDetailCard">
                    <div className="deliveryTitle">
                      <h3>DELIVERY METHOD</h3>
                    </div>
                    <div className="deliveryMethod">
                      <div>
                        <label style={{fontSize:'1rem', fontWeight:'bold'}} htmlFor="PICK_UP">Pick up</label>
                        <div style={{color: '#555', fontSize:'.91rem'}}>Get your item(s) directly from wawooh pickup station</div>
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
                      <label style={{fontSize:'1rem', fontWeight:'bold'}} htmlFor="STANDARD_DELIVERY">Standard Delivery</label>
                      <div style={{color: '#555', fontSize:'.91rem'}}>
                        Kindly note that there are no deliveries on public holidays
                      </div>
                    </div>
                    <div>
                      <div className="pretty p-default p-round">
                          <input id="STANDARD_DELIVERY" onClick={()=>props.toggleDeliveryMethod('standard_delivery')} type="radio" name="pickupOption" value="STANDARD_DELIVERY" onChange={props.onChange}/>
                          <div className="state">
                              <label></label>
                          </div>
                      </div>
                    </div>
                  </div>
                  </div>

                {
                  showDeliveryType === 'standard_delivery' ? 
                  (
                    <div style={{borderTop:'1px solid rgba(0,0,0,.07)', padding:'15px 0'}}>
                    <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <div style={{flex:'0 0 70%'}}><h5 style={{fontWeight:'bold', color:'#555'}}>SHIPPING ADDRESS</h5></div>
                      <div style={{flex:'0 0 30%'}}>{GET_TOKEN() ? (
                      <Button
                        style={{margin:'0', height:'40px'}}
                        onClick={props.addNewAddress}
                        bgColor="var(--dark-color)"
                        textColor="var(--white-color)"
                        label={addressShow ? "Select Address" : "Add New Address"}
                      />
                    ) : null}</div>
                    </div>
  
                    {userAddress.length < 1 || addressShow ? (
                      <div className="pad">
                        <AddressForm />
                      </div>
                    ) : (
                      <div className="savedAdd">
                        {userAddress.map(item => {
                          return (
                            <div key={item.id} className="pretty p-svg p-curve">
                              <input
                                type="radio"
                                value={item.id}
                                name="deliveryAddressId"
                                onChange={props.shippingAddressFee}
                                
                              />
                              <div className="state p-warning">
                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                  <path
                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                    style={{ stroke: "white", fill: "white" }}
                                  />
                                </svg>
                                <label>
                                  <ul>
                                    <li>
                                      <strong>
                                        {item.firstName} {item.lastName}
                                      </strong>
                                    </li>
                                    <li>{item.address}</li>
                                    <li>
                                      {item.city} {item.state}
                                    </li>
                                    <li>{item.phoneNo}</li>
                                    <li>{item.country}</li>
                                  </ul>
                                </label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  ):''
                }
                     
                <div style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end'}}>
                  <div style={{flex:'0 0 30%'}}>
                  <Button
                      onClick={() => props.click("payment")}
                      label="CONTINUE"
                      textColor="var(--white-color)"
                      fontSize={"14px"}
                      bgColor="var(--dark-color)"
                    />
                  </div>                     
                  </div>
                </div>
              </Col9>
            </div>
          </div>
        ) : null}

        {viewComponent !== "payment" ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">3</div>
              </Col1>
              <Col6>
                <div className="shipping">
                  <div>
                    <h4 className="bold">PAYMENT</h4>
                  </div>
                </div>
              </Col6>
              {state.editBilling === "billing" ? (
                <Col2>
                  <div>
                    <Button
                      width="80%"
                      bgColor="#000"
                      textColor="#fff"
                      onClick={() => props.click("payment")}
                      label={"Edit"}
                      style={{ height: "30px", marginTop: "0" }}
                    />
                  </div>
                </Col2>
              ) : null}
            </div>
          </div>
        ) : null}

        {viewComponent === "payment" ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">3</div>
              </Col1>
              <Col9>
                <div className="shipping">
                  <div>
                    <h4 className="bold">PAYMENT</h4>
                  </div>
                  <div className="emailContainer">
                    <div>
                      <input
                        type="radio"
                        value="CARD_PAYMENT"
                        name="paymentType"
                        checked={
                          state.paymentType === "CARD_PAYMENT" ? true : false
                        }
                        onChange={props.onChange}
                      />
                      Wawooh Pay
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="BANK_TRANSFER"
                        name="paymentType"
                        checked={
                          state.paymentType === "BANK_TRANSFER" ? true : false
                        }
                        onChange={props.onChange}
                      />
                      Bank Transfer
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="WALLET"
                        name="paymentType"
                        checked={state.paymentType === "WALLET" ? true : false}
                        onChange={props.onChange}
                      />
                      Pay with wallet
                    </div>
                  </div>
                  <div className="paymentMethod bold">
                    <img src={Verve} height={70} alt="" />
                    <img
                      src={Visa}
                      height={70}
                      width={50}
                      alt=""
                      className="visa"
                    />
                    <img src={MasterCard} alt="" height={70} />
                  </div>

                  <Button
                    onClick={() => props.click("billing")}
                    label="CONFIRM ORDER"
                    textColor={"white"}
                    fontSize={"14px"}
                    bgColor={"black"}
                  />
                </div>
              </Col9>
            </div>
          </div>
        ) : null}

        {viewComponent !== "billing" ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">4</div>
              </Col1>
              <Col6>
                <h4 className="bold">BILLING</h4>
              </Col6>
              {state.confirmPayment === "confirmPayment" ? (
                <Col2>
                  <div>
                    <Button
                      width="80%"
                      bgColor="#000"
                      textColor="#fff"
                      onClick={() => props.click("confirmPayment")}
                      label={"Edit"}
                      style={{ height: "30px", marginTop: "0" }}
                    />
                  </div>
                </Col2>
              ) : null}
            </div>
          </div>
        ) : null}

        {viewComponent === "billing" ? (
          <div className="customer shipping">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">4</div>
              </Col1>
              <Col9>
              <div className="shipping">
                <div>
                  <div className="bold">BILLING</div>
                  <div>SHIPPING ADDRESS</div>
                  <div className="customerEmail">
                    <div className="emailContainer">
                      <TextInput
                        labelTitle="Country"
                        placeholder=" "
                        formname="billingCountry"
                        onChange={props.onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="formField">
                  <div className="m-0 formText">
                    <TextInput
                      labelTitle="First Name"
                      placeholder=" "
                      formname="billingFirstName"
                      onChange={props.onChange}
                    />
                  </div>
                  <div className="m-0 formText">
                    <TextInput
                      labelTitle="Last Name"
                      placeholder=" "
                      formname="billingLastName"
                      onChange={props.onChange}
                    />
                  </div>
                </div>
                <div className="customerEmail">
                  <div className="emailContainer">
                    <TextInput
                      labelTitle="Address Line"
                      placeholder=" "
                      formname="billingAddress"
                      onChange={props.onChange}
                    />
                  </div>
                </div>
                <div className="formField">
                  <div className="m-0 formText">
                    <TextInput
                      labelTitle="State"
                      placeholder=" "
                      formname="billingState"
                      onChange={props.onChange}
                    />
                  </div>
                  <div className="m-0 formText">
                    <TextInput
                      labelTitle="City"
                      placeholder=" "
                      formname="billingCity"
                      onChange={props.onChange}
                    />
                  </div>
                </div>
                <div className="formField">
                  <div className="m-0 formText">
                    <TextInput
                      labelTitle="Country Code"
                      placeholder=" "
                      formname="billingCode"
                      onChange={props.onChange}
                    />
                  </div>
                  <div className="m-0 formText">
                    <TextInput
                      labelTitle="Phone"
                      placeholder=" "
                      formname="billingPhoneNo"
                      onChange={props.onChange}
                    />
                  </div>
                </div>

                <Button
                  onClick={() => props.click("confirmPayment")}
                  label="CONTINUE"
                  textColor={"white"}
                  fontSize={"14px"}
                  bgColor={"black"}
                />
              </div>
              </Col9>
            </div>
          </div>
        ) : null}

        {viewComponent !== "confirmPayment" ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">5</div>
              </Col1>
              <div>
                <Col9>
                  <h4 className="bold">CONFIRM</h4>
                </Col9>
              </div>
            </div>
          </div>
        ) : null}

        {viewComponent === "confirmPayment" ? (
          <div className="customer">
            <div className="customerInner">
              <Col1>
                <div className="numberHolder">5</div>
              </Col1>
              
              <Col9>
                <div className="confirmWidth">
                  <div className="bold">CONFIRM</div>
                  <div className="rightCheckouts">
                  {cart.map((item, key) => {
                    return (
                      <div className="emailContainerSidebars" key={key}>
                        <div>
                          <img
                            alt={item.productName}
                            src={item.productPicture}
                            height={120}
                          />
                        </div>
                        <div className="pricediv">
                          <div className="qty">1x</div>
                          <div className="">
                            <div className="productName">
                              {item.productName}
                            </div>
                            <div className="productCategory">
                              {item.designerName}
                            </div>
                          </div>
                        </div>

                        <div>{NairaSign}{numberWithCommas(item.amount)}</div>
                      </div>
                    );
                  })}

                  <div className="prices">
                    <div className="priceDx">
                      <div>Subtotal</div>
                      <div>{NairaSign}{numberWithCommas(cartTotal)}</div>
                    </div>
                    <div className="priceDx">
                      <div>Shipping</div>
                      <div>{NairaSign}{numberWithCommas(shippingFee)}</div>
                    </div>
                    {/*<div className="priceDx">
                                        <div>Tax</div>
                                        <div>N0.00</div>
                                    </div>*/}
                    <div className="priceDx">
                      <div className="promoPrice">PROMOCODE/VOUCHERS</div>
                      <div />
                    </div>
                    <div className="priceDx totalPrice">
                      <div>TOTAL(NGN)</div>
                      <div>{NairaSign}{numberWithCommas(cartTotal)}</div>
                    </div>
                    <div>
                      <Button
                        onClick={props.Checkout}
                        label="PLACE ORDER"
                        textColor={"white"}
                        fontSize={"14px"}
                        bgColor={"black"}
                      />
                    </div>
                  </div>
                </div>
                </div>
              </Col9>
            </div>
          </div>
        ) : null}
      </div>
      
      <div className="rightCheckout">
        <div className="emailContainerSidebar">
          <div className="bold">ORDER SUMMARY</div>
          <div>
            <NavLink
              to="/cart"
              style={{ color: "#555", textDecoration: "none" }}
            >
              EDIT
            </NavLink>
          </div>
        </div>
        <div className="itemCount">
          {cart.length} {cart.length > 1 ? "Items" : "Item"}
        </div>
        {cart.map((item, key) => {
          return (
            <div className="emailContainerSidebar" key={key}>
              <div className="item-1">
                <img
                  alt={item.productName}
                  src={item.productPicture}
                  height={120}
                />
              </div>
              <div className="item-2">
                <div className="pricediv">
                  <div className="qty">{item.quantity}x</div>
                  <div className="">
                    <div className="productName">
                      {item.productName ? item.productName : item.name}
                    </div>
                    <div className="productCategory">{item.designerName}</div>
                  </div>
                </div>
              </div>
              <div
                className="item-1"
                style={{ paddingTop: "10px", fontWeight: "bold" }}
              >
                <span>
                  {NairaSign}
                  {item.slashedPrice > 0 || item.price
                    ? numberWithCommas(item.slashedPrice) ||
                      numberWithCommas(item.price)
                    : numberWithCommas(item.amount)}
                </span>
              </div>
            </div>
          );
        })}
        <div className="prices">
          <div className="emailContainerSidebar ">
            <div className="item-2">Subtotal</div>
            <div>
              {NairaSign}
              {numberWithCommas(cartTotal)}
            </div>
          </div>
          <div className="emailContainerSidebar">
            <div className="item-2">Shipping</div>
            <div>
              {NairaSign}{numberWithCommas(shippingFee)}
            </div>
          </div>
          <div className="emailContainerSidebar" style={{ paddingTop: "10px" }}>
            <div className="promoPrice">PROMOCODE/VOUCHERS</div>
            <div />
          </div>
        </div>

        <div className="emailContainerSidebar totalPrice">
          <div className="item-2">TOTAL(NGN)</div>
          <div>
            {NairaSign}
            {numberWithCommas(cartTotal + shippingFee)}
          </div>
        </div>
      </div>
    </CheckoutDesktopContainer>
  );
};

export default Checkout;
