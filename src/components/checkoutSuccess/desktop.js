import React from 'react'
import styled from 'styled-components'
import TEST_PRODUCT_IMAGE from '../../assets/svg/success.svg';
import {NairaSign} from '../../config';

export default () => {
    return (
        <CheckoutReceipt>
            <div style={{display: 'flex', margin: '10px auto', flexDirection: 'column'}}>
                <img style={{width: '50%', margin: 'auto'}} src={TEST_PRODUCT_IMAGE} alt={'success_icon'}/>
                <h3>Order Successful</h3>
            </div>
            <RowHolder>
                <Col4>
                    <h4>Billed to:</h4>
                    <ul>
                        <li>Oluwabinary Sojisola</li>
                        <li>21, Kajola Street, Ojota</li>
                        <li>Kosofe, Lagos</li>
                        <li>Nigeria</li>
                    </ul>
                </Col4>
                <Col4>
                    <h4>Shipped to:</h4>
                    <ul>
                        <li>Oluwabinary Sojisola</li>
                        <li>21, Kajola Street, Ojota</li>
                        <li>Kosofe, Lagos</li>
                        <li>Nigeria</li>
                    </ul>
                </Col4>
                <Col4>
                    <div className="orderPayment">
                        <div className="innerStyle">
                            <span className="flex-1">Status: </span>
                            <span className="flex-2"><label className="label label-paid">PAID</label></span>
                        </div>
                        <div className="innerStyle">
                            <span className="flex-1">Order Number: </span>
                            <span className="flex-2">0193833722HT</span>
                        </div>
                        <div className="innerStyle">
                            <span className="flex-1">Order Date: </span>
                            <span className="flex-2">23/03/2019 03:24PM</span>
                        </div>
                        <div className="innerStyle">
                            <span className="flex-1">Payment Method: </span>
                            <span className="flex-2">Wawooh Pay</span>
                        </div>
                    </div>
                </Col4>
            </RowHolder>
            <RowHolder style={{marginTop: '4em'}}>
                <Col7>
                    <span style={{fontWeight: '500', color: 'var(--primary-color)', fontStyle: 'italic'}}>Thank you for payment. We received payment for the following items;</span>
                </Col7>
            </RowHolder>
            <RowHolder style={{marginTop: '2em', fontWeight: 'bold', color: '#444'}}>
                <div className="orderPayment" style={{borderBottom: '1px solid rgba(0,0,0,.3)'}}>
                    <div className="innerStyle">
                        <div className="tab-1">Item</div>
                        <div className="tab-2">Quantity</div>
                        <div className="tab-2">Price</div>
                        <div className="tab-2">Total</div>
                    </div>
                </div>
            </RowHolder>
            <RowHolder>
                <div className="orderPayment" style={{padding: '5px 0'}}>
                    <div className="innerStyle" style={{color: '#444'}}>
                        <div className="tab-1">Haze Kaftan Double stripe shirt</div>
                        <div className="tab-2">2</div>
                        <div className="tab-2">{NairaSign}3,000</div>
                        <div className="tab-2">{NairaSign}6,000</div>
                    </div>
                    <div className="innerStyle" style={{color: '#444'}}>
                        <div className="tab-1">Haze Kaftan Double stripe shirt</div>
                        <div className="tab-2">2</div>
                        <div className="tab-2">{NairaSign}3,000</div>
                        <div className="tab-2">{NairaSign}6,000</div>
                    </div>
                </div>
                <div className="orderPayment" style={{padding: '5px 0', borderTop: '1px solid rgba(0,0,0,.2)'}}>
                    <div className="innerStyle" style={{color: '#444'}}>
                        <div className="tab-1"></div>
                        <div className="tab-2"></div>
                        <div className="tab-2"><strong>Shipping</strong></div>
                        <div className="tab-2">{NairaSign}1,000</div>
                    </div>
                    <div className="innerStyle" style={{color: '#444'}}>
                        <div className="tab-1"></div>
                        <div className="tab-2"></div>
                        <div className="tab-2"><strong>Total</strong></div>
                        <div className="tab-2">{NairaSign}14,000</div>
                    </div>
                </div>
            </RowHolder>
        </CheckoutReceipt>
    )
}

const CheckoutReceipt = styled.div`
    width: 80%;
    padding: 2rem;
    display:flex;
    margin: 30px auto;
    flex-direction:column;
    background: var(--white-color);
    h4 {
        font-size: .9rem;
        position: relative;
        color: #444;
        margin:0;
        &:after {
            content:'';
            position: absolute;
            width: 25%;
            left: 0;
            bottom: -4px;
            border-bottom: 1px solid #444;
        }
    }
    ul {
        list-style: none;
        padding-left:0;
    }
    li {
        display:block;
        padding: 0 0 2px;
        font-size: .9em;
        &:first-child {
            font-weight: bold;
        }
    }
    .orderPayment {
        padding: 5px;
        width: 100%;
        .innerStyle {
            display: flex;
            align-items: flex-end;
            border-bottom: 1px solid rgba(0,0,0,.2);
            padding: 6px 0 10px;
            word-wrap: break-word;
            padding-left:5px;
            padding-right: 5px;
            &:last-child {
                border-bottom: none;
            }
            .flex-1 {
                font-weight: bold;
                word-wrap: break-word;
                flex: 0 0 50%;
            }
            .flex-2 {
                color: #555;
            }
            .tab-1 {
                flex: 0 0 50%;
            }
            .tab-2 {
                flex: 0 0 18%;
                text-align: center;
            }
            
        }
    }
`
const RowHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`
const Col7 = styled.div`
    width: 70%;
    flex: 0 0 70%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`
const Col4 = styled.div`
    width: 33%;
    flex: 0 0 33%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`