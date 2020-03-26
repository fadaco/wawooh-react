import React from 'react';
import Styled from 'styled-components';
import AddressForm from '../../../address'
import editIcon from '../../../../assets/svg/Edit.svg';
import deleteIcon from '../../../../assets/svg/Delete.svg';

const AddressContainer = Styled.div`

.address {
    .addressTitle {
        background: var(--white-color);
        padding: 15px 20px;
        text-align: center;
        font-weight: bold;
        color: #999;
        .btnTabs {
            width: 60%;
            display: flex;
            justify-content: space-between;
        }
    }
    .addNewAddress {
        border: 1px solid #000;
        font-size: 13px;
        width: 40%;
        margin-left:auto;
        margin-right: auto;
        margin-top:10px;
        margin-bottom:10px;
        padding:7px 0;
        text-align: center;
    }
    .addressDetail {
        background-color: #fff;
        font-size:13px;
        padding: 10px 15px;
        margin: 20px 0;
        .addressContent {
            margin: 10px 0;
        }
    }
    .addressAction {
        display: flex;
        div {
            margin:10px 20px;
        }
        .divider {
            width: 2px;
            height: 31px;
            background: #ccc;
            margin: 0;
        }
    }
    .shippingAddress {
        margin: 20px 0;
        color: var(--primary-color);
    }
}`;

const Address = (props) => {
    const address = props.address;
    console.log(address);
    return (
        <AddressContainer>
            <div className="address">
                <div className="addressTitle">
                    <div className="btnTabs">
                    <div onClick={() => props.onclick('landing')}><i className="fa fa-angle-left"></i></div>
                    <div>Address</div></div>
                </div>
                <div><div className="addNewAddress bold">ADD NEW ADDRESS</div></div>
                
                <div className="addressDetail">
                {
                    address.length > 0 ? address.map((address) => (
                        <div key={address.id}>
                            <div className="addressContent bold">{address.firstName} {address.lastName}</div>
                            <div className="addressContent">{address.address}</div>
                            <div className="addressContent">{address.city}, {address.state}</div>
                            <div className="addressContent">{address.country}</div>
                            <div className="addressContent">{address.phoneNo}</div>
                            <div className="shippingAddress">{address.preferred === 'Y' ? <i style={{color:'var(--primary-color)'}}>*This is your default shipping address</i>:''}</div>
                            <hr/>
                            <div className="addressAction">
                            <div style={{cursor:'pointer',fontWeight:'bold'}}>Edit <img style={{verticalAlign:'middle', width:'18px'}} src={editIcon} alt={'measurement'}/></div>
                            <div className="divider"></div>
                            <div style={{fontWeight:'bold',cursor:'pointer'}} onClick={(e)=> {e.preventDefault(); props.removeAddress(address.id)}}>Delete <img style={{verticalAlign:'middle', width:'18px'}} src={deleteIcon} alt={'measurement'}/></div>    
                            </div>
                        </div>  
                        ))
                        : 
                        <AddressForm />
                }
            
            </div>
        </div>
        </AddressContainer>
    );
}

export default Address;