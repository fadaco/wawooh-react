import React, { Component } from 'react'
import Desktop from './desktop';
import Mobile from './mobile';
// import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {DesktopContainer, MobileContainer} from '../../ui/Responsiveness';

class StyleDetails extends Component {
    constructor(props) {
        super(props);
        this.state= {
            select: ''
        }
    }
    render() {
        return (
            <div>
                <DesktopContainer>
                    <Desktop data={this.props.data}/>
                </DesktopContainer>
                <MobileContainer>
                    <Mobile data={this.props.data}/>
                </MobileContainer>
            </div>
        )
    }
}

export default withRouter(StyleDetails);