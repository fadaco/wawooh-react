import React from 'react'
import Mobile from './mobile'
import Desktop from './desktop'

import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness'

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
