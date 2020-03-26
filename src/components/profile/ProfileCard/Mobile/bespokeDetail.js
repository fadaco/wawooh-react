import React from 'react';
import {connect} from 'react-redux';
import Styled from 'styled-components';

const BespokeDetailContainer = Styled.div`

`;

const Bespoke = (props) => {
    return (
        <BespokeDetailContainer>
            <div className="bespokeDetail"></div>
        </BespokeDetailContainer>
    )
}

const mapStateToProps = (state) => state.orders

export default connect(mapStateToProps, {})(Bespoke);