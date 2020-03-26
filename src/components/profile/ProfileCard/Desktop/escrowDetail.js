import React from 'react';
import Styled from 'styled-components';

const EscrowDetailContainer = Styled.div`

 width: 73%;
 .escrowDetailTitle {
     background: #ffffff;
    padding: 23px;
    display: flex;
    justify-content: space-between;
    
    .totalText {
    margin: 8px;
    float: left;
    font-size: 25px;
    font-weight: bold;
    }
    .totalNum {
    float: left;
    border: 1px solid #cc983d;
    padding: 10px 20px;
    color: #cc983d;
    font-weight: bold;
    font-size: 20px;

    }
 }
 .escrowName {
  font-size: 30px;
    font-weight: bold;
 }
 
 .escrowHistory {
   background: #ffffff;
    padding: 23px;
    margin-top:20px;
    font-weight:bold;
 }
 .tableRow {
   width: 100%;
   th{
   text-align: left;
    padding-left: 20px;
   }
   tbody {
   background: #ffffff;
   td {
   padding:20px;
   border-right: 0;
   }
   }
 }
 

 

`;

const EscrowDetail = (props) => {
    const walletButton = props.walletButton;
    return (
        <EscrowDetailContainer>
             <div className="escrowDetail">
                <div className="escrowDetailTitle">
                    <div className="escrowName">{walletButton === 'wallet' ?
                        'Wallet' : 'ESCROW'}</div>
                    <div>{walletButton === 'wallet' ?
                        <div><div><div className="totalText">Total</div> <div className="totalNum">N1,234,567</div></div></div> : 'Back'}</div>
                </div>
                <div className="escrowHistory">History</div>
                <div>
                    <table className="tableRow">
                        <thead>
                        <tr>
                            <th>Record</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                           <tr>
                               <td>Haze Kaftan with double <br/> stripes
                               at the center
                               </td>
                               <td>-N15,000</td>
                               <td>11 Mar, 2019</td>
                           </tr>
                           <tr>
                               <td>Funding of Escrow
                               </td>
                               <td>-N20,000</td>
                               <td>23 Mar, 2019</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </EscrowDetailContainer>
    );
}

export default EscrowDetail;