import React from 'react';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';
import Desktop from './desktop';
import Mobile from './mobile';

class Profile extends React.Component {
    render(){
        return (
            <div>
                <DesktopContainer>
                   <Desktop/>
                </DesktopContainer>

                <MobileContainer>
                   <Mobile/>
                </MobileContainer>
            </div>
        )
    }
}

export default Profile;