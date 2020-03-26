import React from 'react';
import hamburger from '../../../assets/svg/hamburger.svg';
import logo from '../../../assets/images/logo.png';
import search from '../../../assets/svg/search.svg';
import favorite from '../../../assets/svg/favorite.svg';
import user from '../../../assets/svg/user.svg';
import mobile_bag from '../../../assets/svg/mobile_bag.svg';
import MobileDrawer from '../Drawer/MobileDrawer';
import { SwipeableDrawer } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { GET_TOKEN } from '../../../shared/Storage';
import {connect} from "react-redux";
import { toggleDrawer } from "../../../store/actions/DrawerAction";

class mobile extends React.Component {

    onOpen() {
        this.props.toggleDrawer(true);
    }

    onClose(ev) {
        this.props.toggleDrawer(false);
    }

    render() {
        const { count } = this.props;
        return (
            <div>
                <div style={styles.headerContainer}>

                    <div style={styles.rowItem}>
                        <img src={hamburger} alt="hamburger" onClick={() => this.onOpen()} />
                        <NavLink to="/"><img src={logo} className="logo" style={styles.image} alt="logo" /></NavLink>
                    </div>

                    <div style={{...styles.rowItem, paddingRight: 30}}>
                        <NavLink to='#' onClick={(e)=>{e.preventDefault(); console.log('search')}}><img style={styles.iconImages} src={search} alt="search" /></NavLink>
                        <NavLink to="/login">
                        {GET_TOKEN() ? <img style={styles.iconImages} src={user} alt="user" /> : <img style={styles.iconImages} src={user} alt="user" />}
                        </NavLink>
                        <img style={styles.iconImages} src={favorite} alt="favorite" />

                        <div style={{...styles.iconImages}}>
                            <div style={{...styles.bagStyle}}>
                                <NavLink to="/cart"><img src={mobile_bag} alt="bag" /></NavLink>
                            </div>

                            <div style={Object.assign(count < 1 ? "" : styles.countBadge)} >
                                {count < 1 ? '' : count}
                            </div>
                        </div>
                    </div>
                </div>

                <SwipeableDrawer
                    open={this.props.showDrawer}
                    anchor='left'
                    onOpen={this.onOpen.bind(this)}
                    onClose={this.onClose.bind(this)}
                >
                    <div>
                        <MobileDrawer />
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

const styles = {
    headerContainer: {
        height: '60px',
        border: '1px solid whitesmoke',
        width: '100%',
        justifyContent: 'space-between',
        padding: '0 15px',
        display: 'flex',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        zIndex: 500
    },
    rowItem: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    image: {
        marginTop: '10px',
        marginLeft: '15px'
    },
    iconImages: {
        marginLeft: 15
    },
    bagStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 7px',
        border: '1px solid var(--dark-color)',
        borderRadius: '100%',
    },
    countBadge: {
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 13,
        right: 13,
        fontSize: 10,
        height: 12,
        width: 12,
        borderRadius: '100%',
        fontWeight: 'bold',
        zIndex: 3000
    }
};

const mapStateToProps = state => state.drawer;

export default connect(mapStateToProps, {toggleDrawer})(mobile);
