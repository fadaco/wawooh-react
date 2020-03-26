import React,  {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { connect } from 'react-redux';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';
import { updateUserInput, authenticateUser, socialMediaLogin } from '../../../store/actions/UserAction';
import { LOGGER } from '../../../shared/Methods';

class Login extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            password: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.onFacebookResponse = this.onFacebookResponse.bind(this);
    }
    componentDidMount() {
        if(this.props.password) {
            this.setState({ password: this.props.password });
        }
    }

    onFacebookResponse(response) {
        LOGGER('fb response', response);
        if (response.accessToken) {
            this.props.socialMediaLogin(response);
        }
    }

    toggleShow () {
       this.setState({ isHidden: !this.state.isHidden })
    }

    loginUser = () => {
        let data = {
            email : this.props.email,
            password: this.props.password,
            socialFlag: this.props.socialFlag
        };

        this.props.authenticateUser(data);
    }

    onChangeInput(key, value) {
        this.props.updateUserInput(key, value);
    }
    
    render() {
        return (
            <div>
                <DesktopContainer>
                    <Desktop
                        onChangeInput={(key, value) => this.onChangeInput(key, value)}
                        email={this.props.email}
                        password={this.props.password}
                        toggle = {this.toggleShow}
                        click={this.loginUser}
                        switch = {this.state.isHidden ? 'password':'text'}
                        icon = {this.state.isHidden ? 'fa fa-eye':'fa fa-eye-slash'}
                        onFacebookResponse={this.onFacebookResponse}
                        loading={this.props.loading}
                        error={this.props.loginError}
                    />
                </DesktopContainer>

                <MobileContainer>
                    <Mobile
                       onChangeInput={(key, value) => this.onChangeInput(key, value)}
                       email={this.props.email}
                       password={this.props.password}
                       toggle = {this.toggleShow}
                       click={this.loginUser}
                       switch = {this.state.isHidden ? 'password':'text'}
                       icon = {this.state.isHidden ? 'fa fa-eye':'fa fa-eye-slash'}
                       onFacebookResponse={this.onFacebookResponse}
                       loading={this.props.loading}
                       error={this.props.loginError}
                    />
                </MobileContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.user
});

const storeActions = {
    updateUserInput,
    authenticateUser,
    socialMediaLogin
};

export default connect(mapStateToProps, storeActions)(Login);