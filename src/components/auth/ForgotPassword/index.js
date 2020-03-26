import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import Button from '../../ui/Button';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';
import { connect } from 'react-redux';
import { forgotPassword, updateUserInput } from '../../../store/actions/UserAction';
import { GET_TOKEN } from '../../../shared/Storage';
import { Redirect } from 'react-router-dom';

const ForgotPassword = (props) => {
    const onClick = (ev) => {
        props.forgotPassword({
            currentUrl: 'https://wawooh.com',
            email: props.email
        })
    }

    const button = (props) => (
        <div>
            <div style={{fontSize: 12, color: 'red', margin: '5px 0'}}>{props.resetError}</div>
            <Button
                label='Reset Password'
                bgColor='black'
                textColor='white'
                onClick={onClick}
                loading={props.resetLoading}
            />
        </div>
    )

    const _onValueChange = (ev) => {
        props.updateUserInput(ev.target.name, ev.target.value);
    }

    if (GET_TOKEN()) {
        return <Redirect to={props.lastUrl} />
    }

    return (
        <div>
            <DesktopContainer>
                <Desktop email={props.email} onValueChange={_onValueChange}>
                    {button(props)}
                </Desktop>
            </DesktopContainer>

            <MobileContainer>
                <Mobile email={props.email} onValueChange={_onValueChange}>
                    {button(props)}
                </Mobile>
            </MobileContainer>
        </div>
    )
}

const mapStateToProps = state => state.user;

const stateActions = {
    forgotPassword,
    updateUserInput
};

export default connect(mapStateToProps, stateActions)(ForgotPassword)