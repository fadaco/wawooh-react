import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';

export default (props) => {
    const addToBag = () => {
        alert('add');
    };

    return (
        <div>
            <DesktopContainer>
                <Desktop data={props} addToBag={addToBag}/>
            </DesktopContainer>

            <MobileContainer>
                <Mobile addToBag={addToBag}/>
            </MobileContainer>
        </div>
    )
}