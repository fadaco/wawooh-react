import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const Textarea = styled.div`
        margin-bottom: 1rem;
        .formControl {
            display: block;
            padding: 2px 10px;
            background: ${props.bgColor || '#f7f7f7'}
            outline: none
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: ${props.formRadius || '4px'};
            width: ${props.textWidth || '100%'};
            height: ${props.textHeight || '100px'}
            font-size: .91rem;
            line-height: 1.5;
            margin-top: 5px;
            resize: none;
            overflow-y: auto;
            box-sizing: border-box;
            &:focus {
                border: 1px solid var(--primary-color);
            }
        }
        .label-control {
            font-size: ${props.labelSize || '12px'};
            font-weight: 500;
            color: #000;
        }
    `;

    return (
        <Textarea>
            {
                props.forLabel
                    ? <label className="label-control" htmlFor={props.forLabel}>{props.labelTitle}</label>
                    : null
            }
            <textarea className="formControl" name={props.formname} id={props.formId} style={props.style}
                     value={props.value} onChange={props.onChange} placeholder={props.placeholder || 'Input Placeholder'}/>
        </Textarea>
    );
}