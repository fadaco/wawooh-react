import React from 'react'
import styled from 'styled-components';
import Button from '../ui/Button';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default (props) => {
    const {country,region} = props.c;


    const _changeValues = (ev) => {
        console.log(ev.target.value);
        props.onChangeInput(ev.target.name, ev.target.value);
    };

    return (
        <AddressHolder>
            <RowHolder>
                <Col12>
                    <div className="form-group">
                        <label className="label-style">First Name</label>
                        <input onChange={_changeValues} type="text" name="firstName" className="form-control"/>
                    </div>
                </Col12>

                <Col12>
                    <div className="form-group">
                        <label className="label-style">Last Name</label>
                        <input onChange={_changeValues} type="text" name="lastName" className="form-control"/>
                    </div>
                </Col12>
                <Col12>
                    <div className="form-group">
                        <label className="label-style">Address Line</label>
                        <input onChange={_changeValues} type="text" name="address" className="form-control"/>
                    </div>
                </Col12>

                <Col12>
                    <div className="form-group">
                        <label className="label-style">Country</label>
                        <CountryDropdown className="form-control" name="country" onChange={(val)=>props.changeCountry(val)} value={country}/>
                    </div>
                </Col12>
                <Col12>
                    <div className="form-group">
                        <label className="label-style">State</label>
                        <RegionDropdown className="form-control" name="state" disableWhenEmpty={true} country={country} value={region} onChange={(val)=>props.changeRegion(val)}/>
                    </div>
                </Col12>
                <Col12>
                    <div className="form-group">
                        <label className="label-style">City</label>
                        <select onChange={_changeValues} className="form-control" name="city">
                            <option hidden>Select City</option>
                            <option value="Ibadan">Ibadan</option>
                        </select>
                    </div>
                </Col12>
                <Col12>
                    <div className="form-group">
                        <label className="label-style">Zip/Postal Code</label>
                        <input onChange={_changeValues} type="text" name="zipCode" placeholder="eg +234" className="form-control"/>
                    </div>
                </Col12>
                
                <Col12>
                    <div className="form-group">
                        <label className="label-style">Phone</label>
                        <input onChange={_changeValues} type="tel" name="phoneNo" className="form-control"/>
                    </div>
                </Col12>
                <Col12>
                    <div className="form-group">
                        <div className="pretty p-svg p-square">
                            <input type="checkbox" name="preferred" value={'Y'} onChange={_changeValues}/>
                            <div className="state p-warning">
                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                    <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style={{stroke: "white",fill:"white"}}></path>
                                </svg>
                                <label>Set as default address</label>
                            </div>
                        </div>
                    </div>
                </Col12>
            </RowHolder>
            <RowHolder style={{justifyContent: 'flex-end'}}>
                <Col12><Button loading={props.loading} label="SAVE" onClick={props.saveData} bgColor="#000" textColor="#fff"/></Col12>
            </RowHolder>
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
        height: calc(2.5em + 10px);
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
        height: calc(2.5em + 10px);
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
const Col12 = styled.div`
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding-right: 10px;
    padding-left: 10px;
    position:relative;
`;