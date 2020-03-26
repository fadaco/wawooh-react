import React from 'react';
import Styled from 'styled-components';
import orderImage  from '../../../../assets/svg/Order.svg';
import UserDate from 'date-fns'

const OrderContainer = Styled.div`
 width: 73%;
 .orderTitle {
     background: #ffffff;
    padding: 23px;
    font-size: 30px;
    font-weight: bold;
 }
 
 .orderDetails {
     background: #ffffff;
    margin-top: 30px;
        padding: 10px 30px;
 }
 
 .orderInfo {
    display:  flex;
    justify-content: space-between;
    
 }
 
 .imgHolder {
   height: 40px;
   border: 1px groove #d6d6d6;
    border-radius: 50%;
    padding: 12px 18px;
    float: left;
    background: #ffffff;
    margin-right: 12px;

   img {
      height: 100%:
   }
 }
 
 .imgOver {
  overflow: hidden;
 }
 
 .imgD {
   height: 100%;
 }
 
 .orderNumber, .shippDate, .estimatedD{
 
     color: #5a5a5a;
    font-weight: bold;
    }
    
    .orderShip {
        margin: 30px 0;
    }
    
    .imgOver {
    margin: 20px 0;
    }
    
    .imgCount {
        background: #353535;
    opacity: 0.5;
    color: #ffffff;
    }
    
    .plus5 {
        font-size: 30px;
    font-weight: bold;
    }
    
    .trackbutton {
    float: right;
    }
    
    .trackOrderButton {
        border: 1px solid #4a4a4a;
        padding: 8px 15px;
        font-weight: bold;
        float:left;
        margin: 20px;
        cursor: pointer;
    }
`;


const Order = (props) => {
    const orders = props.order;
    console.log(props.order);

    return (
        <OrderContainer>
            <div className="order">
                <div className="orderTitle"><img style={{verticalAlign:'baseline'}} src={orderImage} alt={'bespoke'}/> Orders</div>
                {
                    orders.length > 0 ? 
                    orders.map((order, index) => (
                        <div className="orderDetails" key={order.id}>
                            <div className="orderShip">Your order has been shipped!</div>
                            <div className="orderInfo">
                                <div className="orderNum">
                                    <div className="orderNumber">ORDER NUMBER</div>
                                    <div>{order.orderNumber}</div>
                                </div>

                                <div className="estimatedDelivery">
                                    <div className="estimatedD">ORDER DATE</div>
                                    <div>{UserDate.format(order.orderDate, 'D, MMM YYYY')}</div>
                                </div>
                            </div>
                            <div className="imgOver">
                                {order.itemsList.map((item) => (
                                    <div className="imgHolder" key={item.id}>
                                        <img className="imgD"
                                             src={item.productPicture}
                                             alt={item.productName}/>
                                    </div>
                                ))
                                }

                                {order.itemsList.length > 4 ?

                                    <div className="imgHolder imgCount">
                                        <div className="plus5">
                                            {'+' + order.itemsList.length}
                                        </div>
                                    </div> : null
                                }



                                <div className="trackbutton">
                                    <div className="trackOrderButton" onClick={() => props.trackOrder('trackOrder', index, order.orderNumber)}>
                                        TRACK ORDER
                                    </div>

                                    <div className="trackOrderButton" onClick={() => props.orderDetail('orderdetail', index)}>
                                        VIEW ORDER
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : <div className="orderDetails">No Order Yet</div>
                }
            </div>
        </OrderContainer>
    );
};

export default Order;