import React from 'react';
import styled from 'styled-components';
import instagram from '../../../assets/svg/instagram.svg';
import twitter from '../../../assets/svg/twitter.svg';
import facebook from '../../../assets/svg/facebook.svg';
import youtube from '../../../assets/svg/youtube.svg';
import { NavLink } from 'react-router-dom';

const Footer = styled.footer`
    background-color: var(--footer-color);
    padding: 20px;
    color: white;
    display: flex;
    .first-div {
        flex: 1;
    }
    .last-div {
        flex: 2;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
    }
    .update-info {
        font-size: 12px;
        font-weight: 300;
    }
    .email-updates {
        margin-bottom: 5px;
        font-weight: bold;
    }
    .subscribe {
        height: 45px;
        border: 1px solid white;
        display: flex;
        margin-top: 5px;

        input, button {
            outline: none;
            border: none;
            height: 100%;
            font-size: 14px;
            background-color: transparent;
            color: white;
        }

        input {
            flex: 1;
            padding-left: 15px;
        }
        button {
            width: 100px;
            border-left: 1px solid white;
            cursor: pointer;
        }
    }
    .social-media {
        display: flex;
        margin-top: 15px;

        div {
            height: 30px;
            width: 30px;
            border: 1px solid white;
            margin-right: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
    .footer-segment {
        font-weight: bold;
        margin-bottom: 15px;
    }
    .footer-buttons {
        font-size: 12px;
        margin-bottom: 15px;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
    }
    .document-link{
        color: white !important;
        text-decoration: none;
    }
`

export default (props) => {
    const list = props.list || [];

    return (
        <Footer>
            <div className="first-div">
                <div className="email-updates">Email updates</div>
                <div className="update-info">Be the first to hear about our offers</div>
                <div className="update-info">and announcements</div>
                <div className="subscribe">
                    <input className="input" type="email" placeholder="Enter your email" />
                    <button>SUBSCRIBE</button>
                </div>

                <div style={{margin: '30px 0 10px 0'}}>
                    <div>Connect with us</div>
                    <div className="social-media">
                        <div><a href={'https://twitter.com'} target={'_blank'}><img src={twitter} alt="twitter" /></a></div>
                        <div><a href='https://www.instagram.com/wawoohhq/' target={'_blank'}><img src={instagram} alt="instagram" /></a></div>
                        <div><a href={'https://www.facebook.com/wawoohhq/'} target={'_blank'}><img src={facebook} alt="facebook" /></a></div>
                        <div><img src={youtube} alt="youtube" /></div>
                    </div>
                </div>
            </div>

            <div className="last-div">
                <div>
                    <div className="footer-segment">Shop</div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    {
                        list.map((item) => {
                            return (
                                <NavLink
                                    to={`/category/${item.categoryName}`}
                                    className="footer-buttons"
                                    key={item.id}
                                >{item.categoryName}</NavLink>
                                // <div className="footer-buttons" key={item.id}>{item.categoryName}</div>
                            )
                        })
                    }
                    </div>
                </div>

                <div>
                    <div className="footer-segment">Let us help</div>
                    <div className="footer-buttons"><NavLink to="/feedback" className="document-link">Feedback</NavLink></div>
                    <div className="footer-buttons"><NavLink to="/faq" className="document-link">FAQs</NavLink></div>
                    <div className="footer-buttons"><NavLink to="/about" className="document-link">About Us</NavLink></div>
                    <div className="footer-buttons"><NavLink to="/shipping" className="document-link">Shipping & Delivery</NavLink></div>
                    <div className="footer-buttons"><NavLink to="/terms" className="document-link">Terms & Conditions</NavLink></div>
                    <div className="footer-buttons"><NavLink to="/privacy" className="document-link">Privacy Policy</NavLink></div>
                </div>

                <div>
                    <div className="footer-segment">Make money with us</div>
                    <div className="footer-buttons">Become a seller</div>
                    <div className="footer-buttons">Join our affiliate link</div>
                </div>
            </div>
        </Footer>
    );
};
 