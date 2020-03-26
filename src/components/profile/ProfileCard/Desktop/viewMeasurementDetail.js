import React from "react";
import Styled from "styled-components";
import Button from "../../../ui/Button";
import deleteIcon from '../../../../assets/svg/Delete.svg';

const ViewMeasurementContainer = Styled.div`
  width: 73%;
  .measurementDetailName {
      display: flex;
      justify-content: space-between;
      background: var(--white-color);
      padding: 10px 20px 10px 47px;
      align-items: center;
    }
    .btnHolder {
        margin-right: 22px;
        width: 80px;
    }
    .measureDisplay { 
        border-bottom: 1px solid rgba(0,0,0,.07);
    }
    .measureDisplay {
        float: none;
        display:flex;
        padding: 8px 10px;
        div {
            flex:0 0 80%;
        }
    }
    .mainDisplay {
        background: var(--white-color);
        margin-top: 20px;
        overflow: hidden;
    }
    .measurementDetailContent {
        width: 60%;
    }
    .action {
      font-size: 13px;
      margin-bottom: 27px;
      text-align: right;
      &:hover {
          cursor:pointer;
      }
  }
`;

const viewMeasurement = props => {
  const measure = [];
  const renderMeasurement = object => {
    for (let property in object) {
      if (object.hasOwnProperty(property)) {
        if (
          object[property] !== "" &&
          property !== "verfiedOn" &&
          property !== "updatedOn" &&
          property !== "createdOn" &&
          property !== "unit" &&
          property !== "name" &&
          property !== "delFlag" &&
          property !== "notes" &&
          property !== "id"
        ) {
          console.log(property);
          measure.push({
            title: property,
            value: object[property]
          });
        }
      }
    }
  };
  console.log(renderMeasurement(props.measurement));
  return (
    <ViewMeasurementContainer>
      <div className="measurementDetail">
        <div className="measurementDetailName">
          <div className="measurementDetailHeader">
            <strong><i className="fa fa-user"></i>  {props.measurement.name ? props.measurement.name : ''}</strong>
          </div>
          <div className="btnHolder">
            <Button style ={{height:'35px', color:'#555'}} label="EDIT" />
          </div>
        </div>
        <div className="mainDisplay">
          <div className="measurementDetailContent">
          <div style={{display:'flex', padding:'2em 0em 1em 2.7em'}}>
            <div style={{flex:'0 0 77%', fontWeight:'bold'}}><i className="fa fa-ruler"></i> {props.measurement.unit}</div> 
            <div><i className="fa fa-circle"></i>{props.measurement.fitness !== null ? props.measurement.fitness : 'empty'}</div>
          </div>
            <ul style={{listStyle:'none'}}>
              {measure.map((item, index) => (
                    <li key={index} className="measureDisplay">
                    <div>{item.title}</div> <div>{item.value}</div>
                  </li>
              ))}
            </ul>
          </div>
          <div style={{display:'flex', justifyContent: 'space-between', padding:'2em 2.7em'}}>
            <div className="action" onClick={() => props.onclick('measurement')}><i className="fa fa-angle-left"></i> Back</div> 
            <div className="action" onClick={() => props.deleteMeasure(props.measurement.id)}>DELETE <img style={{verticalAlign:'text-bottom',width:'18px'}} src={deleteIcon} alt={'measurement'}/></div>
          </div>
        </div>
      </div>
    </ViewMeasurementContainer>
  );
};

export default viewMeasurement;
