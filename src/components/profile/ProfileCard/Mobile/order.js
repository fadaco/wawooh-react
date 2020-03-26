import React from 'react';
import Styled from 'styled-components';
import UserDate from 'date-fns';

const OrderContainer = Styled.div`
.orders {
    .orderHeader {
        font-weight: bold;
        text-align: center;
        background: #ffffff;
        padding: 15px 20px;
        font-size: 20px;
        margin-bottom: 20px;
        color: #999;
        display: flex;
    }
    .orderTitle {
        color: #04a704;
        background: #ffffff;
        padding: 10px 6px;
        font-weight: bold;
        border-bottom: 1px solid #c3c3c3;
     }
     .orderPictures {
         background: #ffffff;
         justify-content: space-evenly;
         padding: 20px 10px;
         display: flex;
     .imgHolder {
         height: 40px;
         border: 1px groove #d6d6d6;
         border-radius: 50%;
         padding: 12px 18px;
         float: left;
         background: #ffffff;
         margin-right: 12px;
        }
        .imgD {
            height: 100%;
        }
        .imgCircle {
            font-size: 21px;
            background: #999;
            color: #fff;
            border-radius: 50%;
            padding: 20px 23px;
        }
     }
     .orderDetails {
        background: #ffffff;
        margin-top: 30px;
        padding: 10px 30px;
    }
     .orderD {
         display: flex;
         justify-content: space-between;
         background: #ffffff;
         padding: 20px 10px;
         .viewOrder {
             border: 1px solid #4E4E4E;
             color: #4E4E4E;
             padding: 8px 18px;
             margin-top: 30px;
             font-weight: bold;
            }
            .orderText {
                font-weight: bold;
                color: #999;
            }
        }
        .btnTabs {
            width: 60%;
            display: flex;
            justify-content: space-between;
        }
    }
`;

const Order = (props) => {
    const orders = props.order;
    console.log(orders);
    return (
        <OrderContainer>
            <div className="orders">
                <div className="orderHeader">
                    <div className="btnTabs">
                        <div onClick={() => props.onclick('landing')}><i className="fa fa-angle-left"></i></div>
                        <div>Orders</div></div></div>

                {orders.length > 0 ?
                    orders.map((order, index) => (
                        <div key={order.id}>
                            <div className="orderTitle">It has been shipped!</div>
                            <div className="orderPictures">

                                {order.itemsList.map((item) => (
                                    <div className="imgHolder" key={item.id}><img className="imgD"
                                                                    src={item.productPicture}
                                                                    alt={item.productName}/>
                                    </div>
                                ))
                                }
                                {/*<div className="imgHolder"><img className="imgD" src={'https://res.cloudinary.com/har9qnw3d/image/upload/v1548951517/productpictures/Tunicsprodpic1163923207349777235487235251116081788841.jpg'}  alt = {''}/>
                                </div>
                                <div className="imgHolder"><img className="imgD" src={'https://res.cloudinary.com/har9qnw3d/image/upload/v1548951517/productpictures/Tunicsprodpic1163923207349777235487235251116081788841.jpg'}  alt = {''}/>
                                </div>*/}
                                {order.itemsList.length > 4 ?
                                    <div className="imgCircle">
                                        <div>{'+' + order.itemsList.length}</div>
                                    </div> : null
                                }
                            </div>
                            <div className="orderD">
                                <div>
                                    <div className="orderText">ORDER NUMBER</div>
                                    <div>{order.orderNumber}</div>
                                    <div className="viewOrder" onClick={() => props.trackOrder('trackOrder', index, order.orderNumber)}>TRACK ORDER</div>
                                </div>
                                <div>
                                    <div className="orderText">SHIPPED DATE</div>
                                    <div>{UserDate.format(order.orderDate, 'D, MMM YYYY')}</div>
                                    <div className="viewOrder">VIEW ORDER</div>
                                </div>
                            </div>
                        </div>
                    )) : <div className="orderDetails">No Order Yet</div>

                }
            </div>
        </OrderContainer>
    );
};

export default Order;