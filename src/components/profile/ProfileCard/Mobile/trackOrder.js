import React from 'react';
import {connect} from 'react-redux';
import OrderIcon from '../../../../assets/svg/Ordered.svg';
import OrderTruck from '../../../../assets/svg/My truck.svg';
import styled from 'styled-components';

const TrackOrderContainer = styled.div`
.trackInfo {
background: #ffffff;
  .trackInfoHeader {
    font-weight: bold;
    text-align: center;
    background: #ffffff;
    padding: 15px 10px;
    font-size: 20px;
    margin-bottom: 20px;
    color: #999;
    display: flex;
    
     .btnTabs {
    width: 60%;
    display: flex;
    justify-content: space-between;
    
    .trackOrder {
     display: flex; 
    }
     }

  }
  
  .trackOrder {
      display: flex;
      align-items: center;
      justify-content: center;
    .trackCircle {
      background: #5eb1bf;
      border-radius: 50%;
      padding: 22px 19px;
    }
    .trackCircle-o {
     background: #f7f7f7;
      border-radius: 50%;
      padding: 22px 19px;
    }
    
    .trackRect {
    width: 40px;
    background: #5eb1bf;
    height: 5px;
    }
    .trackRect-o {
     width: 40px;
    background: #f7f7f7;
    height: 5px;
    }
    
  }
  
  .trackOrders {
  display: flex;
  justify-content: center;
  .shipped {
        margin: 0 25px;
  }
  }
  
   .trackOrderInfo {
    display: flex;
    justify-content: space-between;
     margin: 0 20px;
  }
  
   .trackingTable {
    margin-top: 50px;
     .trackingDetail {
    margin: 25px;
    border-top: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    padding: 10px 0;
    font-size: 14px;
    color: #777777;
     }
     .trackOrderInfoHeader {
       margin-bottom: 10px;
     }
    
  }
}
`;

const trackOrder = (props) => {
    return (
        <TrackOrderContainer>
            <div className="trackInfo">
                <div className="trackInfoHeader">
                    <div className="btnTabs">
                    <div onClick={() => props.onclick('landing')}>Back</div>
                        <div>Track Order</div>
                    </div>
                    </div>


                {props.trackDisplay ?
                    props.trackOrder.itemsList.map((item) => {
                      return (
                          <div key={item.id}>
                            <div className="trackOrder">
                                {item.status === 'OP' ?
                                    <div className="trackCircle"><img src={OrderIcon} alt={'order-icon'}/></div>
                                 :     <div className="trackCircle-o"><img src={OrderIcon} alt={'order-icon'}/></div>

                                }

                                {item.status === 'OS' ?
                                    <div className="trackRect"></div>
                                    :      <div className="trackRect-o"></div>

                                }

                                {item.status === 'OS' ?
                                    <div className="trackCircle"><img
                                        src={OrderTruck} alt={'track'}/></div> :
                                    <div className="trackCircle-o"><img
                                        src={OrderTruck} alt={'track'}/></div>
                                }

                                {item.status === 'D' ?
                                    <div className="trackRect"></div>
                                 :     <div className="trackRect-o"></div>

                                }
                                {item.status === 'D' ?
                                    <div className="trackCircle"><i className="fa fa-home"></i></div>
                                :  <div className="trackCircle-o"><i className="fa fa-home"></i></div>
                                }
                            </div>
                            <div className="trackOrders">
                                <div>
                                    <div>Ordered<br/>
                                        12/12/2019<br/>
                                        <b>2:16pm</b>
                                    </div>
                                </div>
                                <div className="shipped">
                                    <div>Shipped<br/>
                                        12/12/2019<br/>
                                        <b>2:16pm</b>
                                    </div>
                                </div>
                                <div>
                                    <div>Delivered<br/>
                                        12/12/2019<br/>
                                        <b>2:16pm</b>
                                    </div>
                                </div>
                            </div>
                            <div className="trackingTable">
                                <div className="trackingDetail">
                                    Tracking Details
                                </div>
                                <div className="trackOrderInfo">
                                    <div className="trackOrderInfoHeader">
                                        <div><b>Date</b></div>
                                        <div>{item.orderDate}</div>
                                    </div>
                                    <div className="trackOrderInfoHeader">
                                        <div><b>Time</b></div>
                                        <div>{item.orderDate}</div>
                                    </div>
                                    <div className="trackOrderInfoHeader">
                                        <div><b>Activity</b></div>
                                        <div>
                                            {
                                                props.renderstatus(item.status)
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                      )
                    })
                        : null
                }
            </div>
        </TrackOrderContainer>
    )
}

const mapStateToProps = (state) => ({
    ...state.orders
});

export default connect(mapStateToProps, {})(trackOrder);