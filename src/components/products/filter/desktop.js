import React from 'react';
import styled from 'styled-components';
import { NairaSign } from '../../../config';
import { connect } from 'react-redux';
import { getSubCategoryProducts, resetProductList } from '../../../store/actions/ProductAction';

const DesktopFilter = (props) => {
    const toggleFilter = props.defaultState;
    const hideShow = props.hideShow;
    const list = props.subCatList || [];

    const onSubCategorySelect = (subCatId) => {
        const body = {
            page: props.page,
            size: props.size,
            subcategoryId: subCatId
        };
        props.resetProductList();
        setTimeout(() => {
            props.getSubCategoryProducts(body, props.productList);
        }, 200);
    }

    return (
        <Filter>
            <div style={{display: (toggleFilter ? 'block' : 'none')}}>
                <RowHolder style={{padding: '30px 30px 10px'}}>
                    <Col3>
                        <button className="btn btn-filter" onClick={() => props.showDropdown('size')}>Size <i
                            className="fa fa fa-angle-down"></i></button>
                        {hideShow === 'size' ? (
                            <Dropdown>
                                <ul>
                                    <li>
                                        <div className="pretty p-svg p-square">
                                            <input type="checkbox" name="price" id='M' value=''/>
                                            <div className="state p-warning">
                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                    <path
                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                </svg>
                                                <label htmlFor='M'>M</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>S</li>
                                    <li>XL</li>
                                    <li>XXL</li>
                                </ul>
                            </Dropdown>
                        ) : ''
                        }
                    </Col3>
                    <Col3 className="Col3">
                        <button className="btn btn-filter" onClick={() => props.showDropdown('designer')}>Designer <i
                            className="fa fa fa-angle-down"></i></button>
                        {hideShow === 'designer' ? (
                            <Dropdown>
                                <ul>
                                    <li>Kola Kuddus</li>
                                    <li>Beatrice</li>
                                    <li>IyaBosa</li>
                                    <li>Posh By Asabi</li>
                                </ul>
                            </Dropdown>
                        ) : ''
                        }
                    </Col3>
                    <Col3 className="Col3">
                        <button className="btn btn-filter" onClick={() => props.showDropdown('price')}>Price Range <i
                            className="fa fa fa-angle-down"></i></button>
                        {hideShow === 'price' ? (
                            <Dropdown>
                                <ul>
                                    <li>
                                        <div className="pretty p-svg p-round">
                                            <input type="radio" name="price" id='01' value=''/>
                                            <div className="state p-warning">
                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                    <path
                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                </svg>
                                                <label htmlFor='01'>0 - {NairaSign}5,000</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pretty p-svg p-round">
                                            <input type="radio" name="price" id='02' value=''/>
                                            <div className="state p-warning">
                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                    <path
                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                </svg>
                                                <label htmlFor='02'>{NairaSign}5,000 - {NairaSign}10,000</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="pretty p-svg p-round">
                                            <input type="radio" name="price" id='03' value=''/>
                                            <div className="state p-warning">
                                                <svg className="svg svg-icon" viewBox="0 0 20 20">
                                                    <path
                                                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                                        style={{stroke: 'white', fill: 'white'}}></path>
                                                </svg>
                                                <label htmlFor='03'>{NairaSign}10,000 - {NairaSign}50,000</label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Dropdown>
                        ) : ''
                        }
                    </Col3>
                    <Col3 className="Col3">
                        <button className="btn btn-filter" onClick={() => props.showDropdown('color')}>Color <i
                            className="fa fa fa-angle-down"></i></button>
                        {hideShow === 'color' ? (
                            <Dropdown>
                                <ul>
                                    <li>Green</li>
                                    <li>Red</li>
                                    <li>Purple</li>
                                    <li>White</li>
                                </ul>
                            </Dropdown>
                        ) : ''
                        }
                    </Col3>
                    <Col3 className="Col3">
                        <button className="btn btn-filter" onClick={() => props.showDropdown('subcat')}>Sub
                            Categories <i className="fa fa fa-angle-down"></i></button>
                        {hideShow === 'subcat' ? (
                            <Dropdown>
                                <ul>
                                    {
                                        list.map((item) => {
                                            if (item.delFlag !== 'Y') {
                                                return <li
                                                    key={item.id}
                                                    onClick={() => onSubCategorySelect(item.id)}
                                                >{item.subCategory}</li>
                                            }

                                            return null;
                                        })
                                    }
                                </ul>
                            </Dropdown>
                        ) : ''
                        }
                    </Col3>
                </RowHolder>
            </div>

            <div className="RowHolder" style={{padding: '30px 30px 10px'}}>
                <div className="Col2">
                    <button className="btn btn-toggle" onClick={props.show}>{props.toggleFilterText}<span><i
                        className={props.icon}></i></span></button>
                </div>
            </div>
        </Filter>
    )
}

const Dropdown = styled.div`
    border:1px solid rgba(0,0,0,.3);
    border-radius: 5px;
    width: 92%;
    top: 100%;
    box-sizing: border-box;
    position: absolute;
    z-index: 12000;
    height: 200px;
    overflow-y:auto;
    background: var(--white-color);
    ul {
        list-style: none;
        margin:0;
        padding:0;
    }
    li {
        display: flex;
        flex-direction: row;
        padding: 10px 2rem;
        margin: 3px;
        border-bottom: 1px solid rgba(0,0,0,.08);
        &:hover {
            background: #ddd;
            cursor:pointer;
        }
        &:last-child {
            border-bottom: none;
        }
    }
    .pretty {
        display: flex;
        justify-content:space-between;
    }
`

const Filter = styled.div`
    .btn {
        width: 99%;
        padding: 10px 2rem;  
        outline: none;
        border: none;
        cursor: pointer;
        display: flex;
        position: relative;
        justify-content: space-between;
    }
    .btn-toggle {
        height: calc(2.5em + 5px);  
        background: var(--dark-color);
        color: var(--white-color);
        border-radius:50px;
        font-size: 1rem; 
    }
    .btn-filter {
        height: calc(2.5em + 10px);  
        background: var(--white-color);
        color: var(--dark-color);
        border-radius:5px;
        font-size: 1rem;
        border:1px solid rgba(0,0,0,.3);
    }
`
const RowHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`
const Col3 = styled.div`
    position: relative;
    width: 20%;
    flex: 0 0 20%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`;

const mapStateToProps = state => state.product;

const storeActions = {
    getSubCategoryProducts,
    resetProductList
};

export default connect(mapStateToProps, storeActions)(DesktopFilter);