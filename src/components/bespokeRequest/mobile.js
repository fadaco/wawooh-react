import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import Button from '../ui/Button';
import {NairaSign } from "../../config";
import { numberWithCommas} from "../../shared/Methods";

export default(props) => {
    const {presentPage} = props.defaultShow;
    const {nextPage} = props.defaultShow;
    const hideShow = props.hideShow;
    const category = props.list || [];
    const measurementList = props.measurementList || [];
    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value);
    };
    const properties = props.properties;
    return (
        <RequestContainer>
            <div className="inner-card">
                <RowHolder>       
                    <Col6>
                        <div className="styleImage">
                        {
                            properties.sideImage !== '' ?
                            <img src={properties.sideImage} alt={"styleimage"}/>
                            :
                            <div className="defaultImage">Select A Style</div>
                        }
                        </div>
                    </Col6>
                    <Col6>
                    <div className="styleImage">
                        <div className='priceHolder'>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around',padding:'0 10px'}}>
                                <div style={{flex:'0 0 50%'}}><h4 style={{marginBottom:'3px'}}>Budget</h4></div>
                                <div style={{color:'rgb(100,210,100)', fontWeight:'bold'}}>{NairaSign}{properties.budget !== '' ? numberWithCommas(properties.budget) : 0}</div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column', justifyContent:'space-evenly',padding:'0 10px'}}>
                                <div style={{flex:'0 0 50%'}}><h4 style={{marginBottom:'3px'}}>Expected Delivery</h4></div>
                                <div style={{fontWeight:'bold'}}>
                                {
                                        properties.timeOfDelivery !== '' || properties.deliverydate !== '' 
                                        ? properties.timeOfDelivery || properties.deliverydate
                                            : 
                                            <label className="label label-danger">No Date Selected</label>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col6>
                </RowHolder>
            </div> 
            <div className="inner-card">
                <div className="first-part" style={{display: (presentPage ? 'block' : 'none')}}>
                    <h5>Customize</h5>
                    <div className="formGroup">
                        <label htmlFor="" style={watchStyle.formTitle}>Select Category</label>
                        <select name="gender" value={props.gender} id="" className="formControl" onChange={props.change}>
                            <option value="0" hidden>Select</option>
                            {
                                category.map((item, index)=>{
                                    return (
                                        <option value={item.id} key={index}>{item.categoryName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="formGroup">
                        <label style={watchStyle.formTitle}>Height</label>
                        <RowHolder>
                            <Col6 style={{paddingLeft:'0'}}>
                            <select name="heightFeet" id="" className="formControl" onChange={_changeValues}>
                                <option value="0" hidden>Ft</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            {/* <SelectInput style={{background:'#f7f7f7 !important'}} placeholder={'Select Date'} formWidth={'50px'} formHeight={'30px'} /> */}
                            </Col6>
                            <Col6 style={{paddingRight:'0'}}>
                            <select name="heightInches" id="" className="formControl" onChange={_changeValues}>
                                <option value="0" hidden>In</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            </Col6>
                        </RowHolder>
                    </div>
                    <div className="formGroup">
                        <label style={watchStyle.formTitle}>Do you have a fabric?</label>
                        
                        <RowHolder>
                            <Col6 style={{paddingLeft:'0'}} className="fitnessType">
                                <div className="pretty p-svg p-round">
                                    <input type="radio" name="hasFabric" value={'Yes'}
                                            onChange={_changeValues} onClick={()=>props.toggleFabric('Yes')}/>
                                    <div className="state p-warning">
                                        <svg className="svg svg-icon" viewBox="0 0 20 20">
                                            <path
                                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                style={{stroke: 'white', fill: 'white'}}></path>
                                        </svg>
                                        <label className="pretty-label">Yes</label>
                                    </div>
                                </div>
                            </Col6>
                            <Col6 className="fitnessType">
                                <div className="pretty p-svg p-round">
                                    <input type="radio" name="hasFabric" value={'No'}
                                            onChange={_changeValues} onClick={()=>props.toggleFabric('No')}/>
                                    <div className="state p-warning">
                                        <svg className="svg svg-icon" viewBox="0 0 20 20">
                                            <path
                                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                style={{stroke: 'white', fill: 'white'}}></path>
                                        </svg>
                                        <label className="pretty-label">No</label>
                                    </div>
                                </div>
                            </Col6>
                        </RowHolder>
                        <RowHolder>
                            <Col12 style={{paddingLeft:'0',marginTop:'1.4em'}}>
                                {
                                    hideShow === 'Yes' ? (
                                        <div className="formGroup">
                                            <input name="fabricType" onChange={_changeValues} placeholder="Enter name" className="formControl" />
                                        </div>
                                    ):''
                                }
                                {
                                hideShow === 'No' ? (
                                    <div className="formGroup">
                                        <input name="fabricType" onChange={_changeValues} placeholder= "Enter preferred fabric" className="formControl" />
                                    </div>
                                ):''
                            }
                            </Col12>
                            
                        </RowHolder>
                    </div>
                    <div className="formGroup" style={{marginTop: '2rem'}}>
                        <Button
                            bgColor='#000'
                            textColor='#fff'
                            label='NEXT >'
                            style={{cursor: 'pointer'}}
                            onClick={props.nextPage}
                        />
                    </div>
                </div>
                <div className="second-part" style={{display: (nextPage ? 'block' : 'none')}}>
                    <h5>Customize</h5>
                        <div className="formGroup">
                            <label style={watchStyle.formTitle}>Select Measurement</label>
                            {
                                measurementList.length > 0 
                                ?
                                measurementList.map((item, index)=>{
                                    return (
                                        <RowHolder key={index}>
                                            <Col12 style={{padding: '0'}}>
                                                <div className="savedAdd" style={{
                                                    position: 'relative',
                                                    background: '#f7f7f7',
                                                    padding: '10px 0px 10px 1em',
                                                    marginTop: '1rem',
                                                    border: '1px solid rgba(0,0,0,.09)'
                                                }}>
                                                    <div className="pretty p-svg p-curve">
                                                        <div className="state p-warning">
                                                        <input onChange={_changeValues} type="radio" value={item.id} name="id"/>
                                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                                <path
                                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                                            </svg>
                                                            <label>
                                                                <strong>{item.name}</strong>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <RowHolder style={{paddingTop:'1.5em'}}>
                                                        <Col1 style={{padding:'0'}}><span className="measureAction">View</span></Col1> |
                                                        <Col2><span className="measureAction2">Remove</span></Col2>
                                                    </RowHolder>
                                                </div>
                                            </Col12>
                                        </RowHolder>                                       
                                    )     
                                })
                                :
                                <Button label="+ Add Measurement"/>
                            }                          
                            <RowHolder>
                                
                            </RowHolder>
                        </div>
                        <div className="formGroup">
                            <label style={watchStyle.formTitle}>Additional Information</label>
                            <Col12 style={{padding:'0'}}>
                            <textarea className="formControl" name ="note" value={props.note} onChange={_changeValues}/>
                            </Col12>
                        </div>
                        <div className="formGroup" style={{marginTop: '2rem'}}>
                            <Button
                                bgColor='#000'
                                textColor='#fff'
                                label='PLACE REQUEST'
                                onClick={props.saveData}
                                loading={props.loading}
                                style={{cursor: 'pointer'}}
                            />
                        </div>
                        <div className="formGroup">
                            <Link to='#' onClick={props.prevPage} className="measureBack"><i
                                className="fa fa-angle-left"></i> <span style={{paddingLeft:'10px'}}>Back</span></Link>
                        </div>
                    </div>
            </div>

        </RequestContainer>
    )
}

const RequestContainer =styled.div`
    padding: 3px 0;
    .first-part, .second-part {
        padding: 15px 0;
        background: var(--white-color);
        h5 {
            font-size: 1.2rem;
            display: flex;
            justify-content: left;
            text-transform: uppercase;
            margin: 0 0 2rem 0;
            font-weight: bold;
            color: #333;
            position: relative;
            &:after {
                content:'';
                position:absolute;
                width: 100%;
                border-bottom: 1px solid rgba(0,0,0,.4);
                bottom: -5px;
                left:0;
                min-height: 1px;
            }
        }
        .formControl {
            display: block;
            padding: 6px 15px 6px 10px;
            background: #f7f7f7;
            margin-top: .51em;
            border: 1px solid rgba(0, 0, 0, 0.02);
            border-radius: 0;
            width: 100%;
            height: calc(2.5em + 20px);
            font-size: 1rem;
            line-height: 1.5;
            outline: none;
            box-sizing: border-box;
            &:focus {
                border: 1px solid rgba(0, 0, 0, 0.2);
            }
        }
        textarea.formControl {
            height:130px; 
            width:100%;
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
        .pretty-label {
            vertical-align: middle;
            padding-left: 25%;
            font-weight: bold;
        }
        select.formControl {
            height: calc(2.5em + 20px);
            background: #f7f7f7;
            font-size: 13px;
            padding-left:12px;
            -webkit-appearance: none;
            -webkit-border-radius: 0px;
        }
        
        .fitnessType {
            .pretty {
                margin-top:1em;
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
                            font-size: .71em;
                            width: calc(2em + 8px);
                            height: calc(2em + 8px);
                            top:-3px;
                        }
                    }
                }
            }
        }
    }
    .first-part {
        
    }
    .second-part {
        padding: 15px 0rem;
        h4 {
            margin-top:3em;
            position: relative;
            &:after {
                content:'';
                width: 30%;
                position: absolute;
                border-bottom: 1px solid rgba(0,0,0,.3);
                top: -5px;
                left:0;
                height: 1px;
                margin: auto;
            }
        }
        .measureBack {
            display: flex;
            justify-content: center;
            color: #444;
            text-decoration: none;
            align-items: baseline;
            position: relative;
            &:hover {
                &:after {
                    content: '';
                    width: 15%;
                    margin: auto;
                    bottom: -5px;
                    border-bottom: 1px solid rgba(0,0,0,.3);
                    left: 0;
                    right: 0;
                    position: absolute;
                }
            }
        }
    }
    .inner-card {
        background: var(--white-color);
        padding:10px;
    }
    .styleImage {
        width: 100%;
        background: var(--white-color);
        img {
            width: 100%;
            object-fit: contain;
        }
        .priceHolder {
            background: var(--white-color);
            padding: 3rem 3px 3rem;
            position: relative;
            &:before {
                position:absolute;
                height: 100px;
                border: 1px solid rgba(0,0,0,.09);
                left:0;
                top:5em;
                content: '';
            }
        }
    }
    .formGroup {
        margin-bottom: 1rem;
    }
    .measureAction {
        color: #777;
        &:hover {
            cursor:pointer;
            color: var(--dark-color);
        }
    }
    .measureAction2 {
        display: flex;
        justify-content:center;
        color: #ddd;
        &:hover {
            cursor:pointer;
            color: var(--dark-color);
        }
    }
`
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
    width: 100%;
    flex: 0 0 100%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`
const Col2 = styled.div`
    width: 22%;
    flex: 0 0 22%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`
const Col1 = styled.div`
    width: 13%;
    flex: 0 0 13%;
    padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`
const watchStyle = {
    innerContainer: {
        padding: '5px'
    },
    formTitle: {
        color: '#777',
        marginBottom: '10px',
        fontSize: '15px',
        fontWeight: '600'
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
