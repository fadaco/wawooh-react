import React, {Component} from 'react';
import Desktop from './desktop'
import Mobile from './mobile'
import { connect } from 'react-redux';
import {DesktopContainer, MobileContainer} from '../../ui/Responsiveness'
import {getFilterSubCat} from '../../../store/actions/FilterAction'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isfilter: true,
            isFilterUp: true,
            displayMenu: false,
            hideShow: ''
        }
        this.showFilter = this.showFilter.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
    }

    showFilter() {
        this.setState({isfilter: !this.state.isfilter});
        this.setState({isFilterUp: !this.state.isFilterUp});
    }

    showDropdownMenu(params) {
        switch (params) {
            case 'size':
                if (this.state.hideShow === params) {
                    this.setState({hideShow: ''})
                } else {
                    this.setState({hideShow: params});
                }
                break;
            case 'designer':
                if (this.state.hideShow === params) {
                    this.setState({hideShow: ''});
                } else {
                    this.setState({hideShow: params});
                }
                break;
            case 'price':
                if (this.state.hideShow === params) {
                    this.setState({hideShow: ''});
                } else {
                    this.setState({hideShow: params});
                }
                break;
            case 'color':
                if (this.state.hideShow === params) {
                    this.setState({hideShow: ''});
                } else {
                    this.setState({hideShow: params});
                }
                break;
            case 'subcat':
                if (this.state.hideShow === params) {
                    this.setState({hideShow: ''});
                } else {
                    this.setState({hideShow: params});
                }
                break;
            default:
                return this.setState({hidesShow: ''});
        }
    }

    componentDidMount() {
        this.props.getFilterSubCat();
    }

    render() {
        const subCatList = this.props.selectedCategory.subCategories;
        return (
            <div>
                <DesktopContainer>
                    <Desktop
                        defaultState={this.state.isFilterUp}
                        show={this.showFilter}
                        defaultDropShow={this.state.displayMenu}
                        toggleFilterText={this.state.isfilter ? 'Hide Filter' : 'Show Filter'}
                        icon={this.state.isfilter ? 'fa fa-angle-up' : 'fa fa-angle-down'}
                        showDropdown={(params) => this.showDropdownMenu(params)}
                        hideShow={this.state.hideShow}
                        subCatList={subCatList}
                    />

                </DesktopContainer>
                <MobileContainer>
                    <Mobile/>
                </MobileContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.filter,
    ...state.category
});

const storeActions = {
    getFilterSubCat
}

export default connect(mapStateToProps, storeActions)(Filter);