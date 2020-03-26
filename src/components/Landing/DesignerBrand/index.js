import React from 'react';
import Desktop from './desktop'
import Mobile from './mobile'
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';
import { withRouter } from 'react-router-dom';

class DesignerBand extends React.Component {
    onDesignerClick(item) {
        const name = item.designerName.trim().replace(/ /gi, '-');
        this.props.history.push(`/designer/${name}-${item.designerId}`);
    }

    render() {
        return (
            <div>
                <DesktopContainer>
                    <Desktop gotoDesigner={(item) => this.onDesignerClick(item)} />
                </DesktopContainer>

                <MobileContainer>
                    <Mobile gotoDesigner={(item) => this.onDesignerClick(item)} />
                </MobileContainer>
            </div>
        )
    }
}

export default withRouter(DesignerBand);