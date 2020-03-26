import React, { Component } from 'react';
import CheckoutComponent from '../components/checkout/CheckoutCard';
import Layout from "../components/ui/Layout";
class Checkout extends Component {

    render(){
        return (
            <Layout>
                <CheckoutComponent/>
            </Layout>
        );
    }
}

export default Checkout;