import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";

const SIZE = styled.div`
  display: flex;
  div{
      width: auto;
      height: 25px;
      border: 1px solid grey;
      color: grey; 
      padding: 1px 5px;
      text-align: center;
      margin-right: 5px;
  }
`;
export default () => (
  <div>
    <div>
      <h5 style={{marginBottom: 5}}>Size</h5>
      <SIZE>
        <div>XL</div>
        <div>L</div>
      </SIZE>
    </div>
    <br />
    <div>
        <Button label="CHECKOUT" width="100%" height="35px" bgColor="black" textColor="white" />
    </div>
  </div>
);
