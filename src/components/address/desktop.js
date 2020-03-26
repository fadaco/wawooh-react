import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import {GET_TOKEN} from '../../shared/Storage';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';


const AddressDesktop = (props) => {
    const {country, city} = props.c;


    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value);
    }
    return (
        <AddressHolder>
            <RowHolder>
                
                <Col6>
                    <div className="form-group">
                        <label className="label-style">First Name</label>
                        <input onChange={_changeValues} type="text" name="firstName" value={props.firstName} className="form-control"/>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.firstName}</span>
                    </div>
                </Col6>
                
                <Col6>
                    <div className="form-group">
                        <label className="label-style">Last Name</label>
                        <input onChange={_changeValues} type="text" value={props.lastName} name="lastName" className="form-control"/>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.lastName}</span>
                    </div>
                </Col6>
                <Col12>
                    <div className="form-group">
                        <label className="label-style">Address Line</label>
                        <input onChange={_changeValues} value={props.address} type="text" name="address" className="form-control"/>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.address}</span>
                    </div>
                </Col12>
                <Col12>
                    <div className="form-group">
                        <label className="label-style">Country</label>
                        <CountryDropdown className="form-control" name="country" onChange={(val)=>props.changeCountry('country', val)} value={props.country}/>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.country}</span>
                    </div>
                </Col12>
                <Col6>
                    <div className="form-group">
                        <label className="label-style">State</label>
                        <RegionDropdown className="form-control" name="state" disableWhenEmpty={true} country={country} value={props.state} onChange={(val)=>props.changeRegion('state', val)}/>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.state}</span>
                    </div>
                </Col6>
                <Col6>
                    <div className="form-group">
                        <label className="label-style">City</label>
                        <select onChange={_changeValues} className="form-control" name="city">
                            <option hidden>Select City</option>
                            <option defaultValue={'fffj'}>Select</option>

                            {city.length > 0 ?
                                city.map((item) => (
                                <option value={item} key={item}>{item}</option>
                            ))
                             : null
                            }
                        </select>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.city}</span>
                    </div>
                </Col6>
                <Col6>
                    <div className="form-group">
                        <label className="label-style">Zip/Postal Code</label>
                        <input onChange={_changeValues} type="text" name="zipCode" placeholder="eg +234" className="form-control" value={props.zipCode}/>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.zipCode}</span>
                    </div>
                </Col6>
                
                <Col6>
                    <div className="form-group">
                        <label className="label-style">Phone</label>
                        <input onChange={_changeValues} type="tel" name="phoneNo" className="form-control" value={props.phoneNo}/>
                        <span style={{color:'red',fontSize:'12px'}}>{props.errors.phoneNo}</span>
                    </div>
                </Col6>
                {GET_TOKEN() ?
                    <Col12>
                        <div className="form-group">
                            {/* <label className="label-style">Set as default address</label> */}
                            <div className="pretty p-svg p-square">
                                <input type="checkbox" name="preferred" value={'Y'} onChange={_changeValues}/>
                                <div className="state p-warning">
                                    <svg className="svg svg-icon" viewBox="0 0 20 20">
                                        <path
                                            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                            style={{stroke: "white", fill: "white"}}></path>
                                    </svg>
                                    <label>Set as default address</label>
                                </div>
                            </div>
                        </div>
                    </Col12> : null
                }
                <Col6>
                <div style={{color: 'red', fontSize: 14, magin: '5px 0'}}>{props.error}</div>
                </Col6>
            </RowHolder>


            {GET_TOKEN() ?
                <RowHolder style={{justifyContent: 'flex-end'}}>
                    <Col3><Button loading={props.loading} label="SAVE" onClick={props.saveData} bgColor="#000"
                                  textColor="#fff"/></Col3>
                </RowHolder> : null
            }

        </AddressHolder>
    )
}

const AddressHolder = styled.div`
    padding: 15px 0;
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
`
const RowHolder = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Col3 = styled.div`
    flex: 0 0 30%;
    max-width: 30%;
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

export default connect(mapStateToProps, {})(AddressDesktop);