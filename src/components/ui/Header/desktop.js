import React from 'react';
import logo from '../../../assets/images/logo.png';
import bag from '../../../assets/svg/bag.svg';
import { NavLink } from 'react-router-dom';
import { GET_TOKEN } from '../../../shared/Storage';
import SubDropdown from '../SubcatDrop';
import '../../../assets/css/submenu.css';

export default (props) => {
    const list = props.list || [];
    const count = props.count;

    return (
        <div>
            <div style={styles.headerContainer}>
                <div style={styles.divStyle}>
                    <NavLink
                        to={`/new-in`}
                        activeClassName="selected-label"
                        className="category-label"
                        isActive={() => props.pathName.indexOf('new-in') > -1}
                    >New In</NavLink>
                    {
                        list.map((item) => {
                            return (
                                <NavLink
                                    to={`/category/${item.categoryName}`}
                                    activeClassName="selected-label"
                                    className="category-label"
                                    key={item.id}
                                    isActive={() => props.pathName.indexOf(item.categoryName) > -1}
                                >{item.categoryName}</NavLink>
                            )
                        })
                    }
                    <NavLink to="/bespoke" activeClassName="selected-label" className="category-label">Bespoke</NavLink>
                </div>

                <NavLink to="/" style={{...styles.divStyle, ...styles.imageDiv}}>
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>

                <div style={{...styles.divStyle, ...styles.rightDiv}}>
                    {/*<NavLink to="/" className="category-label" style={{fontWeight: 'bold'}}>Showcase</NavLink>*/}
                    <NavLink to="/login" className="category-label">
                    {GET_TOKEN() ? 'Profile' : 'Login'}
                    </NavLink>
                    <NavLink to="/cart" className="category-label" style={styles.bagDiv}>
                        <img src={bag} alt="cart" />
                    </NavLink>
                    <div style={Object.assign(count < 1 ? "" : styles.countBadge)} >
                        {count < 1 ? '' : count}
                    </div>
                </div>
            </div>
            <SubDropdown/>
        </div>
    )
};

const styles = {
    headerContainer: {
        height: '70px',
        border: '1px solid whitesmoke',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        zIndex: 30000,
        display: 'flex'
    },
    divStyle: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    imageDiv: {
        justifyContent: 'center',
        flex: 1
    },
    rightDiv: {
        justifyContent: 'flex-end'
    },
    bagDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        border: '1px solid rgba(0,0,0,0.5)',
        borderRadius: '50%'
    },
    countBadge: {
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 17,
        right: 17,
        fontSize: 10,
        height: 13,
        width: 13,
        borderRadius: '100%',
        fontWeight: 'bold',
        zIndex: 3000
    }
}
