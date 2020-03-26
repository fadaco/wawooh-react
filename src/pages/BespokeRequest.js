import React, { Component } from 'react';
import Layout from '../components/ui/Layout';
import RequestBespoke from '../components/bespokeRequest';

class BespokeRequest extends Component {
    render() {
        return (
            <Layout>
                <RequestBespoke />
            </Layout>
        )
    }
}

export default BespokeRequest;