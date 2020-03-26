import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';

export default (props) => (
    <div>
        <DesktopContainer>
          <Desktop />
        </DesktopContainer>

        <MobileContainer>
          <Mobile imageList={props.imageList} colorList={props.colorList}/>
        </MobileContainer>

    </div>
)