import React, {Component} from 'react';
import DesktopProductList from '../components/products/ProductList/desktop';
import MobileProductList from '../components/products/ProductList/mobile';
import { getBespokeProduct, bespokeValues } from '../store/actions/BespokeAction';
import Button from '../components/ui/Button';
import { connect } from 'react-redux';
import { DesktopContainer, MobileContainer } from '../components/ui/Responsiveness';
import Layout from "../components/ui/Layout";
import styled from 'styled-components';
import WOW from 'wowjs';
import {NavLink} from 'react-router-dom';

class BespokeProduct extends Component {
    constructor() {
        super();
        this.state = {
            sidebar: 'show',
        }
    }

    componentDidMount() {
        if(this.props.bespokeProductList.length < 1) {
            this.getBespokeProducts();
        }
        
        new WOW.WOW({
            boxClass: 'wow',
            offset:'0',
            animateClass:'animated',
            live: true,
            mobile: true
        }).init();
    }

    getBespokeProducts() {
        const { getBespokeProduct, bespokePage, bespokeSize} = this.props;
        getBespokeProduct({page: bespokePage, size: bespokeSize}, this.props.bespokeProductList);
    }

    loadMore() {
        const page = this.props.bespokePage + 1;
        this.props.bespokeValues('bespokePage', page);
        setTimeout(() => {
            this.getBespokeProducts();
        }, 100);
    }

    toggle = () => {
        if (this.state.sidebar === 'show') {
            this.setState({ sidebar: 'hideShow' })
        } else {
            this.setState({ sidebar: 'show' })
        }
    }

    render() {
        const {bespokeProductList, loadingBespoke, loadMore } = this.props;
        
        const Sidebar=styled.div`
            margin: 1px;
            .side {
                background: var(--dark-color);
                position: fixed;
                right:0;
                top: 22%;
                min-width: 230px;
                min-height: 150px;
                z-index: 999;
                display: flex;
                flex-direction: column;
                transition: linear all 0.5s;
                .side-body {
                    padding: 4px;
                    text-align: center;
                    color: var(--white-color);
                    h4 {
                        margin: 0;
                        font-weight: bold;
                    }
                }
            }
            .show {     
                transform: translateX(95%);
            }
            .hideShow {
                transform: translateX(-95%);
            }
            .remove-icon {
                display: flex;
                font-size: 1rem;
                color: #fff;
                padding: 14px 14px 4px;
                justify-content: left;
                margin-top: -28px;
                margin-left: -28px;
                .btn {
                    background: var(--white-color);
                    outline: none;
                    padding: 7px 10px;
                    font-size: 17px;
                    border-radius: 50%;
                    border: 1px solid rgba(0,0,0,.03);
                    box-shadow: 0px 10px 20px rgba(0,0,0,.3);
                    &:hover {
                        cursor: pointer;
                        transition: ease all 0.5s;
                        box-shadow:none;
                        .side {
                            transform: translateX(-50%);
                            transition: linear all 0.5s;
                        }
                    }
                }
            }
        `
        return (
            <Layout>
                <DesktopContainer>
                <Sidebar>
                    <div className="side wow slideInRight" data-wow-delay="12s" style={this.state.sidebar === 'show' ? show : hideShow}>
                        <div className="remove-icon"><button className="btn" onClick={this.toggle}><i className={this.state.sidebar === 'show' ? 'fa fa-arrow-right': 'fa fa-arrow-left'}></i></button></div>
                        <div className="side-body">
                            <h3>Can't find your styles?</h3>
                            <NavLink to="/style-catalogue"><Button label="click here"/></NavLink>
                        </div>
                    </div>
                </Sidebar>
                    <DesktopProductList list={bespokeProductList} loading={loadingBespoke}/>
                </DesktopContainer>

                <MobileContainer>
                <Sidebar>
                    <div className="side wow animated slideInRight" data-wow-delay="3s" style={this.state.sidebar === 'show' ? show : hideShow}>
                        <div className="remove-icon"><button className="btn" onClick={this.toggle}><i className="fa fa-times"></i></button></div>
                        <div className="side-body wow animated fadeInDown" data-wow-delay="3.5s">
                            <h3>Can't find your styles?</h3>
                            <NavLink to="/style-catalogue"><Button label="click here"/></NavLink>
                        </div>
                    </div>
                </Sidebar>
                    <MobileProductList list={bespokeProductList} loading={loadingBespoke} />
                </MobileContainer>
                
                {
                    this.props.bespokeProductList.length > 9
                        ? <Button label='Load More' loading={loadMore} width={'50%'} onClick={this.loadMore.bind(this)} />
                        : null
                }
                <div style={{marginBottom: 20}} />

            </Layout>
        )
    }
}
const mapStateToProps = state => state.bespoke;

const show = {     
    transform: 'translateX(0%)',
    transition:'ease all 0.5s',
    animation: 'slideInRight .4s linear'
};

const hideShow = {
    transform: 'translateX(90%)',
    transition:'ease all 0.5s',
    animation: 'slideOutRight .4s linear'
};

const stateActions = {
    getBespokeProduct,
    bespokeValues
};

export default connect(mapStateToProps, stateActions)(BespokeProduct)

