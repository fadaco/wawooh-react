import React from 'react';
import {connect} from 'react-redux';
import Styled from 'styled-components';

const BespokeDetailContainer = Styled.div`
   width: 73%;
   
     .bespokeHeader {
   background: #ffffff;
    padding: 23px;
    font-size: 30px;
    font-weight: bold;
    
    .bespokeHeaderBespoke {
    font-weight: normal;
    font-size: 16px;
    }
   }
   
   .bespokeDetailContent {
    background: #ffffff;
    margin-top: 16px;
   }
   
`;

const Bespoke = (props) => {
    return (
        <BespokeDetailContainer>
            <div className="bespokeDetail">
                <div className="bespokeHeader">
                    <div className="btnTabs">
                        <div>Bespoke Detail</div>
                        <div><small className="bespokeHeaderBespoke">Thanks for your order! Check out details below.</small></div>
                    </div>
                </div>
                <div className="bespokeDetailContent">
                    {props.viewBespoke.length > 0 ? 'view': 'Waiting for Designer Response'}
                </div>
            </div>
        </BespokeDetailContainer>
    )
}


const mapStateToProps = (state) => state.orders

export default connect(mapStateToProps, {})(Bespoke);