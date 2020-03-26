import React, {Component} from 'react';
import CheckoutReceipt from '../components/checkoutSuccess';
import Layout from "../components/ui/Layout";

class CheckoutSuccess extends Component {
    render() {
        return (
            <Layout>
                <CheckoutReceipt />
            </Layout>
        )
    }
}

export default CheckoutSuccess;