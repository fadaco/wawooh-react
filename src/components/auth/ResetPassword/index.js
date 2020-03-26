import React,  {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
// import { connect } from 'react-redux';
import { DesktopContainer, MobileContainer } from '../../ui/Responsiveness';
//import { updateUserInput, authenticateUser } from '../../../store/actions/UserAction';

class ResetPassword extends Component {

    constructor() {
        super();
        this.state = {
            isHidden: true,
            password: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }
    componentDidMount() {
        if(this.props.password) {
            this.setState({ password: this.props.password });
        }
    }
   toggleShow () {
       this.setState({ isHidden: !this.state.isHidden })
       console.log('here');
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
                    />
                </MobileContainer>
            </div>
        )
    }
}

export default ResetPassword;
// const mapStateToProps = (state) => ({
//     ...state.user
// });

// const storeActions = {
//     updateUserInput,
//     authenticateUser
// };

// export default connect(mapStateToProps, storeActions)(Login);