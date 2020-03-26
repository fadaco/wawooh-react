import React from 'react'
import styled from 'styled-components'
import TEST_PRODUCT_IMAGE from '../../assets/svg/success.svg';
import {NairaSign} from '../../config';

export default () => {
    return (
        <CheckoutReceipt>
            <div style={{background: '#fff'}}>
                <div style={{display: 'flex', margin: '10px auto', flexDirection: 'column', alignItems: 'center'}}>
                    <img style={{width: '20%', margin: 'auto'}} src={TEST_PRODUCT_IMAGE} alt={'success_icon'}/>
                    <h3>Order Successful</h3>
                </div>
                <RowHolder>
                    <Col12>
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
                    </Col12>
                </RowHolder>
                <RowHolder style={{marginTop: '1em'}}>
                    <Col12>
                        <span style={{fontWeight: '500', color: 'var(--primary-color)', fontStyle: 'italic'}}>Thank you for payment. We received payment for the following items;</span>
                    </Col12>
                </RowHolder>
                <RowHolder style={{marginTop: '1em'}}>
                    <Col12>
                        <span style={{fontWeight: 'bold', color: 'var(--dark-color)'}}>Items</span>
                    </Col12>
                </RowHolder>
                <RowHolder>
                    <div className="orderPayment" style={{marginTop: '1em', padding: '5px .5rem'}}>
                        <div className="innerStyle" style={{color: '#444'}}>
                            <div className="tab-1">1x</div>
                            <div className="tab-2">Haze Kaftan Double stripe shirt <br/>
                                <small>Lopita Green</small>
                            </div>
                            <div className="tab-1">{NairaSign}6,000</div>
                        </div>
                        <div className="innerStyle" style={{color: '#444'}}>
                            <div className="tab-1">1x</div>
                            <div className="tab-2">Haze Kaftan Double stripe shirt <br/>
                                <small>Lopita Green</small>
                            </div>
                            <div className="tab-1">{NairaSign}6,000</div>
                        </div>
                    </div>
                    <div className="orderPayment" style={{padding: '5px .5rem', borderTop: '1px solid rgba(0,0,0,.2)'}}>
                        <div className="innerStyle" style={{color: '#444', padding: '15px 0'}}>
                            <div className="flex-1"><strong>Shipping</strong></div>
                            <div className="flex-2">{NairaSign}1,000</div>
                        </div>
                        <div className="innerStyle" style={{color: '#444', padding: '15px 0'}}>
                            <div className="flex-1"><strong>Total</strong></div>
                            <div className="flex-2">{NairaSign}14,000</div>
                        </div>
                    </div>
                </RowHolder>
            </div>
            <div style={{background: '#fff', margin: '10px 0 10px', padding: '15px 0'}}>
                <RowHolder>
                    <Col12>
                        <h4>Billed to:</h4>
                        <ul>
                            <li>Oluwabinary Sojisola</li>
                            <li>21, Kajola Street, Ojota</li>
                            <li>Kosofe, Lagos</li>
                            <li>Nigeria</li>
                        </ul>
                    </Col12>
                    <Col12>
                        <h4>Shipped to:</h4>
                        <ul>
                            <li>Oluwabinary Sojisola</li>
                            <li>21, Kajola Street, Ojota</li>
                            <li>Kosofe, Lagos</li>
                            <li>Nigeria</li>
                        </ul>
                    </Col12>
                </RowHolder>
            </div>
        </CheckoutReceipt>
    )
}

const CheckoutReceipt = styled.div`
    width: 94%;
    padding: 2px;
    display:flex;
    margin: 0 auto;
    flex-direction:column;
    h4 {
        font-size: 1.1rem;
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
        font-size: 1.1em;
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
            justify-content: space-between;
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
                flex: 0 0 8%;
            }
            .tab-2 {
                flex: 0 0 65%;
                text-align: left;
            }
            
        }
    }
`
const RowHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`
const Col12 = styled.div`
    width: 100%;
    flex: 0 0 100%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`