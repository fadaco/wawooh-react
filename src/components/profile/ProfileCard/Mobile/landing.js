import React from 'react';
import Styled from 'styled-components';
import setting from '../../../../assets/svg/Personaldetails.svg'
import orderImage from '../../../../assets/svg/Order.svg';
import bespokeImage from '../../../../assets/svg/bespoke.svg';
import measurementImage from '../../../../assets/svg/measurement.svg';
import addressImage from '../../../../assets/svg/address.svg';
import signOut from '../../../../assets/svg/signout.svg';
import wallet from '../../../../assets/svg/wallet.svg';
import { TEST_PRODUCT_IMAGE, NairaSign } from '../../../../config';
import { numberWithCommas } from '../../../../shared/Methods';
import { withRouter } from "react-router-dom";
// import { Signer } from 'crypto';

const LandingContainer = Styled.div`
.coverDiv {
    height: 150px;
    .coverImage {
        background-image: url(${TEST_PRODUCT_IMAGE});
        background-size: cover;
        background-position: center;
        height: 100%;   
    }
}
.profileTab {
    display: flex;
    position: relative;
    background: #fff;
    padding: 20px 10px;
    .profileName {  
        margin-left: 113px;
    }
    .imageHolder {
        border: 1px groove #d6d6d6;
        border-radius: 50%;
        padding: 7px 23px;
        float: left;
        position: absolute;
        top: -21px;
        background: #ffffff;
    }
}   
.escrowBalance {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background: #fff;
    margin-top: 3px;   
    .escrowbalancetext {
        color: #a2a1a1;
        font-weight: bold;
        font-size: 17px;
    }   
    .escrowDivider {
        margin-top: 0;
        width: 60px;
        float: right;
    }   
    .escrowBalanceAccount {
        font-size: 17px;
        color: var(--primary-color);
        font-weight: bold;
    }
}
.tabs {
    display: flex;
    background: #fff;
    padding: 15px 20px;
    margin-top: 2px;
    .tabsIcon {
        margin-right: 20px;
    }
}
.tabs-top {
    margin-top: 12px; 
}
`;

const Landing = (props) => {
    const logout = () => {
        localStorage.clear();
        props.history.push('/');
    }
    const user = props.user || {};
    return (
        <LandingContainer>
            <div className="coverDiv">
                <div className="coverImage"></div>
            </div>
            <div className="profileTab">
                <div className="imageHolder">
                    <img src={TEST_PRODUCT_IMAGE} height={80} alt={''}/>
                </div>
                <div className="profileName">Hello, <br/>
                    <b>{user.userInfo.firstName} {user.userInfo.lastName}</b>
                </div>
            </div>
            <div className="escrowBalance">
                <div className="tabsIcon"><img src={wallet} alt={'wallet'}/></div>
                <div style={{textAlign:'center'}}>
                    <div className="escrowbalancetext">Escrow Balance</div>
                    <hr className="escrowDivider"/>
                    <div className="escrowBalanceAccount">{NairaSign}{numberWithCommas(user.userInfo.pocketBalance === null ? '0':'')}</div>
                </div>
            </div>
            <div className="tabs tabs-top" onClick={() => props.onclick('orders')}>
                <div className="tabsIcon"><img src={orderImage} alt={''}/></div>
                <div>Orders</div>
            </div>
            <div className="tabs"  onClick={() => props.onclick('bespoke')}>
                <div className="tabsIcon"><img src={bespokeImage} alt={''}/></div>
                <div>Bespoke</div>
            </div>
            <div className="tabs" onClick={() => props.onclick('measurement')}>
                <div className="tabsIcon"><img src={measurementImage} alt={''}/></div>
                <div>Measurements</div>
            </div>
            <div className="tabs" onClick={() => props.onclick('address')}>
                <div className="tabsIcon"><img src={addressImage} alt={''}/></div>
                <div>Address</div>
            </div>
            <div className="tabs"  onClick={() => props.onclick('escrow')}>
                <div className="tabsIcon"><img src={wallet} alt={'wallet'}/></div>
                <div>Escrow/Wallet</div>
            </div>
            <div className="tabs" onClick={() => props.onclick('personalDetail')}>
                <div className="tabsIcon"><img src={setting} alt='addressimage' style={{width:'23px'}}/></div>
                <div>Personal Details</div>
            </div>
            <div className="tabs tabs-top" onClick={logout}>
                <div className="tabsIcon"><img src={signOut} alt={'signout'} /></div>
                <div>Sign out</div>
            </div>
        </LandingContainer>
    );
}

export default withRouter(Landing);