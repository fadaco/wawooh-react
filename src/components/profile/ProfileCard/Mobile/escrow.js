import React from "react";
import Styled from "styled-components";
import { NairaSign } from "../../../../config";
import { numberWithCommas } from "../../../../shared/Methods";

const EscrowContainer = Styled.div`
.escrow {
    .escrowTitle {
        background: var(--white-color);
        padding: 15px 20px;
        text-align: center;
        font-weight: bold;
        color: #999;
    }
    .escrow-wallet {
        background: var(--white-color);
        margin: 30px;
        text-align: center;
        padding: 20px;
        color: #999;
        .header1 {
            margin-top: 6px;
            width: 114px;
        }
        .header2 {
            margin-top: 6px;
            width: 70px;
        }
        .escrowAmount {
            color: #cc983d;
            font-weight: bold;
            font-size: 25px;
        }
    }
    .btnTabs {
        width: 60%;
        display: flex;
        justify-content: space-between;
    }
}
`;

const Escrow = props => {
  const balance = props.balance || {};
  return (
    <EscrowContainer>
      <div className="escrow">
        <div className="escrowTitle">
          <div className="btnTabs">
            <div onClick={() => props.onclick("landing")}>
              <i className="fa fa-angle-left" />
            </div>
            <div>Escrow/Wallet</div>
          </div>
        </div>

        <div className="escrow-wallet">
          <div className="bold">Escrow (Total)</div>
          <hr className="header1" />
          <div className="escrowAmount">{NairaSign}{numberWithCommas(balance.pocketBalance === null ? '0':balance.pocketBalance)}</div>
          {/* <div onClick={() => props.onclick("escrowDetail")}>View More</div> */}
          {/* <hr className="header2" /> */}
        </div>

        <div className="escrow-wallet">
          <div className="bold">Wallet (Total)</div>
          <hr className="header1" />
          <div className="escrowAmount">{NairaSign}{numberWithCommas(balance.walletBalance === 0 ? '0' : balance.walletBalance)}</div>
          {/* <div>View More</div> */}
          {/* <hr className="header2" /> */}
        </div>
      </div>
    </EscrowContainer>
  );
};

export default Escrow;
