import React from 'react';
import { connect } from 'react-redux';
import Layout from "../components/ui/Layout";

class ProductList extends React.Component {

    render() {
        return (
            <Layout>

            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.product, ...state.category
});


export default connect(mapStateToProps)(ProductList);