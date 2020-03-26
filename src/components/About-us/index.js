import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import {  DesktopContainer, MobileContainer } from '../ui/Responsiveness';
import { withRouter } from "react-router-dom";


const AboutUs = (props) => {
    const pageNavigation = (page) => {
        console.log(page);
        console.log(props);
        props.history.push(page);
    };

    return (
        <div>
            <DesktopContainer>
                <Desktop navigate={(page) => pageNavigation(page)} />
            </DesktopContainer>

            <MobileContainer>
                <Mobile navigate={(page) => pageNavigation(page)}/>
            </MobileContainer>

        </div>
    )
};

export default withRouter(AboutUs);