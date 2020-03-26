import React from 'react';
import {connect} from 'react-redux';
import Styled from 'styled-components';
import Button from '../../../ui/Button';
import deleteMeasurement from '../../../../assets/svg/Delete.svg';

const MeasurementContainer = Styled.div`
.measurementName {
    .measurementTitle {
        font-size: 1.2rem;
        font-weight: bold;
    }
}
.measurementDetail {
    background: #ffffff;
    margin-top: 30px;
    padding: 0px 20px;
    .measurementContent {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
        .addContent {
            margin:20px 0;
        }
    }
}
 .btnTabs {
     width: 60%;
     display: flex;
     justify-content: space-between;
    }
    .measurementHeader {
        background:#ffffff;
        padding: 15px 20px;
        text-align: center;
        font-weight: bold;
        color: #999;
    }
    .remove {
        text-transform: uppercase;
        font-weight: bold;
        text-align: right;
        color: #9c9c9c;
    }
    .action {
        font-size: 12px;
        margin-bottom: 27px;
        font-weight: 600;
        text-align: right;
        &:hover {
            cursor:pointer;
        }
    }
`;

const Measurement = (props) => {
    return (
        <MeasurementContainer>
            <div className="measurement">
                <div className="measurementName">
                    <div className="measurementHeader">
                        <div className="btnTabs">
                            <div onClick={() => props.onclick('landing')}><i className="fa fa-angle-left"></i></div>
                            <div className="measurementTitle">Measurement</div>
                        </div>
                    </div>
                    <Button width={'50%'} onClick={props.showModal}>NEW MEASUREMENT</Button>
                </div>
                <div className="measurementDetail">
                    {
                        props.measurementList.length > 0 ?
                        props.measurementList.map((item, index) => (

                            <div className="measurementContent" key={item.id}>
                                <div>
                                    <div className="addContent"><strong>Unit: {item.unit}</strong></div>
                                    <div className="addContent"><strong>{item.name}</strong></div>
                                    <div className="addContent">Ankle: {item.ankle} Arm hole: {item.armHole} Back Shirt Length: {item.backShirtLength} Biceps: {item.biceps} Bu...</div>
                                    {/* <div className="remove">REMOVE</div> */}
                                    <div className="action" onClick={() => props.deleteMeasure(item.id, index)}><img style={{verticalAlign:'text-bottom',width:'18px'}} src={deleteMeasurement} alt={'measurement'}/> REMOVE</div>
                                </div>
                            <div>
                        </div>
                    </div>
                        )) : null
                    }
                </div>
            </div>
        </MeasurementContainer>
    )
}

const mapStateToProps = state => state.measurement

export default connect(mapStateToProps, {})(Measurement);