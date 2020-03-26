import React from 'react';
import Styled from 'styled-components';
import accountImage from '../../../../assets/svg/account.svg';
import orderImage  from '../../../../assets/svg/Order.svg';
import bespokeImage from '../../../../assets/svg/bespoke.svg';
import measurementImage from '../../../../assets/svg/measurement.svg';
import wallet from '../../../../assets/svg/wallet.svg';
import setting from '../../../../assets/svg/Personaldetails.svg'
import addressimage from '../../../../assets/svg/address.svg';
import signOut from '../../../../assets/svg/signout.svg';
import {TEST_PRODUCT_IMAGE} from "../../../../config";
import { withRouter } from 'react-router-dom';

const SidebarContainer = Styled.div`
 
 width: 25%;
  margin: 0 20px 0 0;
  
  .sidebar{
  background: #ffffff;
  }
  
  .sidebarProfile {
        overflow: hidden;
        padding-left: 26px;
        
  }
  .imageHolder {
  border: 1px groove #d6d6d6;
    border-radius: 50%;
    padding: 7px 23px;
    float: left;
    position: absolute;
        top: 72px;
    background: #ffffff;
  }
  
  .contentProfile {
   float: left;
   margin-left: 120px;
  }
  
  .acctFirst {
    margin-top: 30px;
  }
  
  .accLast {
      border-top: 20px solid #f3f3f3f3 !important;

  }
  
  .sidebarIcon {
      margin-right: 30px;
    margin-left: 20px;
  }
  
  .acctSummary {
    padding: 15px 10px;
    border-top: 1px solid #f3f3f3f3;
    display: flex;
    cursor: pointer; 
}
`;

const Sidebar = (props) => {
    const logout = () => {
        localStorage.clear();
        props.history.push('/');
    }
    const user = props.user || {};
    return (
        <SidebarContainer>
            <div className="sidebar">
                <div className="sidebarProfile">
                    <div className="imageHolder">
                        <img src={TEST_PRODUCT_IMAGE} height={80} alt={''}/>
                    </div>
                    <div className="contentProfile">
                        Hello, <br/>
                        <b>{user.userInfo.firstName}</b><br/>
                        <b>{user.userInfo.lastName}</b>
                    </div>
                </div>
                <div className="acctSummary acctFirst" onClick={()=>props.onclick('landing')}>
                    <div className="sidebarIcon"><img src={accountImage} alt={'accountImage'}/></div>
                    <div>Account Summary</div>
                </div>
                <div className="acctSummary" onClick={() => props.onclick('orders')}>
                    <div className="sidebarIcon"><img src={orderImage} alt={'orderImage'}/></div>
                    <div>Orders</div>
                </div>
                <div className="acctSummary"  onClick={() => props.onclick('bespoke')}>
                    <div className="sidebarIcon"><img src={bespokeImage} alt={'bespokeImage'}/></div>
                    <div>Bespoke</div>
                </div>
                <div className="acctSummary" onClick={() => props.onclick('measurement')}>
                    <div className="sidebarIcon"><img src={measurementImage} alt={'measurementImage'}/></div>
                    <div>Measurements</div>
                </div>
                <div className="acctSummary" onClick={() => props.onclick('escrow')}>
                    <div className="sidebarIcon"><img src={wallet} alt='addressimage'/></div>
                    <div>Escrow/Wallet</div>
                </div>
                <div className="acctSummary" onClick={() => props.onclick('contact')}>
                    <div className="sidebarIcon"><img src={addressimage} alt=''/></div>
                    <div>Address</div>
                </div>
                <div className="acctSummary" onClick={() => props.onclick('preference')}>
                    <div className="sidebarIcon"><img src={setting} alt='addressimage' style={{width:'23px'}}/></div>
                    <div>Personal Preference</div>
                </div>
                <div className="acctSummary accLast" onClick={logout}>
                    <div className="sidebarIcon"><img src={signOut} alt='signOut'/></div>
                    <div>Sign out</div>
                </div>
            </div>

        </SidebarContainer>
    )
}

export default withRouter(Sidebar);