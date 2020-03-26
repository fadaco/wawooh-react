import React from 'react';
import styled from 'styled-components';
import Button from '../../../ui/Button';
import SelectInput from '../../../ui/SelectField';
import { MONTHNUMBER, MONTH, YEAR } from '../../../../shared/Methods';
import { connect } from 'react-redux';

const PersonalDetailContainer = styled.div`
.personal {
    
    .personalTitle {
        background:#fff;
        text-align: center;
        padding: 15px 15px;
        font-weight: bold;
        color: var(--text-color);
        border-bottom: 1px solid #c1c1c1;
    }
    .inputHolder {
        padding:10px;
       .inputHolderText {
           color: var(--text-color);
           font-weight: 600;
       }
       .selectInput, .genderName {
           display: flex;
           justify-content: space-between;
        }
     }
     .btnTabs {
         width: 60%;
         display: flex;
         justify-content: space-between;
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
        margin-top: 7px;
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
        color: #999;
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

const PersonalDetail = (props) => {
    const user = props.userInfo;
    return (
        <PersonalDetailContainer>
            <div className="personal">
                <div className="personalTitle">
                    <div className="btnTabs" onClick={() => props.onclick('landing')}><div><i className="fa fa-angle-left"></i> </div>
                    <div>Personal Details</div>
                    </div>
                </div>

                <div className="addressBook">
                    <RowHolder>
                    <Col12>
                        <div className="form-group">
                            <label className="label-style">First Name</label>
                            <input onChange={props.change} value={user.firstName} type="text" name="firstName" className="form-control"/>
                        </div>
                    </Col12>
                    
                    <Col12>
                        <div className="form-group">
                            <label className="label-style">Last Name</label>
                            <input onChange={props.change} value={user.lastName} type="text" name="lastName" className="form-control"/>
                        </div>
                    </Col12>
                    <Col12>
                        <div className="form-group">
                            <label className="label-style">Phone Number</label>
                            <input onChange={props.change} value={user.phoneNo === null ? '': user.phoneNo} type="tel" name="phoneno" className="form-control"/>
                        </div>
                    </Col12>
                    
                    <Col12>
                        <div className="form-group">
                            <label className="label-style">Email Address</label>
                            <input onChange={props.change} value={user.email} readOnly type="email" name="email" className="form-control"/>
                        </div>
                    </Col12>
                        <div style={{color: 'red', fontSize: 14, magin: '5px 0'}}>{props.error}</div>
                    </RowHolder>
                    <div className="form-group">
                        <label className="label-style" style={{paddingLeft: '10px'}}>Date of Birth</label>
                        <RowHolder>
                            <Col3><SelectInput placeholder={'Select Date'} formWidth={'50px'} formHeight={'30px'}  options={MONTHNUMBER()}/></Col3>
                            <Col3><SelectInput placeholder={'Select Month'} formWidth={'200px'} formHeight={'30px'}  options={MONTH()}/></Col3>
                            <Col3><SelectInput placeholder={'Select Year'} formHeight={'30px'} options={YEAR()}/></Col3>
                        </RowHolder>
                    </div>
                    <div className="form-group">
                        <label className="label-style" style={{paddingLeft: '10px'}}>Gender</label>
                        <RowHolder>
                            <Col6 className="fitnessType">
                            {/*<label>Regular Fit</label>*/}
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
                                {/*<label>Trim Fit</label>*/}
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
                    <RowHolder style={{justifyContent: 'flex-end'}}>
                        <Col12><Button loading={props.loading} label="UPDATE CHANGES" onClick={() => props.saveDataMy(user)} bgColor="#000" textColor="#fff"/></Col12>
                    </RowHolder>
                </div>
                <div className="addressBook">
                    <RowHolder>
                        <Col12>
                            <div className="form-group">
                                <label className="label-style">Old Password</label>
                                <input onChange={props.change} type="password" name="old" className="form-control"/>
                            </div>
                        </Col12>
                        <Col12>
                        <div className="form-group">
                                <label className="label-style">New Password</label>
                                <input onChange={props.change} type="password" name="new" className="form-control"/>
                            </div>
                        </Col12>
                        <Col12>
                            <div className="form-group">
                                <label className="label-style">Confirm Password</label>
                                <input onChange={props.change} type="password" name="confirmNew" className="form-control"/>
                            </div>
                        </Col12>
                    </RowHolder>
                    <RowHolder style={{justifyContent: 'flex-end'}}>
                        <Col12><Button loading={props.loading} label="UPDATE PASSWORD" onClick={props.saveData} bgColor="#000" textColor="#fff"/></Col12>
                    </RowHolder>
                </div>
            </div>
        </PersonalDetailContainer>
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
const Col12 = styled.div`
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
`;

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, {})(PersonalDetail);
