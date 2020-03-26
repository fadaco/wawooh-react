import React from "react";

import styled from "styled-components";

const DIV = styled.div`
  height: 320px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Details = styled.div`
  background-color: white;
  padding: 10px;
  h2{
      margin-top: 0px;
      margin-bottom: 2px;
  }
  p{
      margin-top: 2px;
      height: 20px;
      overflow: hidden;
  }
`
export default props => (
  <div style={{margin: 5}}>
    <DIV>
      <img src={props.source} alt="blog img" />
    </DIV>
    <Details>
        <h2>Lorem Ipsum Catie</h2>
        <p>Lorem Ipsum Catie there is no Road</p>
    </Details>
  </div>
);
