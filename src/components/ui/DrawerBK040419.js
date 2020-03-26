import React from 'react';
import '../assets/css/Drawer.css';
import styled from 'styled-components';

export default () => (
    <div className="mobileNav">
        <input type="checkbox" id="menuBtn" className="menuBtn" />
        <label htmlFor="menuBtn" className="menuIcon"><span className="navIcon"></span></label>
        <div className="menu">
            <div style ={Drawer.bannerHolder}>
                
            </div>
            <SubList>
                <div style ={Drawer.newIn}>New In</div>
                <div>Clothings</div>
                <div>Active wears</div>
                <div>Accessories</div>
                <div>Shoes</div>
                <div>Sale</div>
            </SubList>
        </div>
    </div>
)

const Drawer = {
    bannerHolder: {
        minHeight: '150px',
        background: '#555',
        width: 'inherit'
    },
    newIn: {
        color: 'var(--primary-color)'
    }
}

const SubList = styled.div`
    div {
        display: block;
        padding: 18px;
        border-bottom: 1px solid rgba(0,0,0,.2);
        font-weight: bold;
        font-size: 15px;
    }
`