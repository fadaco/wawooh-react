import React, { Component } from 'react';
import ProfileComponent from '../components/profile/ProfileCard';
import { connect } from 'react-redux';
import { getProfileInfo } from '../store/actions/UserAction';
import Loader from '../components/ui/Loader';
import Layout from "../components/ui/Layout";

class Profile extends Component {
    componentDidMount() {
        this.props.getProfileInfo();
    }

    render() {
        return (
            <Layout>
                {
                    this.props.userLoading
                    ? <Loader />
                    : <ProfileComponent user={this.props.userInfo} />
                }
            </Layout>
        )
    }
}

const mapStateToProps = state => state.user;

const stateActions = {
    getProfileInfo
}

export default connect(mapStateToProps, stateActions)(Profile);