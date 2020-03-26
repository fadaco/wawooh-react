import React from "react";

import styled from "styled-components"; 

import Button from '../../ui/Button';

import BlogImg from '../../../assets/dev/img/BlogDetails.png'

const H2 = styled.h2`
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
const DIV = styled.div`
    margin: 15px;
    margin-top: 40px;
    div:nth-child(1){
        img{
            width: 100%;
        }
    }
    div:nth-child(2){
        margin-top: 40px;
    }
`
export default () => (
  <DIV>
    <div>
        <img src={BlogImg} alt='Article'/>
    </div>
    <div>
      <H2>MAISION</H2>
      <p>By, ipsum ipsum lorem domitus, By,ipsum ipsum lorem domitus</p>
      <Button label="EXPLORE" />
    </div>
  </DIV>
);
