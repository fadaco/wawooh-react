import React from 'react';
import { DesktopContainer, MobileContainer } from "../components/ui/Responsiveness";
import DesktopProductList from "../components/products/ProductList/desktop";
import MobileProductList from "../components/products/ProductList/mobile";
import Button from "../components/ui/Button";
import { connect } from "react-redux";
import { getDesignerProducts } from '../store/actions/DesignerAction';
import Layout from "../components/ui/Layout";

class DesignerProducts extends React.Component {

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts() {
        const pathParam = this.props.match.params.name;
        const designerSplit = pathParam.split('-');
        const designerId = designerSplit[designerSplit.length - 1];
        const body = {page: this.props.page, size: this.props.size};
        this.props.getDesignerProducts(body, designerId);
    }

    loadMore() {

    }

    render() {
        const { loading, productList, loadMore } = this.props;

        return (
            <Layout>
                <DesktopContainer>
                    <DesktopProductList list={productList} loading={loading} />
                </DesktopContainer>

                <MobileContainer>
                    <MobileProductList list={productList} loading={loading} />
                </MobileContainer>

                {
                    productList.length > 9
                        ? <Button loading={loadMore} label='Load More' width={'50%'} onClick={this.loadMore.bind(this)} />
                        : null
                }
                <div style={{marginBottom: 20}} />
            </Layout>
        )
    }
}

const mapStateToProps = state => state.designer;

const stateActions = { getDesignerProducts };

export default connect(mapStateToProps, stateActions)(DesignerProducts);
