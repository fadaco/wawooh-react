import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const ModalContainer = styled.div`
        background: rgba(0,0,0,.7);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99999;
        -webkit-overflow-scrolling: touch;
        outline: 0;
        filter: alpha(opacity=50);
        overflow-x: hidden;
        overflow-y: auto;
        .modalContent {
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: ${props.modalRadius || '5px'};
            box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
            background-clip: padding-box;
            outline: 0;
            padding: 10px;
            transition: ease all 0.5s;
            width: ${props.modalWidth || '90%'};
            margin: 3em auto 0;
            animation: fadeInDown .5s;
        }
        .modalHeader {
            display: flex;
            align-items: flex-start; 
            justify-content: space-between; 
            padding: 0 15px 0 0;
            border-bottom: none;
            &:before. :after {
                content: "";
                display: table;
            }
            &:after {
                clear: both;
            }
            h5 {
                margin: 0;
                text-align: center;
                font-size: 1rem;
                font-weight: 400;
            }
        }
        .modalBody {
            position: relative;
            flex: 1 1 auto;
            padding: ${props.bodyPadding || '1rem'};
        }
        .modal-dialog {
            position: relative;
            width: auto;
            margin: 10px;
            &.fade {
                animation: fade .3s linear .2s;
                transform: translate(0, -3%);
                transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
            }
        }
        
        .close {
            padding: 1rem;
            margin: 0rem -1rem -2rem auto;
            border: none;
            background: transparent;
            font-size: 1rem;
            z-index: 1;
        }
    `
    
    return (
        <ModalContainer>
            <div className = "modal-dialog fade">
                <div className = "modalContent">
                    <div className = "modalHeader">
                        <h5>{props.title}</h5>
                        <button type = "button" onClick = {props.onClick} className = "close">&times;</button>
                    </div>
                    <div className = "modalBody">
                       <div>
                           {props.children}
                       </div>
                    </div>
                </div>
            </div>
        </ModalContainer>
    );
}
