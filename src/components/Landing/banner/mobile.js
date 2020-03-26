import React from 'react';
import styled from 'styled-components';
import { BANNER_PIC } from '../../../config';

const Banner = styled.div`
    background-image: url(${BANNER_PIC});
    height: 479px;
    margin-bottom: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export default () =>(
    <Banner />
)