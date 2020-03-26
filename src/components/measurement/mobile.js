import React from 'react';
import Button from '../ui/Button';
import Input from '../ui/InputField';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {TEST_PRODUCT_IMAGE} from '../../config';

export default (props) => {
    const {presentPage} = props.defaultShow;
    const {nextPage} = props.defaultShow;
    const {thirdPage} = props.defaultShow;
    const hideShow = props.hideShow;

    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value);
    }

    return (
        <MeasurementContainer>
            <RowHolder>
                <Col12 style={watchStyle.innerContainer}>
                    <div className="first-part" style={{display: (presentPage ? 'block' : 'none')}}>
                        <h5>New Measurement</h5>
                        <div className="formGroup">
                            <label>Measurement Name</label>
                            <Input type='text' onChange={_changeValues} formname='name'/>
                            {/*<input type="text" name="name" className="formControl"*/}
                            {/*onChange={props.change}/>*/}
                        </div>

                        <div className="form-group">
                            <label htmlFor="" style={watchStyle.formTitle}>Gender</label>
                            <select name="gender" onChange={_changeValues} className='formControl'>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="formGroup">
                            <h4>Select your fitness</h4>
                            <RowHolder>
                                <Col3>
                                    {
                                        hideShow === 'slim' ? (
                                            <img alt={'slim'} src={TEST_PRODUCT_IMAGE} style={{width: '100%'}}/>
                                        ) : ''
                                    }
                                </Col3>
                                <Col3>
                                    {
                                        hideShow === 'regular' ? (
                                            <img alt={'regular'} src={TEST_PRODUCT_IMAGE} style={{width: '100%'}}/>
                                        ) : ''
                                    }
                                </Col3>
                                <Col3>
                                    {
                                        hideShow === 'trim' ? (
                                            <img alt={'trim'} src={TEST_PRODUCT_IMAGE} style={{width: '100%'}}/>
                                        ) : ''
                                    }
                                </Col3>
                            </RowHolder>
                            <RowHolder>
                                <Col3 className="fitnessType">
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" name="fitness" value={'Slim'} onChange={_changeValues}
                                               onClick={() => props.fitnessImage('slim')}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label></label>
                                        </div>
                                    </div>
                                </Col3>
                                <Col3 className="fitnessType">
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" name="fitness" value={'Slim'} onChange={_changeValues}
                                               onClick={() => props.fitnessImage('regular')}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label></label>
                                        </div>
                                    </div>
                                </Col3>
                                <Col3 className="fitnessType">
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" name="fitness" value={'Trim'} onChange={_changeValues}
                                               onClick={() => props.fitnessImage('trim')}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label></label>
                                        </div>
                                    </div>
                                </Col3>
                            </RowHolder>
                            <RowHolder>
                                <Col3><label className="fitName">Slim</label></Col3>
                                <Col3><label className="fitName">Regular</label></Col3>
                                <Col3><label className="fitName">Trim</label></Col3>
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
                                <Col6 className="unitType">
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" name="unit" onChange={_changeValues}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label
                                                style={{paddingLeft: '22%', verticalAlign: 'middle'}}>Inches</label>
                                        </div>
                                    </div>
                                </Col6>
                                <Col6 className="unitType">
                                    <div className="pretty p-svg p-round">
                                        <input type="radio" name="unit" onChange={_changeValues}/>
                                        <div className="state p-warning">
                                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                <path
                                                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                    style={{stroke: 'white', fill: 'white'}}></path>
                                            </svg>
                                            <label style={{
                                                paddingLeft: '15%',
                                                verticalAlign: 'middle'
                                            }}>Centimeters</label>
                                        </div>
                                    </div>
                                </Col6>
                            </RowHolder>
                        </div>
                        <div style={{
                            background: '#f7f7f7',
                            marginTop: '2em',
                            padding: '10px 1rem',
                            textAlign: 'center'
                        }}>
                            <h3 style={{
                                paddingLeft: '.6rem',
                                color: '#f33e3e',
                                marginBottom: '9px',
                                marginTop: '0',
                                fontSize: '1rem',
                                fontWeight: 'bold'
                            }}>Please Note!</h3>

                            <RowHolder>
                                <Col12 style={{padding: '0'}}>
                                        <span style={{fontSize: '.91rem'}}>
                                            <strong><sup>1</sup>&frasl;
                                                <sub>4</sub></strong> inch should be enter as <strong>.25</strong>, <br/>
                                            <strong><sup>1</sup>&frasl;
                                                <sub>2</sub></strong> inch should be enter as as <strong>.5</strong> <br/>
                                            <strong><sup>3</sup>&frasl;
                                                <sub>4</sub></strong> inches should be enter as as <strong>.75</strong>.
                                        </span>
                                </Col12>
                                <Col12 style={{padding: '1rem 0 0'}}>
                                        <span style={{fontSize: '.91rem'}}>
                                            E.g. <strong>3<sup>1</sup>&frasl;
                                            <sub>4</sub></strong> inches should be enter as <strong>3.25</strong>
                                        </span>
                                </Col12>
                            </RowHolder>
                        </div>
                        <div className="formGroup" style={{marginTop: '3em'}}>
                            <h3 style={{fontSize: '1em', textAlign: 'center', fontWeight: '400'}}>Now, lets get
                                your Measurements!</h3>
                        </div>
                        <div className="formGroup" style={{marginTop: '2rem'}}>
                            <Button
                                bgColor='#000'
                                textColor='#fff'
                                label='NEXT'
                                style={{cursor: 'pointer'}}
                                onClick={props.thirdPage}
                            />
                        </div>
                        <div className="formGroup">
                            <Link to='#' onClick={props.prevPage} className="measureBack"><i
                                className="fa fa-arrow-left"></i> Back</Link>
                        </div>
                    </div>
                    {/* third part */}
                    <div className="second-part" style={{display: (thirdPage ? 'block' : 'none')}}>
                        <div className="formGroup">
                            <div style={{
                                background: '#cd9933',
                                padding: '15px 1em',
                                width: '60%',
                                margin: 'auto',
                                borderRadius: '3px',
                                color: '#fff',
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}>
                                <i className="fa fa-play"></i> Watch Video
                            </div>
                        </div>
                        <div className="formGroup">
                            <div style={{height: '200px', border: '1px solid rgba(0,0,0,.3)'}}>

                            </div>
                        </div>
                        <div className="formGroup">
                            <h4 style={{textAlign: 'center'}}>Enter Measurement</h4>
                        </div>
                        <RowHolder>
                            <div style={{height: '200px', border: '1px solid rgba(0,0,0,.02)', overflowY:'auto'}}>
                                <RowHolder>
                                    <Col6>
                                        <Input
                                            labelTitle='Ankle'
                                            type='number'
                                            formRadius='2px'
                                            formname='ankle'
                                            onChange={_changeValues}
                                            style={{
                                                background: '#f7f7f7',
                                                height: 'calc(2em + 15px)',
                                                fontSize: '13px'
                                            }}
                                        />
                                    </Col6>
                                    <Col6>
                                        <Input
                                            labelTitle='Biceps'
                                            type='number'
                                            formRadius='2px'
                                            formname='biceps'
                                            onChange={_changeValues}
                                            style={{
                                                background: '#f7f7f7',
                                                height: 'calc(2em + 15px)',
                                                fontSize: '13px'
                                            }}

                                        />
                                    </Col6>
                                    <Col6>
                                        <Input
                                            labelTitle='Bust'
                                            type='number'
                                            formRadius='2px'
                                            formname='bust'
                                            onChange={_changeValues}
                                            style={{
                                                background: '#f7f7f7',
                                                height: 'calc(2em + 15px)',
                                                fontSize: '13px'
                                            }}
                                        />
                                    </Col6>
                                    <Col6>
                                        <Input
                                            labelTitle='Crotch'
                                            type='number'
                                            formRadius='2px'
                                            formname='crotch'
                                            onChange={_changeValues}
                                            style={{
                                                background: '#f7f7f7',
                                                height: 'calc(2em + 15px)',
                                                fontSize: '13px'
                                            }}
                                        />
                                    </Col6>
                                    <Col6>
                                        <Input
                                            labelTitle='Blouse Length'
                                            type='number'
                                            formRadius='2px'
                                            formname='blouselength'
                                            onChange={_changeValues}
                                            style={{
                                                background: '#f7f7f7',
                                                height: 'calc(2em + 15px)',
                                                fontSize: '13px'
                                            }}
                                        />
                                    </Col6>
                                    <Col6>
                                        <Input
                                            labelTitle='Buba Length'
                                            type='number'
                                            formRadius='2px'
                                            formname='bubalength'
                                            onChange={_changeValues}
                                            style={{
                                                background: '#f7f7f7',
                                                height: 'calc(2em + 15px)',
                                                fontSize: '13px'
                                            }}
                                        />
                                    </Col6>
                                </RowHolder>
                            </div>
                        </RowHolder>
                        <RowHolder style={{marginTop:'10px'}}>
                            <Col6>
                                <div className="formGroup" style={{display: 'flex', paddingTop: '1.5em'}}>
                                    <Link to='#' onClick={props.prevPage} className="measureBack"><i
                                        className="fa fa-arrow-left"></i> Back</Link>
                                </div>
                            </Col6>
                            <Col6 style={{padding: '0'}}>
                                <div className="formGroup">
                                    <Button
                                        bgColor='#000'
                                        textColor='#fff'
                                        label='SAVE'
                                        onClick={props.saveData}
                                        style={{cursor: 'pointer'}}
                                        loading={props.loading}
                                    />
                                </div>
                            </Col6>
                        </RowHolder>
                    </div>
                </Col12>
            </RowHolder>
        </MeasurementContainer>
    )
}

const MeasurementContainer = styled.div`
    padding:0;
    .first-part, .second-part {
        padding: 0;
        h5 {
            font-size: 1.2rem;
            display: flex;
            justify-content: left;
            text-transform: uppercase;
            margin: -1.5rem 0 2rem 0;
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
            box-sizing: border-box;
            outline: none;
        }
        select.formControl {
            height: calc(2em + 15px);
            background: #f7f7f7;
            font-size: 13px;
            padding-left:12px;
            -webkit-appearance: none;
            -webkit-border-radius: 0px;
        }
        .fitName {
            display: flex;
            justify-content: center;
            padding-top: 1em;
            font-weight: bold;
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
        padding: 0;
        h4 {
            margin-top:3em;
            position: relative;
            &:after {
                content:'';
                width: 45%;
                position: absolute;
                border-bottom: 1px solid rgba(0,0,0,.3);
                bottom: -5px;
                left:0;
                right:0;
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
const Col3 = styled.div`
    width: 30%;
    flex: 0 0 30%;
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

const Col12 = styled.div`
    width: 100%;
    flex: 0 0 100%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`