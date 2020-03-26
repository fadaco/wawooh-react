import React from 'react';
import Styled from 'styled-components';
import { NairaSign } from '../../../../config';
import { numberWithCommas } from '../../../../shared/Methods';
import wallet from '../../../../assets/svg/wallet.svg';

const EscrowContainer = Styled.div`

 width: 73%;
 .escrowTitle {
     background: #ffffff;
    padding: 23px;
    font-size: 30px;
    font-weight: bold;
 }
 .escrowDetail {
    display: flex;
    justify-content: space-between;
    
    .escrowContentTitle {
    margin-left: auto;
    width: 30%;
    margin-right: auto;
    }
 }
 .escrowContent {
    background: #ffffff;
    padding: 20px 20px;
    width: 42%;
    margin: 20px 0px;
    text-align: center;
 }
 
 
 .escrowAmount {
 color: var(--primary-color);
 font-size: 30px;
     font-weight: bold;
 }
 
 .escrowView {
   text-align: right;
   .viewMore {
     cursor: pointer;
   }
 }
`;

const Escrow = (props) => {
    const balance = props.balance || {};
    return (
        <EscrowContainer>
        <div className="escrow">
                <div className="escrowTitle">
                <img src={wallet} alt={'measurement'}/> Escrow/Wallet
                </div>

                <div className="escrowDetail">
                    <div className="escrowContent">
                        <div className="escrowContentTitle">
                        <div>Escrow (Total)</div>
                            <hr/>
                        </div>
                        <div className="escrowAmount">{NairaSign}{numberWithCommas(balance.pocketBalance === null ? '0':balance.pocketBalance)}</div>
                        {/* <div className="escrowView">
                            <div onClick={() => props.escrowDetail('escrowDetail')} className="viewMore">View More</div>
                        </div> */}
                    </div>
                    <div className="escrowContent">
                        <div className="escrowContentTitle">
                        <div>Wallet (Total)</div>
                            <hr/>
                        </div>
                        <div className="escrowAmount">{NairaSign}{numberWithCommas(balance.walletBalance === 0 ? '0' : balance.walletBalance)}</div>
                        {/* <div className="escrowView">
                            <div className="viewMore" onClick={() => props.escrowDetail('escrowDetail', 'wallet')}>View More</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </EscrowContainer>
    );
}

export default Escrow;