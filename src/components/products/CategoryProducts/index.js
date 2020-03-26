import React from 'react';
import Desktop from './Desktop';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';

export default (props) => (
    <div>
        <DesktopContainer>
            <Desktop categoryName={props.categoryName} list={props.list} />
        </DesktopContainer>
        <MobileContainer>
            <div>MOBILE</div>
        </MobileContainer>
    </div>
)