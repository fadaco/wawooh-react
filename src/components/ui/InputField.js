import React from 'react';
import styled from 'styled-components';

const Input = styled.div`
        margin-bottom: 1rem;
        .formControl {
            display: block;
            padding: 6px 15px;
            background: var(--white-color);
            outline: none
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius:  2px;
            width: 100%;
            font-size: 1rem;
            line-height: 1.5;
            margin-top: 5px;
            box-sizing: border-box;
            &:focus {
                border: 1px solid var(--primary-color) !important;
            }
        }
        .label-control {
            font-size:  12px;
            font-weight: 500;
            color: #000;
        }
    `;
export default (props) => {

    return (
        <Input style = {props.customStyle}>
            {/*{
                props.forLabel
                    ? <label className = "label-control" htmlFor = {props.forLabel}>{props.labelTitle}</label>
                    : null
            }*/}
            <label className = "label-control" htmlFor = {props.forLabel}>{props.labelTitle}</label>
            <input className = "formControl" value={props.value} onChange={props.onChange} name={props.formname} id ={props.formId} style = {props.style} type = {props.type} maxLength={props.maxLength} placeholder = {props.placeholder}/>
        </Input>
    );
}