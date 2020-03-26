import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import CustomModal from '../../ui/CustomModal';
import Input from '../../ui/InputField';
import {NavLink} from 'react-router-dom';
import {GET_TOKEN} from '../../../shared/Storage';
import Measurement from '../../measurement';
import {TEST_PRODUCT_IMAGE, NairaSign} from '../../../config';
import { numberWithCommas } from '../../../shared/Methods';
import AddressForm from '../../address'

export default (props) => {
    const measurementList = props.measurementList || [];
    const userAddressList = props.userAddressList || [];

    const productDetail = props.productDetails;

    const artWorkPicture = productDetail.bespokeProductDTO ? productDetail.bespokeProductDTO.artPictureDTOS : [];
    const materialPicture = productDetail.bespokeProductDTO ? productDetail.bespokeProductDTO.materialPicture : [];

    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value);
    };

    const showAdd = props.showAdd;
    const fabricShow = props.fabricShow;

    const allTotal = props.fabPrice + props.artPrice + productDetail.amount;
    return (
        <div>
            <CustomModal
                open={props.showModal}
                onClose={props.openModal}
                disableBackdropClick={true}
                maxWidth="md"
                onClick={props.openModal}
                rootClass={'modal-div'}
            >
                <Measurement/>
            </CustomModal>

            <CustomContainer>
                <RowHolder>
                    <Col7>
                        <div className="customerCont">
                            <h3>Customize your order</h3>
                            <div className="innerCard">
                            <div className="formGroup">
                                    <label style={watchStyle.labelStyle}>Quantity Needed?</label>
                                    <input style={watchStyle.formQty} value={props.quantity} type="number" onChange={_changeValues} name='quantity' min='0' onInput="validity.valid||(value='');"/>
                                    <span style={{fontSize:'12px', color:'red'}}>{props.errors.quantity}</span>
                                </div>
                                <div className="formGroup">
                                    <label style={watchStyle.labelStyle}>Sizing</label> <br/>
                                    <p style={watchStyle.span}>Click to choose the measurement for your order</p>
                                </div>
                                {GET_TOKEN('token') ?  
                                    <div style={watchStyle.sizeHolder}>
                                    {
                                        measurementList.map((item, index) => {
                                            return (
                                                <RowHolder key={index} style={{marginBottom:'10px'}}>
                                                    <Col3 style={{padding: '0'}}>
                                                        <div className="pretty p-svg p-curve">
                                                            <input type="radio" name='measurementId' key={item.id} value={item.id} onChange={_changeValues}/>
                                                            <div className="state p-warning">
                                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                                </svg>
                                                                <label>{item.name}</label>
                                                            </div>
                                                        </div>
                                                    </Col3>
                                                    <Col3>
                                                        <i className="fa fa-pencil-alt" style={{cursor:'pointer'}} id={item.id}></i> &nbsp;&nbsp;&nbsp;&nbsp; 
                                                        {/* <i className="fa fa-trash" id={item.id} style={{cursor:'pointer'}} onClick={props.delMeasure}></i> */}
                                                    </Col3>
                                                </RowHolder>
                                            )
                                        })
                                    }
                                </div>
                                : <span style={{padding:'5px', background:'#555',color:'#fff', borderRadius:'4px'}}><NavLink to="/login" style={{color:'#fff'}}>Login</NavLink> to see saved measurement(s)</span>
                                }
                                <div style={watchStyle.addMeasurement}>
                                    <h6 style={{fontSize: '13px', paddingLeft: '2rem', margin: '0 0 6px'}}>- or add
                                        -</h6>
                                    <Button
                                        style={{cursor: 'pointer', margin: '0', borderRadius: '3px'}}
                                        width={'30%'}
                                        bgColor={'#000'}
                                        textColor={'#fff'}
                                        label="NEW MEASUREMENT"
                                        onClick={props.openModal}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="customerCont">
                            <div className="innerCard" style={{paddingBottom:'2em'}}>
                                <h4>Fabric Selection</h4>
                                <RowHolder>
                                    <Col4 className="fabricType" style={{paddingLeft:'0'}}>
                                        <div className="pretty p-svg p-round">
                                            <input type="radio" name="fabricSelection" value={'haveFabric'} onClick={()=>{props.toggleFabric('haveFabric')}}/>
                                            <div className="state p-warning">
                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                    <path
                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                </svg>
                                                <label style={{paddingLeft: '15%', verticalAlign: 'middle'}}>Select Fabric</label>
                                            </div>
                                        </div>
                                    </Col4>
                                    <Col6 className="fabricType">
                                        <div className="pretty p-svg p-round">
                                            <input type="radio" name="fabricSelection" value={'selectFabric'} onClick={()=>{props.toggleFabric('selectFabric')}} />
                                            <div className="state p-warning">
                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                    <path
                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                </svg>
                                                <label style={{
                                                    paddingLeft: '10%',
                                                    verticalAlign: 'middle'
                                                }}>I Have my own Fabric</label>
                                            </div>
                                        </div>
                                    </Col6>
                                </RowHolder>
                                {
                                    fabricShow === 'haveFabric' ? (
                                        <RowHolder>
                                        <Col8>
                                            <RowHolder style={{marginTop: '2em'}}>
                                            {
                                                materialPicture.length > 0 ?
                                                materialPicture.map((item, index)=> {
                                                    return (
                                                        <Col3 style={{paddingLeft: '0'}}>
                                                            <div style={{margin: 'auto'}}>
                                                                <div className="hide-radio" style={{width:'auto'}}>
                                                                    <input type="radio" name="materialPictureId"
                                                                            id={item.materialPictureId}
                                                                            value={TEST_PRODUCT_IMAGE} onChange={_changeValues} onClick={()=>props.updateFabric(3100,'fabricPrice')}/>
                                                                    <label htmlFor={item.materialPictureId}>
                                                                        <img src={TEST_PRODUCT_IMAGE} alt={'artwork'}/>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </Col3>
                                                    )
                                                }) :
                                                <h4 style={{display:'flex',padding:'10px',margin: '0 auto',background: '#000',color: '#fff',justifyContent: 'center'}}>No Fabric Available</h4>
                                            }
                                            </RowHolder>
                                        </Col8>
                                    </RowHolder>
                                    ) : ''
                                }
                               {
                                   fabricShow === 'selectFabric' ? (
                                    <RowHolder>
                                    <Col12 style={{marginTop:'2em'}}>
                                        <h4 style={{marginBottom: '2px'}}>Fabric Pickup Information</h4>
                                        <small style={{color: '#cd9933', fontSize: '13px'}}>*Your fabric will not be picked
                                            up until payment has been made
                                        </small>
                                        <Input
                                            customStyle={{marginTop: '1rem'}}
                                            labelTitle='Pick up Date'
                                            labelSize='14px'
                                            style={{background: '#f7f7f7', paddingTop: '10px', width:'70%'}}
                                            type='date'
                                            placeholder='Select Pickup Date'
                                            onChange={_changeValues}
                                            formname="materialPickupDate"
                                        />
                                        <h4>Pick up Address</h4>
                                        <RowHolder>
                                            <Col6 className="fabricType" style={{paddingLeft:'0'}}>
                                                <div className="pretty p-svg p-round">
                                                    <input type="radio" name="address" value={'savedaddress'} onClick={()=>{props.toggleUserAddress('savedAddress')}} onChange={props.change}/>
                                                    <div className="state p-warning">
                                                        <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                            <path
                                                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                                style={{stroke: 'white', fill: 'white'}}></path>
                                                        </svg>
                                                        <label style={{paddingLeft: '7%', verticalAlign: 'middle'}}>Select from my saved Addresses</label>
                                                    </div>
                                                </div>
                                            </Col6>
                                            <Col4 className="fabricType">
                                                <div className="pretty p-svg p-round">
                                                    <input type="radio" name="address" value={'newaddress'} onClick={()=>{props.toggleUserAddress('newAddress')}} onChange={props.change}/>
                                                    <div className="state p-warning">
                                                        <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                            <path
                                                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                                style={{stroke: 'white', fill: 'white'}}></path>
                                                        </svg>
                                                        <label style={{
                                                            paddingLeft: '10%',
                                                            verticalAlign: 'middle'
                                                        }}>New Address</label>
                                                    </div>
                                                </div>
                                            </Col4>
                                        </RowHolder>
                                        {
                                            showAdd === 'savedAddress' ? (
                                                <div>

                                                        {
                                                            userAddressList.length > 0
                                                            ? userAddressList.map((item, index) => (
                                                                <RowHolder key={index}>
                                                                    <Col8 style={{padding: '0', marginTop:'2em'}}>
                                                                        <div className="savedAdd" style={{
                                                                            borderRadius: '7px',
                                                                            position: 'relative',
                                                                            background: '#f7f7f7',
                                                                            padding: '10px 0px 10px 1em',
                                                                            marginTop: '1rem'
                                                                        }}>
                                                                            <div className="pretty p-svg p-curve">
                                                                                <input type="radio" value={item.id} onChange={_changeValues} name="materialPickUpAddressId"/>
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
                                                                                            <li>{item.state}, {item.country}</li>
                                                                                            <li>{item.phoneNo}</li>
                                                                                        </ul>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Col8>
                                                                </RowHolder>
                                                            ))
                                                            : <RowHolder>
                                                                <Col8 style={{padding: '0', marginTop:'2em'}}>
                                                                        <div className="savedAdd" style={{
                                                                            borderRadius: '7px',
                                                                            position: 'relative',
                                                                            background: '#f7f7f7',
                                                                            padding: '10px 0px 10px 1em',
                                                                            marginTop: '1rem'
                                                                        }}>
                                                                            <span>No Address Found</span>
                                                                        </div>
                                                                </Col8>
                                                              </RowHolder>
                                                        }
                                                            
                                                        </div>
                                            ):''
                                        }
                                        
                                        {
                                            showAdd === 'newAddress' ? (
                                                <div style={{
                                                    borderRadius: '7px',
                                                    border: '1p solid #f7f7f7',
                                                    padding: '10px 2em',
                                                    marginTop: '2rem',
                                                    width:'80%'
                                                }}>
                                                    <AddressForm />
                                                </div>
                                            ):''
                                        }
                                </Col12>
                                </RowHolder>
                                   ): ''
                               }
                            </div>
                        </div>
                        <div className="customerCont">
                            <div className="innerCard">
                                <h4>Artwork Selection</h4>
                                <RowHolder>
                                    <Col8>
                                        <RowHolder style={{marginTop: '1em'}}>
                                        {
                                            artWorkPicture.length > 0 ?
                                            artWorkPicture.map((item, index)=>{
                                                return (
                                                    <Col3 key={index} style={{paddingLeft: '0'}}>
                                                        <div style={{margin: 'auto'}}>
                                                            <div className="hide-radio" style={{width:'auto'}}>
                                                                <input type="radio" name="artworkPictureId"
                                                                        id={item.artworkPictureId}
                                                                        value={TEST_PRODUCT_IMAGE} onClick={()=>props.updateArtwork(1200,'artworkPrice')} onChange={_changeValues}/>
                                                                <label htmlFor={item.artworkPictureId}>
                                                                    <img src={TEST_PRODUCT_IMAGE} alt={'artwork'}/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </Col3>
                                                )
                                            }) :
                                            <h4 style={{display:'flex',padding:'10px',margin: '0 auto',background: '#000',color: '#fff',justifyContent: 'center'}}>No Artwork Available</h4>
                                        }
                                        </RowHolder>
                                    </Col8>
                                </RowHolder>
                                
                            </div>
                        </div>
                        <div className="customerCont">
                            <div className="innerCard">
                                <h4>Additional Information</h4>
                                <Col12 style={{paddingRight:'0'}}>
                                    <textarea className="formControl" name ="notes" value={props.note} onChange={_changeValues}/>
                                </Col12>
                                <Button 
                                    bgColor='#000'
                                    label='PLACE ORDER'
                                    textColor='#fff'
                                    width='97%'
                                    style={{cursor:'pointer'}}
                                    loading={props.loading}
                                    onClick={props.addToCart}
                                />
                            </div>
                        </div>
                    </Col7>
                    <Col3>
                        <div className="customerCont">
                            <RowHolder>
                                <Col6>
                                {
                                    productDetail.productColorStyleDTOS
                                    ? <img style={{width:'100%'}} src={productDetail.productColorStyleDTOS[0].productPictureDTOS[0].picture} alt={'test-prod'}/>
                                    : null
                                }   
                                </Col6>
                                <Col6>
                                    <div style={{fontSize:'12px'}}>
                                    <h4>{productDetail.name}</h4>
                                    <div className="productDetail">
                                        <div>Sewing Price:</div>
                                        <div>{NairaSign}{numberWithCommas(3000)}</div>
                                    </div>
                                    {/* <div className="productDetail">
                                        <div>Fabric Cost:</div>
                                        <div>{NairaSign}{numberWithCommas(props.fabPrice)}</div>
                                    </div>
                                    <div className="productDetail">
                                        <div>Artwork Price:</div>
                                        <div>{NairaSign}{numberWithCommas(props.artPrice)}</div>
                                    </div> */}
                                    <div className="productDetail">
                                        <div>Total Price:</div>
                                        <div>{NairaSign}{numberWithCommas(allTotal)}</div>
                                    </div>
                                    </div>
                                </Col6>
                            </RowHolder>
                        </div> 

                        <div className="customerCont">
                            <div style={watchStyle.innerContainer}>
                                <h4 className="titleHead first">Watch this</h4>
                                <h5 className="titleHead second">To take measurements yourself</h5>
                                <div style={watchStyle.video}>
                                    <i className="fa fa-play fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </Col3>
                </RowHolder>
            </CustomContainer>
        </div>
    )
}

