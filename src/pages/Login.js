import React from 'react';
import Login from '../components/auth/Login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GET_TOKEN } from '../shared/Storage';
import { updateUserInput } from '../store/actions/UserAction';
import Layout from "../components/ui/Layout";
import { withRouter } from 'react-router-dom';

class MainLogin extends React.Component {

    componentWillUnmount() {
        this.props.updateUserInput('loggedIn', false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn) {
            this.props.history.goBack();
        }
    }

    render() {
        if (this.props.loggedIn) {
            return null;
        }

        if (GET_TOKEN()) {
            return <Redirect to="/profile" />
        }

        return (
            <Layout>
                <Login />
            </Layout>
        );
    }
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, { updateUserInput })(withRouter(MainLogin));
