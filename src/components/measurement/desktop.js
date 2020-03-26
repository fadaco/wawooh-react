import React from 'react';
import Button from '../ui/Button';
import Input from '../ui/InputField';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {TEST_PRODUCT_IMAGE} from '../../config';

export default (props) => {
    const {presentPage} = props.defaultShow;
    const {nextPage} = props.defaultShow;
    const hideShow = props.hideShow;

    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value);
    }

    return (
        <MeasurementContainer>
            <RowHolder>
                <Col3 style={{...watchStyle.innerContainer, background: '#f3f3f3'}}>
                    <div className="styleImage">
                        <img src={TEST_PRODUCT_IMAGE} alt={"styleimage"}/>
                    </div>
                    <div style={{background: '#fff', marginTop: '1em', padding: '10px 3px 3rem'}}>
                        <h3 style={{
                            paddingLeft: '.6rem',
                            color: '#f33e3e',
                            marginBottom: '9px',
                            marginTop: '0',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                        }}>Please Note!</h3>

                        <RowHolder>
                            <Col12>
                                <span style={{fontSize: '12px'}}>
                                    <strong><sup>1</sup>&frasl;
                                        <sub>4</sub></strong> inch should be enter as <strong>.25</strong>, <br/>
                                    <strong><sup>1</sup>&frasl;
                                        <sub>2</sub></strong> inch should be enter as as <strong>.5</strong> <br/>
                                    <strong><sup>3</sup>&frasl;
                                        <sub>4</sub></strong> inches should be enter as as <strong>.75</strong>.
                                </span>
                            </Col12>
                            <Col12 style={{paddingTop: '1rem'}}>
                                <span style={{fontSize: '13px'}}>
                                    E.g. <strong>3<sup>1</sup>&frasl;
                                    <sub>4</sub></strong> inches should be enter as <strong>3.25</strong>
                                </span>
                            </Col12>
                        </RowHolder>
                    </div>
                </Col3>
                <Col7 style={watchStyle.innerContainer}>

                    <div className="first-part" style={{display: (presentPage ? 'block' : 'none')}}>
                        <h5>New Measurement</h5>
                        <div className="form-group">
                            <label style={watchStyle.formTitle}>Measurement Name</label>
                            <Input formname="name" type="text" onChange={_changeValues}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="" style={watchStyle.formTitle}>Gender</label>
                            <select name="gender" value={props.gender} id="" className="formControl" onChange={_changeValues}>
                                <option value="0" hidden>Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="formGroup">
                            <h4>Select your fitness</h4>
                            <RowHolder>
                                <Col3>
                                    {
                                        hideShow === 'slim' ? (
                                            <img alt={'slim'} src={TEST_PRODUCT_IMAGE} style={{width: '100%'}}/>
                                        ):''
                                    }
                                </Col3>
                                <Col3>
                                {
                                    hideShow === 'regular' ? (
                                        <img alt={'regular'} src={TEST_PRODUCT_IMAGE} style={{width: '100%'}}/>
                                    ):''
                                }
                                </Col3>
                                <Col3>
                                {
                                    hideShow === 'trim' ? (
                                        <img alt={'trim'} src={TEST_PRODUCT_IMAGE} style={{width: '100%'}}/>
                                    ):''
                                }
                                </Col3>
                            </RowHolder>
                            <RowHolder>
                                <Col3 className="fitnessType">
                                    {/*<label>Slim Fit</label>*/}
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" id="slim" name="fitness" value={'Slim'}
                                               onChange={_changeValues} onClick={()=>props.fitnessImage('slim')}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label htmlFor="slim"></label>
                                        </div>
                                    </div>
                                </Col3>
                                <Col3 className="fitnessType">
                                    {/*<label>Regular Fit</label>*/}
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" id="regular" name="fitness" value={'Regular'}
                                               onChange={_changeValues} onClick={()=>props.fitnessImage('regular')}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label htmlFor="regular"></label>
                                        </div>
                                    </div>
                                </Col3>
                                <Col3 className="fitnessType">
                                    {/*<label>Trim Fit</label>*/}
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" id="trim" name="fitness" value={'Trim'}
                                               onChange={_changeValues} onClick={()=>props.fitnessImage('trim')}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label htmlFor="trim"></label>
                                        </div>
                                    </div>
                                </Col3>
                            </RowHolder>
                            <RowHolder style={{marginTop: '1rem'}}>
                                <Col3 className="fitnessType">
                                    <span>Slim fit</span>
                                </Col3>
                                <Col3 className="fitnessType">
                                    <span>Regular fit</span>
                                </Col3>
                                <Col3 className="fitnessType">
                                    <span>Trim fit</span>
                                </Col3>
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
                        <div className="formGroup">
                            <label style={{fontWeight: 'bold'}}>Unit</label>
                            <RowHolder>
                                <Col3 className="unitType">
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" id="inches" name="unit" value={'inches'} onChange={_changeValues}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label htmlFor="inches" style={{paddingLeft: '22%', verticalAlign: 'middle'}}>Inches</label>
                                        </div>
                                    </div>
                                </Col3>
                                <Col3 className="unitType">
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" id="centimeter" name="unit" value={'centimeter'} onChange={_changeValues}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label htmlFor="centimeter" style={{
                                                paddingLeft: '15%',
                                                verticalAlign: 'middle'
                                            }}>Centimeters</label>
                                        </div>
                                    </div>
                                </Col3>
                            </RowHolder>
                        </div>
                        <div className="formGroup">
                            <h4>Enter Measurement</h4>
                        </div>
                        <RowHolder>
                            <Col12 style={{paddingLeft: '0'}}>
                                <div style={{height: '200px'}}>
                                    <RowHolder>
                                        <Col3 style={{paddingLeft: '0'}}>
                                            <Input
                                                labelTitle='Ankle'
                                                type='number'
                                                formRadius='2px'
                                                formname='ankle'
                                                onChange={_changeValues}
                                                maxLength='3'
                                                style={{
                                                    background: '#f7f7f7',
                                                    height: 'calc(2em + 15px)',
                                                    fontSize: '13px'
                                                }}
                                            />
                                        </Col3>
                                        <Col3>
                                            <Input
                                                labelTitle='Biceps'
                                                type='number'
                                                formId=''
                                                formRadius='2px'
                                                formname='biceps'
                                                onChange={_changeValues}
                                                style={{
                                                    background: '#f7f7f7',
                                                    height: 'calc(2em + 15px)',
                                                    fontSize: '13px'
                                                }}

                                            />
                                        </Col3>
                                        <Col3>
                                            <Input
                                                labelTitle='Bust'
                                                type='number'
                                                formId=''
                                                formRadius='2px'
                                                formname='bust'
                                                onChange={_changeValues}
                                                style={{
                                                    background: '#f7f7f7',
                                                    height: 'calc(2em + 15px)',
                                                    fontSize: '13px'
                                                }}
                                            />
                                        </Col3>
                                        <Col3 style={{paddingLeft: '0'}}>
                                            <Input
                                                labelTitle='Crotch'
                                                type='number'
                                                formId=''
                                                formRadius='2px'
                                                formname='crotch'
                                                onChange={_changeValues}
                                                style={{
                                                    background: '#f7f7f7',
                                                    height: 'calc(2em + 15px)',
                                                    fontSize: '13px'
                                                }}
                                            />
                                        </Col3>
                                        <Col3>
                                            <Input
                                                labelTitle='Blouse Length'
                                                type='number'
                                                formId=''
                                                formRadius='2px'
                                                formname='blouselength'
                                                onChange={_changeValues}
                                                style={{
                                                    background: '#f7f7f7',
                                                    height: 'calc(2em + 15px)',
                                                    fontSize: '13px'
                                                }}
                                            />
                                        </Col3>
                                        <Col3>
                                            <Input
                                                labelTitle='Buba Length'
                                                type='number'
                                                formId=''
                                                formRadius='2px'
                                                formname='bubalength'
                                                onChange={_changeValues}
                                                style={{
                                                    background: '#f7f7f7',
                                                    height: 'calc(2em + 15px)',
                                                    fontSize: '13px'
                                                }}
                                            />
                                        </Col3>
                                    </RowHolder>
                                </div>
                            </Col12>
                        </RowHolder>
                        <div className="formGroup" style={{marginTop: '2rem'}}>
                            <Button
                                bgColor='#000'
                                textColor='#fff'
                                label='SAVE'
                                width='50%'
                                onClick={props.saveData}
                                style={{cursor: 'pointer'}}
                                loading={props.loading}
                            />
                        </div>
                        <div className="formGroup">
                            <Link to='#' onClick={props.prevPage} className="measureBack"><i
                                className="fa fa-arrow-left"></i> Back</Link>
                        </div>
                    </div>
                </Col7>
            </RowHolder>
        </MeasurementContainer>
    )
}