const CustomContainer = styled.div`
    margin: 1rem 5rem 3rem;
    box-sizing: border-box;
    h3 {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 400;
        position: relative;
        margin-bottom: 2rem;
        margin-top:0;
        &:after {
            position: absolute;
            content:'';
            border-bottom: 1px solid rgba(0,0,0,.09);
            width: 84%;
            margin: auto;
            bottom: -10px;
            right: 0;
            left: 0;
        }
    }
    .customerCont {
        background: var(--white-color);
        margin-bottom: 5px;
        padding: 15px;
    }
    .innerCard {
        padding: 0 2em 0 3.7em;
    }
    .productDetail {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 9px;
        div:first-child {
            flex: 0 0 50%;
        }
        div:last-child {
            font-weight: bold;
            color: rgb(40,200,140);
        }
    }
    .titleHead {
        text-align: center;
        color: var(--white-color);
        background: var(--dark-color);
        font-size: 15px;
        font-weight: 400
        &.first {
            margin: 0 auto 4px;
            width: 50%;
        }
        &.second {
            margin: auto;
            width: 100%;
        }
    }
    .hide-radio {
        left: -9999px;
        input[type=radio] {
          display: none;
          &:checked {
            + label {
            //   border: 1px solid var(--primary-color);
              border-radius: 10px;
              position: relative;
              &:before {
                content: "\f00c";
                font-family: FontAwesome;
                font-style: normal;
                font-weight: normal;
                text-decoration: inherit;
                color: #000;
                font-size: 18px;
                position: absolute;
                top: unset;
                right: 7px;
              }
            }
          }
           + label {
            > img {
              border: 1px solid #eee;
              width: 150px;
              height: 150px;
              transition: ease 0.5s all;
              object-position: center;
              object-fit: contain;
              border-radius: 10px;
            }
          }
        }
      }
    textarea.formControl {
        height:130px; 
        width:95%;
        border-radius:3px;
        resize:none;
        background:#f7f7f7;
        overflow-y:auto;
        outline:none;
        padding:10px;
        font-size: 1rem;
        &:focus {
            box-shadow:none;
            border: 1px solid var(--primary-color);
        }
    }
    select.formControl {
        display: block;
            padding: 6px 15px;
            background: var(--white-color);
            outline: none
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            width:  100%;
            font-size: 1rem;
            line-height: 1.5;
            height: calc(2.25rem + 7px);
            margin-top: 5px;
            box-sizing: border-box;
            &:focus {
                border: 1px solid var(--primary-color);
            }
    }
    .fitnessType, .fabricType {
        img {
            width:100%
        }
        .pretty {
            .state {
                label {
                    &:after, &:before {
                        width: calc(2em + 1px);
                        height: calc(2em + 1px);
                    }
                }
            }
            &.p-svg {
                .state {
                    .svg {
                        font-size: .7em;
                        width: calc(2em + 8px);
                        height: calc(2em + 8px);
                        top:-3px;
                    }
                }
            }
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
`
const RowHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
`
const Col12 = styled.div`
    width: 100%;
    flex: 0 0 100%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`
const Col8 = styled.div`
-webkit-box-flex: 0;
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
  box-sizing: border-box;
