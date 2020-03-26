import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const toggleFiter = props.defaultState;
    return (
        <Filter>
            <div  style={{display: (toggleFiter ? 'block':'none')}}>
            <RowHolder style={{padding:'30px 30px 10px'}}>
                <Col3>
                    <button className="btn btn-filter">Size <i className="fa fa fa-angle-down"></i> </button>
                </Col3>
                <Col3 className="Col3">
                    <button className="btn btn-filter">Designer <i className="fa fa fa-angle-down"></i></button>
                </Col3>
                <Col3 className="Col3">
                    <button className="btn btn-filter">Price Range <i className="fa fa fa-angle-down"></i></button>
                </Col3>
                <Col3 className="Col3">
                    <button className="btn btn-filter">Color <i className="fa fa fa-angle-down"></i></button>
                </Col3>
            </RowHolder>
            </div>
            
            <div className="RowHolder" style={{padding:'30px 30px 10px'}}>
                <div className="Col2">
                    <button className="btn btn-toggle" onClick={props.show}>{props.toggleFilterText}<span><i className={props.icon}></i></span></button>
                </div>
            </div>       
        </Filter>
    )
}

const Filter = styled.div`
    .btn {
        width: 99%;
        padding: 10px 2rem;  
        outline: none;
        border: none;
        cursor: pointer;
        display: flex;
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
    width: 23%;
    flex: 0 0 23%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`