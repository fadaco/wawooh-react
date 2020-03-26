import React, {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import {DesktopContainer, MobileContainer} from '../ui/Responsiveness';
class CheckoutSuccess extends Component {
    render() {
        return (
            <div>
                <DesktopContainer>
                    <Desktop />
                </DesktopContainer>
                <MobileContainer>
                    <Mobile />
                </MobileContainer>
            </div>
        )
    }
}

export default CheckoutSuccess;