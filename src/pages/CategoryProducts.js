import React from 'react';
import DesktopProductList from '../components/products/ProductList/desktop';
import MobileProductList from '../components/products/ProductList/mobile';
import Button from '../components/ui/Button';
import { connect } from 'react-redux';
import { updateProductValues, getProductList, resetProductList, loadMoreProduct } from '../store/actions/ProductAction';
import { setSelectedCategory } from '../store/actions/CategoryAction';
import { DesktopContainer, MobileContainer } from '../components/ui/Responsiveness';
import Layout from "../components/ui/Layout";

class CategoryProductsClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUrl: ''
        }
    }

    componentDidMount() {
        this.loadData();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.match.params.category.toLowerCase() !== this.state.currentUrl) {

            if (nextProps.productList.length > 1) {
                nextProps.resetProductList();
                this.loadData();
            }
        }
        return true;
    }

    componentWillUnmount() {
        this.props.resetProductList();
    }

    loadData() {
        setTimeout(() => {
            const categoryName = this.props.match.params.category.toLowerCase();

            this.setState({ currentUrl: categoryName }, () => {
                const {
                    setSelectedCategory,
                    categoryList,
                    productList,
                    size, page
                } = this.props;
                setSelectedCategory(categoryName, categoryList, page, size, productList);
            });
        }, 100);
    }

    loadMore() {
        this.props.loadMoreProduct();
        const { size, selectedCategory, productList } = this.props;

        const _page = this.props.page + 1;
        const body = { page: _page, size, categoryId: selectedCategory.id };
        this.props.getProductList(body, productList);
        
        this.props.updateProductValues('page', _page);
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

const mapStateToProps = state => ({
    ...state.category,
    ...state.product
});

const stateActions = {
    setSelectedCategory,
    updateProductValues,
    getProductList,
    resetProductList,
    loadMoreProduct
};

export default connect(mapStateToProps, stateActions)(CategoryProductsClass);
