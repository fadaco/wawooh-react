import React, { Component } from 'react';
import CustomizeOrder from '../components/products/Customize';
import Layout from "../components/ui/Layout";

class Customize extends Component {

    render(){
        return (
            <Layout>
                <CustomizeOrder/>
            </Layout>
        );
    }
}

export default Customize;