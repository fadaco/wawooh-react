import React from 'react'
import Desktop from './desktop'
import Mobile from './mobile'
import { connect } from 'react-redux';
import { getFrequentlyBought } from '../../../store/actions/ProductAction';

import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness'

class FrequentlyBought extends React.Component {
    componentDidMount() {
        this.props.getFrequentlyBought();
    }

    render(){
        return (
            <div>
                <DesktopContainer>
                    <Desktop list={this.props.freqBoughtList} />
                </DesktopContainer>
                
                <MobileContainer>
                    <Mobile list={this.props.freqBoughtList} />
                </MobileContainer>
            </div>
        )
    }
}

const mapStateToProps = state => state.product;

const stateActions = {
    getFrequentlyBought
}

export default connect(mapStateToProps, stateActions)(FrequentlyBought)