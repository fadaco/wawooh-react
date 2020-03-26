import React from 'react';
import Styled from 'styled-components';
import Button from '../../../ui/Button';

const OrderDetailContainer = Styled.div`

  width: 73%;
  
  .orderdiv {
  display: flex;
   justify-content: space-between;
  }
  
  .imgHolder {
  height: 150px;
  }
   .imgHolder img {
   height: 100%;
   }
   
   .items {
       font-weight: 700;
    margin: 40px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedcdc;
   }
   
   .productDetail {
       font-weight: 700;
    color: #797878;
   }
   
   .shippingDetail {
     margin-top:50px;
     background: #ffffff;
    padding: 20px;
     
   }
  
  .shippingtitle {
      border-bottom: 1px solid #dedcdc;
    padding-bottom: 10px;
    font-weight: bold;
  }
  
  .shippingAddress {
      font-size: 14px;
    margin-top: 40px;
  }
  
  .accountName {
    font-weight:bold;
    margin-top: 20px;
  }
  
  .orderHeader {
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    padding: 20px;
  }
  
  .orderD {
    background: #ffffff;
    padding: 20px;
    margin-top:50px;
  }
  

 
 


`;

const OrderDetail = (props) => {
    const orderDetail = props.orderDetail;
    const orders = props.order[orderDetail];
    console.log(orders);
    console.log(orders.itemsList);
    return (
        <OrderDetailContainer>
            <div className="orderDetail">
                <div className="orderHeader">
                    <div>
                <div>Orders Details</div>
                <div>Thanks for your order! Check out the details below</div>
                    </div>
                    <div>
                        <Button label="Update Payment"
                                bgColor="#000000"
                                textColor="#ffffff"
                                borderColor="white"
                                width="200px"
                                onClick={() => props.onclick('updatePayment')}
                                className="button-class"/>
                    </div>
                </div>


                 <div className="orderD">
                     <div className="items">ITEMS</div>
                {orders.itemsList.map(order => {
                    return (
                        <div key={order.id}>

                            <div className="orderdiv">
                                <div>
                                    <div className="imgHolder">
                                        <img src={order.productPicture}  alt = {order.productName}/>
                                    </div>
                                    <div className="productDetail">{order.productName}<br/> strip at the center</div>
                                    <div className="productDetail">{order.amount}</div>
                                </div>

                            </div>
                        </div>
                    )
                })}
                 </div>



                <div className="shippingDetail">
                    <div className="shippingtitle">SHIPPING DETAILS</div>
                    <div className="shippingAddress">SHIPPING ADDRESS</div>
                    <div className="accountName">Oluwabinary Adeturnup</div>
                    <div>21, Kujore Street, Ojota Kosofe, Lagos, Nigeria</div>
                    <div>08155637893</div>


                    <div className="shippingAddress">SHIPPING METHOD</div>
                    <div>Standard Delivery</div>
                </div>
            </div>

        </OrderDetailContainer>
    );
}

export default OrderDetail;