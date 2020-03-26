import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import CustomModal from '../../ui/CustomModal';
import Input from '../../ui/InputField';
import {NavLink} from 'react-router-dom';
import {GET_TOKEN} from '../../../shared/Storage';
import {TEST_PRODUCT_IMAGE, NairaSign} from '../../../config';
import Measurement from "../../measurement";
import { numberWithCommas } from '../../../shared/Methods';
import AddressForm from '../../address'

export default(props) => {
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
            <CustomContainer>
                <div className="customerCont">
                    <h3>Customise your order</h3>
                    <RowHolder>
                        <Col12>
                            <div className="innerCard">
                                <div className="formGroup">
                                    <label style={watchStyle.labelStyle}>Quantity Needed?</label>
                                    <Input
                                        type="number"
                                        placeholder="Enter quantity"
                                        formRadius='0'
                                        formname='quantity'
                                        onChange={_changeValues}
                                        style={{border: 'none', padding: '15px 10px', background: '#f7f7f7'}}
                                    />
                                </div>
                            </div>
                        </Col12>
                    </RowHolder>
                </div>
                <div className="customerCont">
                    <RowHolder>
                        <Col12>
                            <div className="innerCard">
                                <div className="formGroup">
                                    <h4>Sizing</h4>
                                    <p style={watchStyle.span}>Click to choose the measurement for your order</p>
                                </div>
                            </div>
                            
                            {GET_TOKEN('token') ? <div>
                                {
                                    measurementList.map((item, index) => {
                                        return (
                                            <div key={index} style={watchStyle.sizeHolder}>
                                            <RowHolder>
                                                <Col6>
                                                    <div className="pretty p-svg p-curve">
                                                        <input type="radio" name="measurementId" id={item.id} value={item.id} onChange={_changeValues}/>
                                                        <div className="state p-warning">
                                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                                <path
                                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                                            </svg>
                                                            <label htmlFor={item.id}>{item.name}</label>
                                                        </div>
                                                    </div>
                                                </Col6>
                                                <Col6>
                                                    <div style={{padding: '0 15px'}}>
                                                        <i className="fa fa-pencil-alt" id={item.id}></i> Edit &nbsp;&nbsp; 
                                                        {/* <i className="fa fa-trash" id={item.id}></i> Delete */}
                                                    </div>
                                                </Col6>
                                            </RowHolder>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                :
                                <span style={{padding:'5px', background:'#555',color:'#fff', borderRadius:'4px'}}><NavLink to="/login" style={{color:'#fff'}}>Login</NavLink> to see saved measurement(s)</span>
                            }
                        </Col12>
                    </RowHolder>
                    <div style={watchStyle.addMeasurement}>
                        <Button
                            style={{cursor: 'pointer', margin: '0', borderRadius: '3px'}}
                            width={'70%'}
                            bgColor={'#fff'}
                            textColor="var(--primary-color)"
                            label="+ ADD NEW MEASUREMENT"
                            borderColor={"var(--primary-color)"}
                            onClick={props.openModal}
                        />
                    </div>
                </div>
                <div className="customerCont">
                    <RowHolder>
                        <Col12>
                            <div className="innerCard">
                                <div className="formGroup">
                                    <h4>Fabric</h4>
                                </div>
                            </div>
                        </Col12>
                    </RowHolder>
                    <RowHolder style={watchStyle.fabricSelector}>
                        <Col6 className="fabricType" style={{paddingLeft:'0', borderRight:'1px solid rgba(0,0,0,.2)'}}>
                            <div className="pretty p-svg p-round">
                                <input type="radio" name="fabricSelection" value={'haveFabric'} onClick={()=>{props.toggleFabric('haveFabric')}}/>
                                <div className="state p-warning">
                                    <svg className="svg svg-icon" viewBox="0 0 20 20">
                                        <path
                                            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                            style={{stroke: 'white', fill: 'white'}}></path>
                                    </svg>
                                    <label style={{paddingLeft: '11%', verticalAlign: 'middle', paddingTop: '.41em'}}>Select Fabric</label>
                                </div>
                            </div>
                        </Col6>
                        <Col6 className="fabricType" style={{padding:'0 10px'}}>
                            <div className="pretty p-svg p-round">
                                <input type="radio" name="fabricSelection" value={'selectFabric'} onClick={()=>{props.toggleFabric('selectFabric')}} />
                                <div className="state p-warning">
                                    <svg className="svg svg-icon" viewBox="0 0 20 20">
                                        <path
                                            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                            style={{stroke: 'white', fill: 'white'}}></path>
                                    </svg>
                                    <label style={{
                                        paddingLeft: '31%', display:'flex'
                                    }}>I Have my <br/ >own Fabric</label>
                                </div>
                            </div>
                        </Col6>
                    </RowHolder>
                </div>

                {
                    fabricShow === 'haveFabric' ? (
                        <div className="customerCont">
                            <RowHolder>
                                <Col12>
                                    <RowHolder style={{marginTop: '2em'}}>
                                    {
                                        materialPicture.length > 0 ?
                                        materialPicture.map((item, index)=> {
                                            return (
                                                <Col6 style={{paddingLeft: '0'}}>
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
                                                </Col6>
                                            )
                                        }) :
                                        <h4 style={{display:'flex',padding:'10px',margin: '0 auto',background: '#000',color: '#fff',justifyContent: 'center'}}>No Fabric Available</h4>
                                    }
                                    </RowHolder>
                                </Col12>
                            </RowHolder>
                        </div>
                    ):''
                }
                
                {
                    fabricShow === 'selectFabric' ? (
                        <div>
                            <div className="customerCont">
                                <h5 style={{marginBottom: '2px', fontSize: '1.3rem'}}>Fabric Pickup Information</h5>
                                <small style={{color: '#cd9933', fontSize: '13px', paddingTop: '1em'}}>*Your fabric will not
                                    be picked
                                    up until payment has been made
                                </small>
                                <Input
                                    customStyle={{marginTop: '1rem'}}
                                    labelTitle='Pick up Date'
                                    labelSize='14px'
                                    style={{background: '#f7f7f7', padding: '13px 0 13px 13px', borderRadius: '0'}}
                                    type='date'
                                    placeholder='Select Pickup Date'
                                    onChange={_changeValues}
                                    formname="materialPickupDate"
                                />
                                <h4>Pick up Address</h4>
                            </div>

                            <RowHolder>
                                <Col12 style={{padding: '0'}}>
                                    <div style={watchStyle.savedAddress}>
                                        <div style={watchStyle.addressSelector}>
                                            <h5 style={{fontSize: '1rem', margin: '0', color: '#444'}} onClick={props.showAddress}>Select from saved
                                                addresses</h5>
                                            <i className="fa fa-angle-down" onClick={props.showAddress}></i>
                                        </div>
                                        
                                        <div style={{display: (showAdd ? 'block':'none')}}>
                                        {
                                            userAddressList.map((item, index)=> {
                                                return (
                                                    <div key={index} className="savedAdd" style={watchStyle.showAddress}> 
                                                        <div className="pretty p-svg p-curve">
                                                        <input type="radio" value={item.id} onChange={_changeValues} name="materialPickUpAddressId"/>
                                                            <div className="state p-warning">
                                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                                </svg>
                                                                <label htmlFor={item.id}>
                                                                    <ul>
                                                                        <li><strong>{item.firstName} {item.lastName}</strong></li>
                                                                        <li>{item.address}</li>
                                                                        <li>{item.state}</li>
                                                                        <li>{item.phoneNo}</li>
                                                                    </ul>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                </Col12>
                            </RowHolder>

                            <div className="customerCont">
                                <Button
                                    style={{cursor: 'pointer', margin: '0', justifyContent: 'left', border: 'none'}}
                                    textColor={'var(--primary-color)'}
                                    label={'+ ADD NEW ADDRESS'}
                                    onClick={props.openAddressModal}
                                />
                            </div>
                        </div>
                    ): ''
                }
                <div className="customerCont">
                    <div className="innerCard">
                        <h4>Artwork</h4>
                    </div>
                    <RowHolder>
                        <Col12>
                            <RowHolder style={{padding: '1em 0'}}>
                            {
                                artWorkPicture.length > 0 ?
                                artWorkPicture.map((item, index)=>{
                                    return (
                                        <Col6 key={index} style={{paddingLeft: '0'}}>
                                            <div style={{margin: 'auto'}}>
                                                <ArtworkHolder className="hide-radio" style={{width:'auto'}}>
                                                    <input type="radio" name="artworkPictureId"
                                                            id={item.artworkPictureId}
                                                            value={TEST_PRODUCT_IMAGE} onClick={()=>props.updateArtwork(1200,'artworkPrice')} onChange={_changeValues}/>
                                                    <label htmlFor={item.artworkPictureId}>
                                                        <img src={TEST_PRODUCT_IMAGE} alt={'artwork'}/>
                                                    </label>
                                                </ArtworkHolder>
                                            </div>
                                        </Col6>
                                    )
                                }) :
                                <h4 style={{display:'flex',padding:'10px',margin: '0 auto',background: '#000',color: '#fff',justifyContent: 'center'}}>No Artwork Available</h4>
                            }
                            </RowHolder>
                        </Col12>
                    </RowHolder>
                </div>

                <div className="customerCont">
                    <div className="innerCard">
                        <h4>Additional Information</h4>
                    </div>
                    <Col12>
                        <textarea className="formControl" name ="notes" value={props.note} onChange={_changeValues}/>
                    </Col12>
                </div>
                <div className="customerCont">
                    <div className="innerCard">
                        <h4>Product Summary</h4>
                    </div>
                    <RowHolder>
                        <Col6>
                        {
                            productDetail.productColorStyleDTOS
                            ? <img style={{width:'100%'}} src={productDetail.productColorStyleDTOS[0].productPictureDTOS[0].picture} alt={'test-prod'}/>
                            : null
                        } 
                        </Col6>
                        <Col6>
                            <div style={{fontSize:'.91rem', padding:'10px 6px'}}>
                            <h4 style={{fontSize:'1rem'}}>{productDetail.name}</h4>
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
                    <Button
                        style={{cursor: 'pointer', margin: '0', borderRadius: '3px'}}
                        bgColor={'var(--dark-color)'}
                        textColor={'var(--white-color)'}
                        label={'PLACE ORDER'}
                        loading={props.loading}
                        onClick={props.addToCart}
                    />
                </div>
                <CustomModal
                    open={props.showModal}
                    onClose={props.openModal}
                    disableBackdropClick={true}
                    maxWidth="md"
                    onClick={props.openModal}
                    rootClass={'modal-mobile'}
                >
                    <Measurement/>
                </CustomModal>

                <CustomModal
                    open={props.showAddModal}
                    onClose={props.openAddressModal}
                    disableBackdropClick={true}
                    maxWidth="md"
                    onClick={props.openAddressModal}
                    rootClass={'modal-mobile'}
                >
                    <AddressForm/>
                </CustomModal>
            </CustomContainer>
        </div>
    )
}

const CustomContainer = styled.div`
    margin: 0;
    box-sizing: border-box;
    h3 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 400;
        position: relative;
        margin-bottom: 2rem;
        margin-top:0;
        padding-top:14px;
    }
    h3:after {
        position: absolute;
        content:'';
        border-bottom: 1px solid rgba(0,0,0,.09);
        width: 84%;
        margin: auto;
        bottom: -10px;
        right: 0;
        left: 0;
    }
    h4 {
      text-align: left;
      font-size: 1.3rem;
      font-weight: bold;
      position: relative;
      margin-top:0;
      padding-top:14px;
      &:after {
          position: absolute;
          content:'';
          border-bottom: 1px solid rgba(0,0,0,.09);
          width: 50%;
          margin: auto;
          bottom: -10px;
          left: 0;
      }
  }
    .customerCont {
        background: var(--white-color);
        height: 100%;
        margin-bottom: 5px;
        padding: 2px 15px;
    }
    .innerCard {
        padding: 0;
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
    .but {
        &:hover {
            border-bottom:1px solid var(--primary-color);
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
    .fabricType {
        img {
            width:100%
        }
        .pretty {
            .state {
                label {
                    &:after, &:before {
                        width: calc(2em + 1px);
                        height: calc(2em + 1px);
                        top:0;
                    }
                }
            }
            &.p-svg {
                .state {
                    .svg {
                        font-size: .7em;
                        width: calc(2em + 8px);
                        height: calc(2em + 8px);
                        top:0;
                    }
                }
            }
        }
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
    box-sizing: border-box;
`

const Col6 = styled.div`
    width: 50%;
    flex: 0 0 50%;
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
        height: '140px',
        borderRadius: '5px',
        margin: '3em auto',
        border: '1px solid rgba(0,0,0,.3)',
        padding: '3rem 6rem',
        boxSizing: 'border-box'
    },
    titleHead: {
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '0'
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
        fontSize: '1rem',
        paddingTop: '0',
        margin: '0'
    },
    sizeHolder: {
        padding: '7px 0',
        borderBottom: '1px solid rgba(0,0,0,.09)',
        marginBottom: '5px'
    },
    addMeasurement: {
        margin: '1em 0'
    },
    fabricSelector: {
        margin: '0',
        height:'50px',
        padding:'15px 0'
    },
    addressSelector: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    savedAddress: {
        padding: '10px 15px',
        background: '#f3f3f3f3'
    },
    showAddress: {
        paddingTop: '20px'
    }
}
const ArtworkHolder = styled.div`
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
`