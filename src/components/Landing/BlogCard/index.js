import React from 'react'

import Desktop from './desktop'
import Mobile from './mobile'
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';

export default (props) => (
    <div>
        <DesktopContainer>
          <Desktop  source={props.source}/>
        </DesktopContainer>

        <MobileContainer>
          <Mobile />
        </MobileContainer>
    </div>
)