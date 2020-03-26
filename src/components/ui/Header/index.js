import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';
import { connect } from 'react-redux';
import { DesktopContainer, MobileContainer } from '../Responsiveness';
import { getCategories } from '../../../store/actions/CategoryAction';
import { saveLastUrl } from '../../../store/actions/UserAction';
import { fetchCart } from '../../../store/actions/CartAction';
import { withRouter } from "react-router-dom";

class Header extends React.Component {    
    componentDidMount() {
        this.props.getCategories();
        this.props.fetchCart();
    };

    componentWillReceiveProps(newProps) {
        const pathName = newProps.location.pathname;
        if (pathName !== '/login' && pathName !== '/register' && pathName !== '/forgot-password') {
            newProps.saveLastUrl(newProps.pathName);
        }
    }

    render() {
        return(
            <div>
                <DesktopContainer>
                    <Desktop pathName={this.props.location.pathname} list={this.props.categoryList} count={this.props.cart}/>
                    <div style={divHolder} />
                </DesktopContainer>

                <MobileContainer>
                    <Mobile count={this.props.cart}/>
                    <div style={divHolder} />
                </MobileContainer>
            </div>
        );
    }
};

const divHolder = {
    height: 70,
    width: '100%',
    backgroundColor: '#fff'
};

const mapStateToProps = (state) => ({
    ...state.category,
   cart: state.cart.cartCount
});

const storeActions = {
    getCategories,
    fetchCart,
    saveLastUrl
};

export default connect(mapStateToProps, storeActions)(withRouter(Header));
