import React from 'react';
import DesktopProductList from '../components/products/ProductList/desktop';
import MobileProductList from '../components/products/ProductList/mobile';
import Button from '../components/ui/Button';
import { connect } from 'react-redux';
import { getNewArrivals, updateProductValues } from '../store/actions/ProductAction';
import { DesktopContainer, MobileContainer } from '../components/ui/Responsiveness';
import Layout from "../components/ui/Layout";

class NewIn extends React.Component {

    componentDidMount() {
        if (this.props.newInList.length < 1) {
            this.getProducts();
        }
    }

    getProducts() {
        const { getNewArrivals, newInPage, newInSize } = this.props;
        getNewArrivals({ page: newInPage, size: newInSize }, this.props.newInList);
    }

    loadMore() {
        const page = this.props.newInPage + 1;
        this.props.updateProductValues('newInPage', page);
        setTimeout(() => {
            this.getProducts();
        }, 100);
    }

    render() {
        const { newInList, loadingNewIn, loadMore } = this.props;
        return (
            <Layout>
                <DesktopContainer>
                    <DesktopProductList list={newInList} loading={loadingNewIn} />
                </DesktopContainer>

                <MobileContainer>
                    <MobileProductList list={newInList} loading={loadingNewIn} />
                </MobileContainer>

                {
                    this.props.newInList.length > 9
                        ? <Button label='Load More' loading={loadMore} width={'50%'} onClick={this.loadMore.bind(this)} />
                        : null
                }
                <div style={{marginBottom: 20}} />
            </Layout>
        )
    }
}

const mapStateToProps = state => state.product;

const stateActions = {
    getNewArrivals,
    updateProductValues
};

export default connect(mapStateToProps, stateActions)(NewIn);