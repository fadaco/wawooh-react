import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import UserDate from 'date-fns';
import bespokeImage from '../../../../assets/svg/bespoke.svg';

const BespokeContainer = styled.div`
   width: 73%;
   .bespokeHeader {
       background: var(--white-color);
       padding: 23px;
       font-size: 30px;
       font-weight: bold;
   }
   .bespokeDetail {
       background: var(--white-color);
       margin-top: 16px;
       .bespokeContent {
           display: flex;
           padding: 20px;
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
            .viewBespoke { 
                text-align: right;
                flex-grow: 2;
            }
        }
        .status {
            margin-top: 0;
            font-size: 12px;
        }
    }`;

const bespoke = (props) => {
    console.log(props.bespokeBids);
    return (
        <BespokeContainer>
           <div className="bespoke">
               <div className="bespokeHeader">
                   <div className="btnTabs">
                       <div><img style={{verticalAlign:'middle'}} src={bespokeImage} alt={'bespoke'}/>Bespoke</div>
                   </div>
               </div>

               {props.bespokeBids.length > 0 ?

                   props.bespokeBids.map((item) => (
                        <div className="bespokeDetail" key={item.id}>
                            <div className="bespokeContent">
                                <div>
                                    <div className="imgHolder">
                                    <img className="imgD" src={item.bespokeStyleBank ? item.bespokeStyleBank.picture : item.sideImage} alt={''}/>
                                    </div>
                                </div>
                                <div>
                                    <h4>Placed on {UserDate.format(item.dateCreated, 'D, MMM YYYY')}</h4>
                                    <h5 className="status"><span className={item.status === 'PENDING' ? 'pending':'success'}><i className={item.status === 'PENDING' ? "fa fa-clock":"fa fa-check-o"}></i> {item.status}</span></h5>
                                </div>
                                <div className="viewBespoke">
                                    <div style={{color: '#16bdb0', fontWeight: 'bold',fontSize: '13px'}} onClick={() => props.click('bespokeDetail', item.id)}>VIEW <i className="fa fa-eye"></i></div>
                                </div>
                            </div>
                        </div>
                   ))
                   : <div>No Bids yet</div>
               }

           </div>
        </BespokeContainer>
    )
}

const mapStateToProps = state => state.orders

export default connect(mapStateToProps, {})(bespoke);