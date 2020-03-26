import React from "react";
import {connect} from "react-redux";
import {getSubCategoryProducts, setSubCategoryValues, resetSubCategoryValues} from "../store/actions/SubCategoryAction";
import Layout from "../components/ui/Layout";
import {DesktopContainer, MobileContainer} from "../components/ui/Responsiveness";
import DesktopProductList from "../components/products/ProductList/desktop";
import MobileProductList from "../components/products/ProductList/mobile";
import Button from "../components/ui/Button";

class SubCategoryProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = { savedUrl: '' }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const paramArray = this.props.match.params.subCategory.split('-');
        const subCategoryId = paramArray[paramArray.length - 1];
        const { page, size, getSubCategoryProducts, productList } = this.props;
        const body = {
            page, size, subcategoryId: subCategoryId
        };
        getSubCategoryProducts(body, productList, page);
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
                        ? <Button loading={loadMore} label='Load More' width={'50%'} onClick={this.loadData.bind(this)} />
                        : null
                }
                <div style={{marginBottom: 20}} />
            </Layout>
        )
    }
}

const mapStateToProps = state => state.subCategory;

const stateActions = {
    getSubCategoryProducts,
    setSubCategoryValues,
    resetSubCategoryValues
};

export default connect(mapStateToProps, stateActions)(SubCategoryProducts);
