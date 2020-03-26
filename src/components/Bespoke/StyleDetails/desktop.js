import React from 'react';
import styled from 'styled-components';
import { NairaSign } from '../../../config';
import { numberWithCommas } from '../../../shared/Methods';
import Button from '../../ui/Button';

export default (props) => {
    const data = props.data;
    return (
        <StyleDetails>
            <RowHolder>
                <Col6>
                    <div className="imgHolder">
                        <img src={data.picture} alt={data.keyWords[0]}/>
                    </div>
                </Col6>
                <Col6>
                    <div className = "style-others"> 
                        <h4>Style Details</h4>
                        <div className="detailsRow">
                            <div className="flex1">
                                <h5>Name: </h5>
                            </div>
                            <div>
                                <p>{data.keyWords[0]}</p>
                            </div>
                        </div>
                        <div className="detailsRow">
                            <div className="flex1">
                                <h5>Estimated Production Price: </h5>
                            </div>
                            <div>
                                <p>{NairaSign}{numberWithCommas(data.estimatedPrice)}</p>
                            </div>
                        </div>
                        <div className="detailsRow">
                            <div className="flex1">
                                <h5>Estimated Delivery Time: </h5>
                            </div>
                            <div>
                                <p>{data.estimatedDeliveryTime}{data.estimatedDeliveryTime > 1 ? 'days':'day'}</p>
                            </div>
                        </div>
                        {/* <div className="detailsRow">
                            <div className="flex1">
                                <h5>Category: </h5>
                            </div>
                            <div>
                                {() => {
                                    if(data.categoryId === '1') {
                                        return 'Men'
                                    } else if(data.categoryId ==='11') {
                                        return 'Women'
                                    } else if(data.categoryId ==='41') {
                                        return 'Kids'
                                    } else { return 'Unisex'}
                                }}
                            </div>
                        </div> */}

                        {
                            data.designerName !== null ? (
                                <div className="detailsRow">
                                    <div className="flex1">
                                        <h5>Designer: </h5>
                                    </div>
                                    <div>
                                        <p>{data.designerName} </p>
                                    </div>
                                </div>
                            )
                            : ''
                        }
                       
                        <RowHolder>
                            <Button label="Request this style" bgColor="var(--dark-color)" textColor="var(--white-color)"/>
                        </RowHolder>
                    </div>
                    
                </Col6>
            </RowHolder>
        </StyleDetails>
    )
}

const StyleDetails = styled.div`
    padding: 2px;
    .imgHolder {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,.05);
        img {
            width: 99%;
            height: 100%;
            object-fit: contain;
            padding: 2px;
        }
    }
    .style-others {
        padding: 0 5px;
        h4 {
            margin:0;
            font-size: 1.1rem;
            text-align: center;
            font-weight: bold;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: -3px;
                width: 50%;
                border-bottom: 1px solid rgba(0,0,0,.3);
                height: 1px;
                margin: auto;
            }
        }
        .detailsRow {
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            h5{
                margin: 0;
            }
        }
        .flex1 {
            flex: 0 0 50%;
        }
    }
`
const RowHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
`
const Col6 = styled.div`
    width: 50%;
    flex: 0 0 50%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`