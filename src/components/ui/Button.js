import React from 'react';
import styled from 'styled-components';
import BlackLoader from '../../assets/gif/Black_Loader.gif';

export default (props) => {
    const Button = styled.div`
        height: ${props.height || '45px'};
        background-color: ${props.bgColor || 'white'};
        width: ${props.width || '99%'};
        border: 1px solid ${props.borderColor || 'var(--dark-color)'};
        color: ${props.textColor || 'var(--dark-color)'};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto;
        font-size: ${props.fontSize || '16px'};
        font-weight: bold;
        cursor: pointer;
        letter-spacing: 1px;
    `;

    if (props.loading) {
        return <img 
            style={{margin: '10px auto', display: 'block'}}
            src={BlackLoader}
            height={40}
            width={40}
            alt="loader"
        />
    }

    return (
        <Button onClick={props.onClick} style={props.style} className={props.className}>
            {props.leftIcon}
            <div className="text-style">{props.label}</div>
            {props.rightIcon}
            {props.children}
        </Button>
    );
}