import React from 'react';
import Styled from 'styled-components';

const EscrowDetailContainer = Styled.div`
.escrowDetail {
  .escrowDetailtitle {
    background: #ffffff;
    padding: 15px 10px;
    color: #999;
    text-align:center;
  }
  .escrowContent {
   background: #ffffff;
       padding: 10px 15px;
   .escrowContentDiv {
     background: #f3f3f3;
     text-align: center;
        padding: 10px 0 30px 0;
         border-radius: 6px;
        hr {
     margin-top: 3px;
    width: 60px;
        }
        
        .escrowAmount {
           color: var(--primary-color);
           font-weight: bold;
           font-size: 30px;
              
        }

   }
  }
  .escrowMain {
  background: #ffffff;
  .escrowPurchase {
    display: flex;
        justify-content: space-between;
    padding: 20px 15px;

  }
  }
  
  .contentPadding {
   padding: 5px 15px;
  }
  
   .btnTabs {
         width: 60%;
    display: flex;
    justify-content: space-between;
     }
  
}
`;

const EscrowDetail = (props) => {
    return (
        <EscrowDetailContainer>
            <div className="escrowDetail">
                <div className="escrowDetailtitle"><div className="btnTabs"><div onClick={() => props.onclick('escrow')}>Back</div><div>Escrow</div></div></div>
                <div className="escrowContent">
                    <div className="escrowContentDiv">
                        <div className="bold">(Total)</div>
                        <hr/>
                        <div className="escrowAmount">N1,235,234.09</div>
                    </div>
                </div>
                <div className="escrowMain">
                    <div className="contentPadding">History</div>
                    <hr/>
                    <div className="contentPadding">11 Mar, 2019</div>
                    <div className="escrowPurchase">
                        <div>Haze Kaftan with double <br/> stripes at the center</div>
                        <div>-N15,000</div>
                    </div>
                    <hr/>
                    <div className="contentPadding">11 Mar, 2019</div>
                    <div className="escrowPurchase">
                        <div>Funding of escrow</div>
                        <div>+N15,000</div>
                    </div>
                </div>
            </div>
        </EscrowDetailContainer>
    );
}

export default EscrowDetail;