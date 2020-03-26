import React from 'react';
import styled from "styled-components";

export default (props) => {
    const COlORSNIPPET = styled.div`
        width: 18px;
        height: 18px;
        background-image: url(${props.backgroundImage});
        border-radius: 50%;
        margin: 3px;
    `

    return <COlORSNIPPET/>
};
