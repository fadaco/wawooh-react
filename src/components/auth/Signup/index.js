import React, {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import Button from '../../ui/Button'
import { connect } from 'react-redux';
import { Roles } from '../../../config';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';
import { updateUserInput, registerUserOnly } from '../../../store/actions/UserAction';
import { Redirect } from 'react-router-dom';
import { GET_TOKEN } from '../../../shared/Storage';
import Layout from "../../ui/Layout";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            password: ''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    componentDidMount() {
        if(this.props.password) {
            this.setState({ password: this.props.password });
        }
    }

    toggleShow () {
       this.setState({ isHidden: !this.state.isHidden })
    }

    registerUser = () => {
        if (this.props.password !== this.props.confirmPassword) {
            this.props.updateUserInput('registerError', 'Password do not match');
            return;
        }

        let data = {
            lastName : this.props.lastName,
            firstName: this.props.firstName,
            role: Roles.USER,
            email: this.props.email,
            password: this.props.password,
            socialFlag: this.props.socialFlag
        };
        
        this.props.registerUserOnly(data);
    }

    onChangeInput(key, value) {
        this.props.updateUserInput(key, value);
    }

    commonButton() {
        if (GET_TOKEN()) {
            return <Redirect to={this.props.lastUrl} />
        }

        return (
            <div>
                <div style={{fontSize: 12, color: 'red', margin: '5px 0'}}>{this.props.registerError}</div>
                <Button
                    loading={this.props.loading}
                    label='SIGN UP'
                    bgColor='black'
                    textColor='white'
                    onClick={this.registerUser}
                />
            </div>
        )
    }

    render() {
        return (
            <Layout>
                <DesktopContainer>
                    <Desktop 
                        onChangeInput={(key, value) => this.onChangeInput(key, value)}
                        email={this.props.email}
                        password={this.props.password}
                        confirmPassword={this.props.confirmPassword}
                        lastname = {this.props.lastname}
                        firstname = {this.props.firstname}
                        toggle = {this.toggleShow}
                        toggleConf={this.toggleShow}
                        click={this.registerUser}
                        switch = {this.state.isHidden ? 'password':'text'}
                        icon = {this.state.isHidden ? 'fa fa-eye':'fa fa-eye-slash'}
                    >
                        {this.commonButton()}
                    </Desktop>
                </DesktopContainer>

                <MobileContainer>
                    <Mobile 
                        onChangeInput={(key, value) => this.onChangeInput(key, value)}
                        email={this.props.email}
                        password={this.props.password}
                        confirmPassword={this.props.confirmPassword}
                        lastname = {this.props.lastname}
                        firstname = {this.props.firstname}
                        toggle = {this.toggleShow}
                        toggleConf={this.toggleShow}
                        click={this.registerUser}
                        switch = {this.state.isHidden ? 'password':'text'}
                        icon = {this.state.isHidden ? 'fa fa-eye':'fa fa-eye-slash'}
                    >
                        {this.commonButton()}
                    </Mobile>
                </MobileContainer>
            </Layout>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state.user
});

const storeActions = {
    updateUserInput,
    registerUserOnly
};

export default connect(mapStateToProps, storeActions)(Signup);