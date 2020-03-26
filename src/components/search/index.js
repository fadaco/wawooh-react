import React, {Component} from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import {DesktopContainer, MobileContainer} from '../ui/Responsiveness';
import { withRouter } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileSearch: false
        };
        this.toggleSearch = this.toggleSearch.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput = (e) => {
        e.preventDefault();
        const val = e.target.value;
        const name = e.target.name;
        this.search[name] = val;
    };

    toggleSearch() {
        this.setState({toggleSearch: !this.state.mobileSearch})
    }

    searchData = (e) => {
        e.preventDefault();
        this.props.history.push(`/search/${this.search.query}`);
    };

    search = {
        query:''
    };

    render() {
        return (
            <div>
                <DesktopContainer>
                    <Desktop
                        change={this.onChangeInput}
                        handleSubmit={this.searchData}
                    />
                </DesktopContainer>
                <MobileContainer>
                    <Mobile
                        hide={this.state.mobileSearch}
                        change={this.onChangeInput}
                        handleSubmit={this.searchData}
                        showSearch={this.toggleSearch}
                     />
                </MobileContainer>
            </div>
        )
    }
}

export default withRouter(Search);