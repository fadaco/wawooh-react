import React from 'react'
import styled from "styled-components"; 

import Button from '../../ui/Button';

import BlogImg from '../../../assets/dev/img/BlogDetails.png'

const H1 = styled.h1`
    text-transform: uppercase;
    position: relative;
    color: black;
    ::before{
        content: " ";
        display: block;
        position: absolute;
        height: 1px;
        background: #707070;
        width: 20%;
        left: 0;
        right: 0;
        top: -8px;

    }
    ::after{
        content: " ";
        display: block;
        position: absolute;
        height: 1px;
        background: #707070;
        width: 50%;
        left: 0;
        right: 0;
        bottom: -8px;

    }
`

const FlexContainer = styled.div`
    display: flex;
    background-color: #FCFCFC;
    padding: 30px 90px;
    div:nth-child(1) {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }
    div:nth-child(2) {
        width: 70%;
        height: 450px;
        padding: 100px;
        padding-right: 0px;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`
export default () => (
    <div>
        <FlexContainer>
            <div>
                <H1>MAISION</H1>
                <p>By, ipsum ipsum lorem domitus, By,ipsum ipsum lorem domitus</p>
                <Button label='EXPLORE' />
            </div>
            <div>
                <img src={BlogImg} alt='Article'/>
            </div>
        </FlexContainer>
    </div>
)