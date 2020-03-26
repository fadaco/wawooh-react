import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';

export default () => (
    <div>
        <DesktopContainer>
            <Desktop />
        </DesktopContainer>

        <MobileContainer>
            <Mobile />
        </MobileContainer>
    </div>
)