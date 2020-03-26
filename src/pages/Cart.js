import React, { Component } from 'react';
import CartComponent from '../components/cart/CartCard';
import Layout from "../components/ui/Layout";

class Cart extends Component {

    render(){
        return (
            <Layout>
                <CartComponent/>
            </Layout>
        );
    }
}

export default Cart;