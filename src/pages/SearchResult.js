import React, { Component } from 'react'
import DesktopProductList from '../components/products/ProductList/desktop';
import MobileProductList from '../components/products/ProductList/mobile';
import Button from '../components/ui/Button';
import { DesktopContainer, MobileContainer } from '../components/ui/Responsiveness';
import { connect } from 'react-redux';
import { searchProduct, loadMoreSearch, resetSearchList } from '../store/actions/ProductAction';
import Layout from "../components/ui/Layout";

class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0
        };
    }

    componentDidMount() {
        this._searchProduct();
    }

    componentWillUnmount() {
        this.props.resetSearchList();
    }

    _searchProduct() {
        this.props.searchProduct(this.searchBody(), this.props.searchResult);
    }

    searchBody = () => ({
        indexName: 'products',
        pageNumber: this.state.page,
        size: 10,
        searchTerm: this.props.match.params.query
    });

    loadMore() {
        this.setState({
            ...this.state,
            page: this.state.page + 1
        }, () => {
            this.props.loadMoreSearch(this.searchBody(), this.props.searchResult)
        });
    }

    render() {
        const { searching, searchResult, loadMore } = this.props;
        
        return (
            <Layout>
                <DesktopContainer>
                    <DesktopProductList list={searchResult} loading={searching} />
                </DesktopContainer>

                <MobileContainer>
                    <MobileProductList list={searchResult} loading={searching} />
                </MobileContainer>

                {
                    searchResult.length > 9
                        ? <Button loading={loadMore} label='Load More' width={'50%'} onClick={this.loadMore.bind(this)} />
                        : null
                }
                <div style={{marginBottom: 20}} />
            </Layout>
        )
    }
}

const mapStateToProps = state => state.product;

const stateActions = {
    searchProduct,
    loadMoreSearch,
    resetSearchList
};

export default connect(mapStateToProps, stateActions)(SearchResult);
