import React from 'react';
import {connect} from 'react-redux';
import Styled from 'styled-components';
import measurementImage from '../../../../assets/svg/measurement.svg';
import editMeasurement from '../../../../assets/svg/Edit.svg';
import deleteMeasurement from '../../../../assets/svg/Delete.svg';

const MeasurementContainer = Styled.div`
width: 73%;
.measurementName {
   background: #ffffff;
    padding: 23px;
    display: flex;
    justify-content: space-between;
    .measurementTitle {
        font-size: 30px;
        font-weight: bold;
        display:flex;
    }
    .newMeasurement {
        border: 1px solid #000;
        padding: 10px;
        font-weight: 500;
        cursor: pointer;
    }
}

.measurementDetail {
    background: #ffffff;
    margin-top: 30px;
    padding: 20px;
    .measurementContent {
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
        border-bottom: 1px solid #ccc;
        .addContent {
            margin: 0 0 10px;
            &.other {
                color: #666;
                font-style: italic;
                font-size: 14px;
                font-weight: 500;
            }
        }
        .action {
            font-size: 12px;
            margin-bottom: 27px;
            font-weight: 600;
            &:hover {
                cursor:pointer;
            }
        }
    }
}
`;

const Measurement = (props) => {
    // console.log(props.measurementList);
    return (
        <MeasurementContainer>
            <div className="measurement">
                <div className="measurementName">
                    <div className="measurementTitle"><img style={{verticalAlign:'middle'}} src={measurementImage} alt={'measurement'}/>Measurement</div>
                    <div className="newMeasurement" onClick={props.showModal}>NEW MEASUREMENT</div>
                </div>
                <div className="measurementDetail">
                    {props.measurementList.length > 0 ?
                        props.measurementList.map((item, index) => (
                        <div className="measurementContent" key={item.id}>
                            <div style={{flex:'0 0 80%'}}>
                                <div className="addContent"><strong>{item.name}</strong></div>
                                <div className="addContent other">Fitness: </div>
                                <div className="addContent other">Unit: {item.unit}</div>
                                <div className="addContent other">Ankle: {item.ankle} Arm hole: {item.armHole} Back Shirt Length: {item.backShirtLength} Biceps: {item.biceps} Bu...</div>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', padding:'0 5px 0 0', alignItems:'flex-end',flex:'0 0 19%'}}>
                                <div className="action" onClick={() => props.onView('measurementdetail', index)}>VIEW <img style={{verticalAlign:'middle', width:'18px'}} src={editMeasurement} alt={'measurement'}/></div>
                                <div className="action" onClick={() => props.deleteMeasure(item.id, index)}>REMOVE <img style={{verticalAlign:'middle',width:'18px'}} src={deleteMeasurement} alt={'measurement'}/></div>
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