import React from 'react';
import Styled from 'styled-components';
import { TEST_PRODUCT_IMAGE } from '../../../../config';

const LandingContainer = Styled.div`

    background-image: url(${TEST_PRODUCT_IMAGE});
    background-size: cover;
    background-position: center;
    
    width: 73%;
    position: relative;
    
    .maindiv {
      position: absolute;
      left: 0;
      
      .welcomediv {
          background: #000000;
          color: #ffffff;
          padding: 10px 20px;
          font-size: 25px;
         margin-top: 40px;
      }
      
      .homeDiv {
         background: #000000;
          color: #ffffff;
         padding: 10px 15px;
          width: 76px;
          font-size: 25px;
         margin-top: 10px;
      }
    }
`;

const Landing = (props) => {
    return (
        <LandingContainer>
            <div className="main">
                <div className="maindiv">
                    <div className="welcomediv">Welcome</div>
                    <div className="homeDiv">Home</div>
                </div>
            </div>
        </LandingContainer>
    )
};

export default Landing;