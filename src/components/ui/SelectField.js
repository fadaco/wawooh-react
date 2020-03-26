import React from 'react';
import Styled from 'styled-components';



export default (props) => {
    const Select = Styled.div`
       .formControl {
          width: 100%;
          height:40px;
          background: #d4d4d4;
          outline: none;
       }
       select.formControl {
        background: #F7F7F7;
        -webkit-appearance: none;
        box-shadow: none;
        padding: ${props.selectPadding || '3px 0 3px 30px'};
        margin-top: ${props.labelMarginTop || '0px'}
        &:focus {
            box-shadow: none;
            1px solid rgba(0,0,0,)
        }
       }
           
    `;
    const options = props.options;
    return (
        <Select style={props.customStyle}>

            <label className="label-control" htmlFor={props.forLabel}>{props.labelTitle}</label>
            <select onChange={props.onChange} name={props.formname} value={props.value} id={props.formId} className="formControl">
                <option value={props.defaultValue} disabled>{props.placeholder}</option>
              {options.map((option, index) => {
                    return (
                        <option className="optionName"
                            key={index}
                            value={option}
                            label={option}
                        >{option}</option>
                    )
                })


                }
            </select>
        </Select>
    );
}