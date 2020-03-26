import React from 'react';
import styled from 'styled-components';
import Button from '../../../ui/Button';
import SelectInput from '../../../ui/SelectField';
import { MONTHNUMBER, MONTH, YEAR, LOGGER } from '../../../../shared/Methods';
import { connect } from 'react-redux';

const PreferenceContainer = styled.div`
 width: 73%;
 .personalTitle {
     background: var(--white-color);
     padding: 23px;
     display: flex;
     justify-content: space-between;
     .personalAddtitle {
         font-size: 30px;
         font-weight: bold;
        }
     .changePassword {
         border: 1px solid #000000;
         padding: 10px;
         font-size: 14px;
        }
    }
    .addressBook {
        background: var(--white-color);
        padding: 23px 11px;
        margin-top:20px;
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
                        top:unset;
                    }
                }
            }
        }
`;

const Preference = (props) => {
    const user = props.userInfo;
    LOGGER('USER', props);
    const saveData = () => {};
    return (
        <PreferenceContainer>
             <div className="personal">
                <div className="personalTitle">
                    <div className="personalAddtitle">Personal Details</div>
                    {/* <div className="changePassword">CHANGE PASSWORD?</div> */}
                </div>

                <div className="addressBook">
                    <RowHolder>
                    <Col6>
                        <div className="form-group">
                            <label className="label-style">First Name</label>
                            <input onChange={props.change} value={user.firstName} type="text" name="firstName" className="form-control"/>
                        </div>
                    </Col6>
                    
                    <Col6>
                        <div className="form-group">
                            <label className="label-style">Last Name</label>
                            <input onChange={props.change} value={user.lastName} type="text" name="lastName" className="form-control"/>
                        </div>
                    </Col6>
                    <Col6>
                        <div className="form-group">
                            <label className="label-style">Phone Number</label>
                            <input onChange={props.change} value={user.phoneNo === null ? '': user.phoneNo} type="tel" name="phoneNo" className="form-control"/>
                        </div>
                    </Col6>
                    
                    <Col6>
                        <div className="form-group">
                            <label className="label-style">Email Address</label>
                            <input onChange={props.change} value={user.email} readOnly type="email" name="email" className="form-control"/>
                        </div>
                    </Col6>
                    <Col6>
                    <div className="form-group">
                    <label className="label-style">Date of Birth</label>
                        <RowHolder>
                            <Col3 style={{paddingLeft:'0'}}><SelectInput style={{background:'#f7f7f7 !important'}} placeholder={'Select Date'} formWidth={'50px'} formHeight={'30px'}  options={MONTHNUMBER()}/></Col3>
                            <Col3><SelectInput style={{background:'#f7f7f7 !important'}} placeholder={'Select Month'} formWidth={'200px'} formHeight={'30px'}  options={MONTH()}/></Col3>
                            <Col3  style={{paddingRight:'0'}}><SelectInput style={{background:'#f7f7f7 !important'}} placeholder={'Select Year'} formHeight={'30px'} options={YEAR()}/></Col3>
                        </RowHolder>
                    </div>
                    </Col6>
                    <Col6>
                    <div className="form-group">
                        <label className="label-style" style={{paddingLeft: '10px'}}>Gender</label>
                        <RowHolder>
                            <Col6 className="fitnessType">
                                <div className="pretty p-svg p-round">
                                    <input type="radio" name="gender" value={'Male'}
                                            onChange={props.change} />
                                    <div className="state p-warning">
                                        <svg className="svg svg-icon" viewBox="0 0 20 20">
                                            <path
                                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                style={{stroke: 'white', fill: 'white'}}></path>
                                        </svg>
                                        <label style={{paddingLeft:'20%',verticalAlign:'middle'}}>Male</label>
                                    </div>
                                </div>
                            </Col6>
                            <Col6 className="fitnessType">
                                <div className="pretty p-svg p-round">
                                    <input type="radio" name="gender" value={'Female'}
                                            onChange={props.change} />
                                    <div className="state p-warning">
                                        <svg className="svg svg-icon" viewBox="0 0 20 20">
                                            <path
                                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                style={{stroke: 'white', fill: 'white'}}></path>
                                        </svg>
                                        <label style={{paddingLeft:'20%',verticalAlign:'middle'}}>Female</label>
                                    </div>
                                </div>
                            </Col6>
                        </RowHolder>
                    </div>
                    </Col6>
                        <div style={{color: 'red', fontSize: 14, magin: '5px 0'}}>{props.error}</div>
                    </RowHolder>
                    <RowHolder style={{justifyContent: 'flex-end'}}>
                        <Col3><Button loading={props.loading} label="UPDATE CHANGES" onClick={props.saveData} bgColor="#000" textColor="#fff"/></Col3>
                    </RowHolder>
    
                </div>
                <div className="addressBook">
                    <RowHolder>
                        <Col3>
                            <div className="form-group">
                                <label className="label-style">Old Password</label>
                                <input onChange={props.change} type="password" name="old" className="form-control"/>
                            </div>
                        </Col3>
                        <Col3>
                        <div className="form-group">
                                <label className="label-style">New Password</label>
                                <input onChange={props.change} type="password" name="new" className="form-control"/>
                            </div>
                        </Col3>
                        <Col3>
                            <div className="form-group">
                                <label className="label-style">Confirm Password</label>
                                <input onChange={props.change} type="password" name="confirmNew" className="form-control"/>
                            </div>
                        </Col3>
                    </RowHolder>
                    <RowHolder style={{justifyContent: 'flex-end'}}>
                        <Col3><Button loading={props.loading} label="UPDATE PASSWORD" onClick={saveData} bgColor="#000" textColor="#fff"/></Col3>
                    </RowHolder>
                </div>
            </div>
        </PreferenceContainer>
    );
}

const RowHolder = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Col3 = styled.div`
    flex: 0 0 33%;
    max-width: 33%;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
    box-sizing: border-box;
`

const Col6 = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
    box-sizing: border-box;
`

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, {})(Preference);