import React from 'react';
import 'flatpickr/dist/themes/material_green.css'
import Flatpikr from 'react-flatpickr';
import Styled from 'styled-components';
import Input from '../../../ui/InputField';
import SelectOption from '../../../ui/SelectField';
import Button from '../../../ui/Button';
import {BANKS} from '../../../../shared/Methods';

const UpdatePaymentContainer = Styled.div`

width: 73%;
 .updatePaymentHeader {
    background: #ffffff;
    padding: 20px;
 }
 
 .updatePaymentDetail {
   background: #ffffff;
   padding: 20px;
   margin-top: 70px;
 }
 
 .paymentDescription {
   width: 100%;
 }

`;

const UpdatePayment = (props) => {
    return (
    <UpdatePaymentContainer>
        <div className="updatePayment">
            <div className="updatePaymentHeader">
                <div>Update Payment</div>
            </div>
            <div className="updatePaymentDetail">
                <div><Input labelTitle={'Order number'} formname={'orderNum'} onChange={props.onChange}/></div>
                <div>
                    <div>Payment date</div>
                    <div><Flatpikr data-enable-time onChange={props.handleChange}/></div></div>
                <div><Input labelTitle={'Account name'} formname={'accountName'} onChange={props.onChange}/></div>
                <div><Input labelTitle={'Amount transferred'} formname={'amountPayed'} onChange={props.onChange}/></div>
                <div>
                    <SelectOption labelTitle={'Bank name'} options={BANKS()} formname={'bank'} onChange={props.onChange}/>
                </div>

                <div>
                    <div><label>Payment description</label></div>
                    <div><textarea rows={'10'} className="paymentDescription" name='paymentNote' onChange={props.onChange}></textarea></div>
                </div>
                <div>
                    <Button label="UPDATE PAYMENT" onClick={props.saveTransferInfo}/>
                </div>
            </div>
        </div>
    </UpdatePaymentContainer>
    );
};

export default UpdatePayment;