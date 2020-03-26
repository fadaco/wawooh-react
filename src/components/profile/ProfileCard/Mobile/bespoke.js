import React from 'react';
import {connect} from 'react-redux';
import Styled from 'styled-components';
import UserDate from 'date-fns';

const BespokeContainer = Styled.div`
  .bespoke 
  .bespokeTitle {
      background:#ffffff;
      padding: 15px 20px;
      text-align: center;
      font-weight: bold;
      color: #999; 
      .btnTabs {
          width: 60%;
          display: flex;
          justify-content: space-between;
        }
    }
    .bespokeDetail {
        display: flex;
        padding: 20px;
        margin: 10px 0;
        background: #ffffff;
        .imgHolder {
            height: 100px;
            border: 1px groove rgba(0,0,0.08);
            background: #ffffff;
            margin-right: 12px;
            width:100px;
        }
        .imgD {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .status {
        margin-top: 0;
        font-size: 12px;
    }`;

const bespoke = (props) => {
    console.log(props.bespokeBids);
    return (
        <BespokeContainer>
            <div className="bespoke">
                <div className="bespokeTitle">
                    <div className="btnTabs">
                        <div onClick={() => props.onclick('landing')}><i className="fa fa-angle-left"></i></div>
                        <div>Bespoke</div>
                    </div>
                </div>

                {props.bespokeBids.length > 0 ?

                    props.bespokeBids.map((item) => (
                    <div className="bespokeDetail" key={item.id} onClick={() => props.click('bespokeDetail', item.id)}>
                        <div>
                            <div className="imgHolder">
                            <img className="imgD" src={item.bespokeStyleBank ? item.bespokeStyleBank.picture : item.sideImage} alt={''}/>
                            </div>
                        </div>
                        <div>
                            <h4>Placed on {UserDate.format(item.dateCreated, 'D, MMM YYYY')}</h4>
                            <h5 className="status"><span className={item.status === 'PENDING' ? 'pending':'success'}><i className={item.status === 'PENDING' ? "fa fa-clock":"fa fa-check-o"}></i> {item.status}</span></h5>
                        </div>
                    </div>
                    )) 
                    : 
                    <div>No Bids yet</div>
                }
            </div>
        </BespokeContainer>
    )
}

const mapStateToProps = state => state.orders

export default connect(mapStateToProps, {})(bespoke);