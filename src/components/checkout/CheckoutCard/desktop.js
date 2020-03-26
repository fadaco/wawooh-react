import React from "react";
import styled from "styled-components";
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
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


export default (props) => {
  const viewComponent = props.state.viewComponent;
  const showHide = props.state.showHide;
  const cart = props.cart;
  const state = props.state;
  const cartTotal = props.cartTotal;
  const userAddress = props.userAddress;
  const shippingFee = props.shippingFee;
  const addressShow = props.state.addressShow;
  const promoForm = props.toggleIcon
  // const showDeliveryType = props.showDeliveryType;
  // const {country, city} = props.c;

  return (
    <CheckoutContainer>
      <RowHolder>
        <Col8>
          {viewComponent !== "email" || GET_TOKEN() ? (
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

          {viewComponent === "email" && !GET_TOKEN() ? (
            <div className="customer">
              <div className="customerInner">
                <Col1>
                  <div className="numberHolder">1</div>
                </Col1>
                <Col9>
                  <div style={{ padding: "0 4em 0 0" }}>
                    <h4 className="bold">CUSTOMER</h4>
                    <h5>
                      Checking out as a Guest? You'll able to save your details
                      to create an account with us later
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
                          <label
                            style={{ fontSize: "1rem", fontWeight: "bold" }}
                            htmlFor="PICK_UP"
                          >
                            Pick up
                          </label>
                          <div style={{ color: "#555", fontSize: ".91rem" }}>
                            Get your item(s) directly from wawooh pickup station
                          </div>
                        </div>
                        <div>
                          <div className="pretty p-default p-round">
                            <input
                              id="PICK_UP"
                              type="radio"
                              name="deliveryType"
                              value="PICK_UP"
                              onChange={props.onChange}
                            />
                            <div className="state">
                              <label />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="deliveryMethod">
                        <div>
                          <label
                            style={{ fontSize: "1rem", fontWeight: "bold" }}
                            htmlFor="STANDARD_DELIVERY"
                          >
                            Standard Delivery
                          </label>
                          <div style={{ color: "#555", fontSize: ".91rem" }}>
                            Kindly note that there are no deliveries on public
                            holidays
                          </div>
                        </div>
                        <div>
                          <div className="pretty p-default p-round">
                            <input
                              id="STANDARD_DELIVERY"
                              onClick={() =>
                                props.toggleDeliveryMethod("standard_delivery")
                              }
                              type="radio"
                              name="deliveryType"
                              value="STANDARD_DELIVERY"
                              onChange={props.onChange}
                            />
                            <div className="state">
                              <label />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* {showDeliveryType === "standard_delivery" ? (
                      
                    ) : (
                      ""
                    )} */}

                      {state.deliveryInfo ?

                          <div
                              style={{
                                  borderTop: "1px solid rgba(0,0,0,.07)",
                                  padding: "15px 0"
                              }}
                          >
                              <div
                                  style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center"
                                  }}
                              >
                                  <div style={{flex: "0 0 70%"}}>
                                      <h5 style={{fontWeight: "bold", color: "#555"}}>
                                          SHIPPING ADDRESS
                                      </h5>
                                  </div>
                                  <div style={{flex: "0 0 30%"}}>
                                      {GET_TOKEN() ? (
                                          <Button
                                              style={{margin: "0", height: "40px"}}
                                              onClick={props.addNewAddress}
                                              bgColor="var(--dark-color)"
                                              textColor="var(--white-color)"
                                              label={
                                                  addressShow
                                                      ? "Select Address"
                                                      : "Add New Address"
                                              }
                                          />
                                      ) : null}
                                  </div>
                              </div>

                              {userAddress.length < 1 || addressShow ? (
                                  <div className="pad">
                                      <AddressForm/>
                                  </div>
                              ) : (
                                  <div className="savedAdd">
                                      {userAddress.map(item => {
                                          return (
                                              <div
                                                  key={item.id}
                                                  className="pretty p-svg p-curve"
                                              >
                                                  <input
                                                      type="radio"
                                                      value={item.id}
                                                      name="deliveryAddressId"
                                                      onChange={props.shippingAddressFee}
                                                  />
                                                  <div className="state p-warning">
                                                      <svg
                                                          className="svg svg-icon"
                                                          viewBox="0 0 20 20"
                                                      >
                                                          <path
                                                              d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                              style={{
                                                                  stroke: "white",
                                                                  fill: "white"
                                                              }}
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
                          </div> : null
                      }

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end"
                      }}
                    >
                      <div style={{ flex: "0 0 30%" }}>
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
                        <Col12 style={{display:'flex', margin:'1rem 0', paddingLeft:'0'}}>
                        <Col3 style={{paddingLeft:'0'}}>
                        <div className="pretty p-default p-round">
                          <input
                            type="radio"
                            value="CARD_PAYMENT"
                            name="paymentType"
                            checked={
                              state.paymentType === "CARD_PAYMENT" ? true : false
                            }
                            onChange={props.onChange}
                          />
                            <div className="state">
                                <label>Wawooh Pay</label>
                            </div>
                        </div>
                        </Col3>
                        <Col3>
                        <div className="pretty p-default p-round">
                          <input
                            type="radio"
                            value="BANK_TRANSFER"
                            name="paymentType"
                            checked={
                              state.paymentType === "BANK_TRANSFER" ? true : false
                            }
                            onChange={props.onChange}
                          />
                            <div className="state">
                                <label>Bank Transfer</label>
                            </div>
                        </div>
                        </Col3>
                        <Col3>
                        <div className="pretty p-default p-round">
                          <input
                            type="radio"
                            value="WALLET"
                            name="paymentType"
                            checked={
                              state.paymentType === "WALLET" ? true : false
                            }
                            onChange={props.onChange}
                          />
                            <div className="state">
                                <label>Pay with wallet</label>
                            </div>
                        </div>
                        </Col3>
                        </Col12>
                    </div>

                    <div className="bottomImage">
                        <img src={MasterCard} alt={'mastercard'}/>
                        <img src={Visa} alt={'visacard'}/>
                        <img src={Verve} alt={'verve'}/>
                    </div>

                    <Button
                      onClick={() => props.click("billing")}
                      label="PLACE ORDER"
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
                      <div className="deliveryTitle"><h3>SHIPPING ADDRESS</h3></div>
                      <RowHolder>
                        <Col5>
                            <div className="form-group">
                                <label className="label-style">First Name</label>
                                <input onChange={props.onChange} type="text" name="billingFirstName" className="form-control"/>
                            </div>
                        </Col5>             
                        <Col5>
                            <div className="form-group">
                                <label className="label-style">Last Name</label>
                                <input onChange={props.onChange} type="text" name="billingLastName" className="form-control"/>
                            </div>
                        </Col5>
                        <Col12 style={{paddingLeft:'0'}}>
                            <div className="form-group">
                                <label className="label-style">Address Line</label>
                                <input onChange={props.onChange} type="text" name="billingAddress" className="form-control"/>
                            </div>
                        </Col12>
                        <Col5 style={{paddingLeft:'0'}}>
                            <div className="form-group">
                                <label className="label-style">Country</label>
                                {/* <CountryDropdown className="form-control" name="billingCountry" onChange={(val)=>props.changeCountry('countryCheck', val)}/> */}
                                <input type="text" name="billingCountry" onChange={props.onChange} className="form-control" />
                            </div>
                        </Col5>
                        <Col5>
                            <div className="form-group">
                                <label className="label-style">State</label>
                                {/* <RegionDropdown className="form-control" name="billingState" disableWhenEmpty={true} country={country} onChange={(val)=>props.changeRegion('state', val)}/> */}
                                <input type="text" name="billingState" onChange={props.onChange} className="form-control" />
                            </div>
                        </Col5>
                        
                        <Col5>
                            <div className="form-group">
                                <label className="label-style">Zip/Postal Code</label>
                                <input onChange={props.onChange} type="text" name="zipCode" placeholder="eg 09234" className="form-control"/>
                            </div>
                        </Col5>                        
                        <Col5>
                          <div className="form-group">
                              <label className="label-style">Phone</label>
                              <input onChange={props.onChange} type="tel" name="billingPhoneNo" className="form-control" />
                          </div>
                      </Col5>
                      </RowHolder>            
                    </div>
                    <div style={{display:'flex',flex:'0 0 30%', justifyContent:'flex-end'}}>
                      <Button
                        onClick={() => props.click("confirmPayment")}
                        label="CONTINUE"
                        textColor={"white"}
                        fontSize={"14px"}
                        bgColor={"black"}
                        width="30%"
                        style={{margin:'10px'}}
                      />
                    </div>
                    
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
                    <div className="rightCheckouts" style={{marginTop:'2rem'}}>
                      {cart.map((item, key) => {
                        return (
                          <RowHolder key={key} style={{marginBottom:'1rem',justifyContent: 'space-between'}}>
                            <div className="item-1">
                              <div className="img-product ">
                                <img
                                  alt={item.productName}
                                  src={item.productPicture}
                                />
                              </div>
                            </div>
                            <div className="item-2">
                              <div className="pricediv">
                                <div className="qty">{item.quantity}x</div>
                                <div className="">
                                  <div style={{fontSize:'.91rem'}}>
                                    {item.productName ? item.productName : item.name}
                                  </div>
                                  <div style={{fontSize:'10px', padding:'10px 0 0'}}>{item.designerName}</div>
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
                          </RowHolder>
                        );
                      })}

                      <div className="prices left">
                        <RowHolder style={{marginBottom:'10px',justifyContent: 'space-between'}}>
                          <div className="item-2">Subtotal</div>
                          <div>
                            {NairaSign}
                            {numberWithCommas(cartTotal)}
                          </div>
                        </RowHolder>
                        <RowHolder style={{marginBottom:'10px',justifyContent: 'space-between'}}>
                          <div className="item-2">Shipping</div>
                          <div>
                            {NairaSign}{numberWithCommas(shippingFee)}
                          </div>
                        </RowHolder>
                        {/* <RowHolder style={{marginBottom:'10px',justifyContent: 'space-between'}}>
                          <div className="item-2">Promo/Discount</div>
                          <div>
                           
                          </div>
                        </RowHolder>  */}
                      </div>

                      <RowHolder style={{marginBottom:'10px', fontWeight:'bold', padding: '20px 25px 20px 10px', borderTop:'1px solid rgba(0,0,0,.08)', justifyContent: 'space-between'}}>            
                          <div className="item-2">TOTAL(NGN)</div>
                          <div>
                            {NairaSign}{numberWithCommas(cartTotal + shippingFee)}
                          </div>
                      </RowHolder>  
                    </div>
                    <RowHolder>
                      <Col12 style={{padding:'0'}}>
                          <Button
                            onClick={props.Checkout}
                            label="CONFIRM YOUR ORDER"
                            textColor={"white"}
                            fontSize={"14px"}
                            bgColor={"black"}
                          />
                        </Col12>
                    </RowHolder>
                  </div>
                </Col9>
              </div>
            </div>
          ) : null}
        </Col8>

        <Col4>
          <div className="emailContainerSidebar">
          <div className="header">
            <div className="bold"><h5>ORDER SUMMARY</h5></div>
            <div>
              <NavLink
                to="/cart"
                style={{ color: "var(--primary-color)", textDecoration: "none" }}
              >
                EDIT
              </NavLink>
            </div>
          </div>
            
            <h5 style={{margin:'0', padding:'10px 0'}}>
              {cart.length} {cart.length > 1 ? "Items" : "Item"}
            </h5>
            {cart.map((item, key) => {
              return (
                <RowHolder key={key} style={{marginBottom:'1rem',justifyContent: 'space-between'}}>
                  <div className="item-1">
                    <div className="img-product ">
                      <img
                        alt={item.productName}
                        src={item.productPicture}
                      />
                    </div>
                  </div>
                  <div className="item-2">
                    <div className="pricediv">
                      <div className="qty">{item.quantity}x</div>
                      <div className="">
                        <div style={{fontSize:'.91rem'}}>
                          {item.productName ? item.productName : item.name}
                        </div>
                        <div style={{fontSize:'10px', padding:'10px 0 0'}}>{item.designerName}</div>
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
                </RowHolder>
              );
            })}
            <div className="prices">
              <RowHolder style={{marginBottom:'10px',justifyContent: 'space-between'}}>
                <div className="item-2">Subtotal</div>
                <div>
                  {NairaSign}
                  {numberWithCommas(cartTotal)}
                </div>
              </RowHolder>
              <RowHolder style={{marginBottom:'10px',justifyContent: 'space-between'}}>
                <div className="item-2">Shipping</div>
                <div>
                  {NairaSign}{numberWithCommas(shippingFee)}
                </div>
              </RowHolder>
              <RowHolder style={{marginBottom:'10px',justifyContent: 'space-between'}}>
                <div style={{width:'100%', paddingTop: "10px" }}>
                <div className="promoCode" onClick={props.promoFormToggle}>
                  <div>PROMO/VOUCHER CODES</div>
                  <div> <i className={props.promoFormToggle === promoForm ? 'fa fa-angle-down':'fa fa-angle-up'}></i></div>
                </div>
                <div style={{display: (promoForm ? 'flex':'none'), marginTop:'.41em'}}>
                  <div style={{flex:'0 0 75%'}}><input className="form-control" type="number" placeholder="Enter Promo Code" name="promo-code"/></div>
                  <div style={{flex: '0 0 25%'}}><Button label="Apply" bgColor="var(--dark-color)" style={{margin:'0', height: '43px'}} textColor="var(--white-color)"/></div>
              </div>
              </div>
              </RowHolder>  
            </div>

            <RowHolder style={{marginBottom:'10px', fontWeight:'bold', padding: '20px 0', borderTop:'1px solid rgba(0,0,0,.08)', justifyContent: 'space-between'}}>            
                <div className="item-2">TOTAL(NGN)</div>
                <div>
                  {NairaSign}{numberWithCommas(cartTotal + shippingFee)}
                </div>
            </RowHolder>           
        </div>
        </Col4>
      </RowHolder>
    </CheckoutContainer>
  );
};

// export default Checkout;

const CheckoutContainer = styled.div`
  background: #f7f7f7;
  padding: 1rem 5rem 3rem;
  box-sizing: border-box;
  .emailContainerSidebar {
    background: var(--white-color);
    padding: 15px;
    .header {
      display: flex;
      border-bottom: 1px solid rgba(0,0,0,.09);
      padding: 5px 0 10px;
      justify-content: space-between;
      align-items: center;
      h5 {
        margin: 0;
      }
    }
  }
  .img-product {
    width: 80px;
    height: 90px;
    border: 1px solid rgba(0,0,0,.04);
    img {
      width: inherit;
      height: 100%;
      object-fit: contain;
    }
  }
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
      padding: 10px;
  }
  .prices {
    border-top: 1px solid #ccc;
    padding: 20px 0;
    color: #ababab;
    font-weight: 600;
    &.left {
      padding: 20px 25px 20px 10px !important
    }
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
  .promoCode {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--primary-color);
    &:hover {
      cursor: pointer;
    }
  }
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
  .form-group {
    margin-bottom: 1rem;
  }
  .form-control {
      display: block;
      width: 100%;
      height: calc(2.5em + 5px);
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
  select.form-control {
      height: calc(2.5em + 5px);
      border-radius: 0;
      border: 1px solid rgba(0,0,0,.02);
      -webkit-border-radius: 0;
      margin-top: 5px;
      background: #f7f7f7;
      -webkit-appearance: none;
  }
  .label-style {
      margin-bottom: .5em;
      font-weight: bold;
      font-size: 1rem;
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
        span,
        a {
          color: var(--primary-color);
          font-weight: 600;
          padding-left: 3px;
        }
      }
      h4 {
        font-size: 1.1em;
        font-weight: bolder;
        margin: 0 0 6px;
      }
      h5 {
        font-size: 1em;
        font-weight: 500;
        margin: 0 0 10px;
      }
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
    .emailContainer {
      display: flex;
      flex-direction: row;
      align-items: baseline;
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
    .bottomImage {
      display: flex;
      img {
          width: 50px
          height: 50px;
          object-fit:contain;
          margin-right: 15px;
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
`;

const RowHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Col12 = styled.div`
  width: 100%;
  flex: 0 0 100%;
  padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;
const Col9 = styled.div`
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
`;
const Col1 = styled.div`
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  box-sizing: border-box;
`;
const Col2 = styled.div`
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  box-sizing: border-box;
`;
const Col3 = styled.div`
  width: 30.333333%
  flex: 0 0 30.333333%;
  max-width: 30.333333%;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
`;
const Col8 = styled.div`
  width: 65%;
  flex: 0 0 65%;
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;

const Col4 = styled.div`
  width: 35%;
  flex: 0 0 35%;
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`;
const Col6 = styled.div`
    flex: 0 0 75%;
    max-width: 75%;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
    box-sizing: border-box;
`;
const Col5 = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 10px;
    position:relative;
    box-sizing: border-box;
`