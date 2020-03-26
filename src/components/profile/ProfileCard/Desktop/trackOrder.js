import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const TrackOrderContainer = styled.div`
  width: 73%;
   background: #ffffff;
  .trackOrderTitle {
    text-align: center;
     margin: 20px 0;
    font-weight: bold;
    color: #585858;
  }
  
  .progressBar {
    height: 24px;
    background: #f7f7f7;
    margin: 0 40px;
    border-radius: 16px;
   .trackOrder {
   height: 24px;
   background: #5eb1bf;
   border-radius: 16px;
   position: relative;
   
   .trackBarCheck {
    background: #fff;
    border-radius: 50%;
    padding: 2px;
    color: #5eb1bf;
    position: absolute;
    right: 4px;
    top: 2px;
   }
   }
  
  }
  
  .trackOrderInfo {
    display: flex;
    justify-content: space-between;
     margin: 0 40px;
  }
  
  .trackingTable {
    margin-top: 50px;
     .trackingDetail {
    margin: 40px;
    border-top: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    padding: 14px 0;
    font-size: 20px;
    color: #777777;
     }
     .trackOrderInfoHeader {
       margin-bottom: 10px;
     }
    
  }
  
  
  
`;

const trackOrder = (props) => {




    return (
      <TrackOrderContainer>
          <div className="trackOrder">
              <div className="trackOrderTitle">Order Tracking</div>


              {props.trackDisplay ?
                  props.trackOrder.itemsList.map((item) => {



                      return (
                              <div key={item.id}>
                                  <div className="progressBar"><div className="trackOrder" style={props.renderProgressBar(item.status)}><i className="trackBarCheck fa fa-check"></i></div></div>
                                  <div className="trackOrderInfo">
                                      <div><b>Ordered</b><br/>
                                          12/13/2019<br/>
                                          <b>2:16pm</b>
                                      </div>
                                      <div><b>Shipped</b><br/>
                                          12/13/2019<br/>
                                          <b>2:16pm</b>
                                      </div>
                                      <div><b>Delivered</b><br/>
                                          12/13/2019<br/>
                                          <b>2:16pm</b>
                                      </div>
                                  </div>

                                  <div className="trackingTable">
                                      <div className="trackingDetail">Tracking Details (Order Number: {item.orderNumber})</div>
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
    );
};

const mapStateToProps = (state) => ({
    ...state.orders
    });

export default connect(mapStateToProps, {})(trackOrder);