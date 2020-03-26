import React from 'react';
import Styled from 'styled-components';
import AddressForm from '../../../address'
import Button from '../../../ui/Button';
import addressimage from '../../../../assets/svg/address.svg';
import editIcon from '../../../../assets/svg/Edit.svg';
import deleteIcon from '../../../../assets/svg/Delete.svg';

const AddressContainer = Styled.div`
  width: 73%;
  .addressTitle {
      background: #ffffff;
      padding: 23px;
      display: flex;
      justify-content: space-between;
      .addressTitles {
          font-size: 30px;
          font-weight: bold;
        }
        .newAddress {
            font-weight: 500;
            width: 24%;
        }
    }
 .addressDetail {
     background: #ffffff;
     margin-top: 30px;
     padding: 20px 30px;   
     .addressContent {
         display: flex;
         justify-content: space-between;
         padding: 30px 0;
         border-bottom: 1px solid #ccc;  
         .addressInfo {
             margin-top: 30px;
           }
           .defaultAddress {
             font-weight: bold;
           }
           .radioName {
            margin-right: 10px;
           }   
        }
        .userName {
            margin-bottom: 20px;
        }
        .action {
            font-size: 12px;
            margin-bottom: 27px;
            font-weight: 600;
            &:hover {
                cursor:pointer;
            }
        }
 }
 `;


const Address = (props) => {
    const addresses = props.address || [];
    const showAddressForm = props.show;
    return (
        <AddressContainer>
          <div className="address">
                <div className="addressTitle">
                    <div className="addressTitles"><img src={addressimage} alt={'measurement'}/> Address</div>
                    <div className="newAddress"><Button style={{margin:'0'}} onClick={() => props.toggleForm()} label="ADD NEW ADDRESS"/></div>
                </div>
                <div className="addressDetail">
                    {
                        addresses.length < 1 || showAddressForm  
                        ? ( 
                            <AddressForm style = {{display: (showAddressForm ? 'block':'none')}}/>
                        )
                        : 
                        addresses.map((address, index) => (
                            <div key={address.id} className="addressContent">
                            <div>
                                <div className="userName"><strong>{address.firstName} {address.lastName}</strong></div>
                                <div>{address.address}</div>
                                <div>{address.city}, {address.state}</div>
                                <div>{address.country}</div>
                                <div>{address.phoneNo}</div>
                                <div className="addressInfo"><small>{address.preferred === 'Y' ? <i style={{color:'var(--primary-color)'}}>*This is your default shipping address</i> :''}</small></div>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', padding:'0 5px 0 0', alignItems:'flex-end',flex:'0 0 19%'}}>
                                <div className="action" onClick={() => props.toggleForm(index)}>VIEW <img style={{verticalAlign:'middle', width:'18px'}} src={editIcon} alt={'measurement'}/></div>
                                <div className="action" onClick={(e)=> {e.preventDefault(); props.removeAddress(address.id, index)}}>REMOVE <img style={{verticalAlign:'middle',width:'18px'}} src={deleteIcon} alt={'measurement'}/></div>
                            </div>
                        </div>
                        ))
                    }
                {/* <AddressForm /> */}
                </div>
                
            </div>
            
        </AddressContainer>
    );
};

export default Address;