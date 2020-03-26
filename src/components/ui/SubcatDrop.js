import React, { Component } from 'react';
import styled from 'styled-components';
import {TEST_PRODUCT_IMAGE} from '../../config';
import {Link} from 'react-router-dom';
import '../../assets/css/submenu.css';

class Subcategory extends Component{
    constructor() {
        super();
        this.state = {
            dropdown: true
        }
    }
    render() {
        return (
            <div className="subMenu">
                <RowHolder>
                <Col7>
                    <RowHolder className="titlePad">
                        <Col4>Clothings</Col4>
                        <Col4>Accessories</Col4>
                        <Col4>Shoes</Col4>
                    </RowHolder>
                    <RowHolder>
                        <Col4>
                            <ul className="wrapMe">
                                <li><Link to ="/sub-category">Kaftan</Link></li>
                            </ul>
                        </Col4>
                        <Col4>
                            <ul className="wrapMe">
                                <li><Link to ="/sub-category">Watches</Link></li>
                            </ul>
                        </Col4>
                        <Col4>
                            <ul className="wrapMe">
                                <li><Link to ="/sub-category">Footwear</Link></li>
                            </ul>
                        </Col4>
                    </RowHolder>
                </Col7>
                <Col3>
                    <img src={TEST_PRODUCT_IMAGE} alt={'sub-prod'} className="productImage"/>
                </Col3>
            </RowHolder>
            </div>
        )
    }
}

export default Subcategory;

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
const Col3 = styled.div`
    width: 30%;
    flex: 0 0 30%;
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