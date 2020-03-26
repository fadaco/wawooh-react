import React from 'react';
import Desktop from './desktop';
import { DesktopContainer } from '../Responsiveness';
import { connect } from 'react-redux';

const Footer = (props) => (
    <div>
        <DesktopContainer>
            <Desktop list={props.categoryList} />
        </DesktopContainer>
    </div>
);

const mapStateToProps = (state) => ({
    ...state.category
});

export default connect(mapStateToProps)(Footer);