const MeasurementContainer = styled.div`
    padding:0;
    .first-part, .second-part {
        padding: 15px 6rem;
        h5 {
            font-size: 1.2rem;
            display: flex;
            justify-content: left;
            text-transform: uppercase;
            margin: 0 0 2rem 0;
            font-weight: bold;
            color: #333;
        }
        .formControl {
            display: block;
            padding: 6px 15px 6px 10px;
            background: #fff;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 0;
            width: 100%;
            height: calc(2.5em + 1px);
            font-size: 1rem;
            line-height: 1.5;
            outline: none;
            box-sizing: border-box;
        }
        select.formControl {
            height: calc(2em + 15px);
            background: #f7f7f7;
            font-size: 13px;
            padding-left:12px;
            -webkit-appearance: none;
            -webkit-border-radius: 0px;
        }
        .fitnessType, .unitType {
            text-align: center;
            img {
                width:100%
            }
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
                            top:unset;
                        }
                    }
                }
            }
        }
    }
    .first-part {
        
    }
    .second-part {
        padding: 0 1rem;
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
            &:hover {
                text-decoration:underline;
            }
        }
    }
    .unitType {
        padding-left: 0;
        text-align:left !important;
    }
    .styleImage {
        width: 100%;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
    .formGroup {
        margin-bottom: 1rem;
    }
`

const watchStyle = {
    innerContainer: {
        padding: '5px'
    },
    formTitle: {
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

const RowHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`
const Col7 = styled.div`
    width: 70%;
    flex: 0 0 70%;
    padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`
const Col3 = styled.div`
    width: 30%;
    flex: 0 0 30%;
    padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
`

const Col12 = styled.div`
    width: 100%;
    flex: 0 0 100%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`