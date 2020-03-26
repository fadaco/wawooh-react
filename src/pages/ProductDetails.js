import React from 'react';
import Desktop from '../components/products/ProductDetails/desktop';
import Mobile from '../components/products/ProductDetails/mobile';
import DetailsLoading from '../components/ui/DetailsLoading/desktop';
import { DesktopContainer, MobileContainer } from '../components/ui/Responsiveness';
import { connect } from "react-redux";
import { getProductDetails } from "../store/actions/ProductAction";
import Layout from "../components/ui/Layout";

class ProductDetails extends React.Component {
    componentDidMount() {
        const pathName = this.props.match.params.name;
        const pathNameSplit = pathName.split('-');
        const productId = pathNameSplit[pathNameSplit.length - 1];
        this.props.getProductDetails(productId);
    }

    render() {
        return (
            <Layout>
                <DesktopContainer>
                    {
                        this.props.loadingDetails
                        ? <DetailsLoading /> : <Desktop data={this.props.productData} />
                    }
                </DesktopContainer>

                <MobileContainer>
                    <Mobile data={this.props.productData} />
                </MobileContainer>
            </Layout>
        )
    }
}

const mapStateToProps = state => state.product;

const stateActions = {
    getProductDetails
};

export default connect(mapStateToProps, stateActions)(ProductDetails);