`
const Col7 = styled.div`
    width: 70%;
    flex: 0 0 70%;
    position: relative;
    padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`
const Col3 = styled.div`
    width: 30%;
    flex: 0 0 30%;
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`
const Col4 = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`
const Col6 = styled.div`
    width: 50%;
    flex: 0 0 50%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`

const watchStyle = {
    innerContainer: {
        padding: '15px',
        boxSizing: 'border-box'
    },
    formTitle: {
        marginBottom: '10px',
        fontSize: '15px',
        fontWeight: '600'
    },
    video: {
        width: '75%',
        height: '130px',
        borderRadius: '5px',
        margin: '10px auto',
        border: '1px solid rgba(0,0,0,.3)',
        padding: '3rem 5rem',
        boxSizing: 'border-box'
    },
    labelStyle: {
        marginBottom: '.6rem',
        fontWeight: 'bold'
    },
    formQty: {
        display: 'block',
        padding: '12px 15px',
        background: '#f7f7f7',
        border: '1px solid rgba(0, 0, 0, 0.01)',
        borderRadius: '0',
        marginTop: '1rem',
        outline: 'none',
        width: '40%',
        lineHeight: '1.6',
        boxSizing: 'border-box'
    },
    span: {
        fontSize: '13px',
        paddingTop: '6px',
        margin: '0'
    },
    sizeHolder: {
        height: '100px',
        overflowY: 'auto',
        padding: '10px 10px',
        border: '1px solid rgba(0,0,0,.03)',
        borderRadius: '5px'
    },
    addMeasurement: {
        marginTop: '1em'
    }
}