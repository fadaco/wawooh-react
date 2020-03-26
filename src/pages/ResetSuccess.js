import React from 'react';
import styled from 'styled-components'
import Button from '../components/ui/Button';
import { NavLink } from 'react-router-dom';
import Layout from "../components/ui/Layout";


export default () => { 
    return (
        <Layout>
            <MessageContainer>
                <h3>RESET PASSWORD LINK SENT</h3>
                <div className="content">
                    <p>We've sent a reset password email to email</p>

                    <p>To create your new password, click the link in the email and enter a new one - easy </p>

                    <p>Didn't receive the email? Check your junk mail or send me another.</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{flex: '0 0 50%', paddingRight:'10px'}}>
                        <Button
                            label="RESEND LINK"
                            />
                    </div>
                    <div style={{flex: '0 0 50%', paddingRight:'10px'}}>
                        <NavLink className="btn" to="/login">LOG IN</NavLink>
                    </div>

                </div>
            </MessageContainer>
        </Layout>
    )
}

const MessageContainer = styled.div`
    width: 40%;
    margin: 2em auto;
    padding: 15px 4rem;
    background: var(--white-color);
    h3 {
        display:flex;
        justify-content: center;
        font-weight: bold;
        letter-spacing: 1px;
        color: var(--dark-color);
    }
    .content {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: 400;
    }
    .btn {
        height: 45px;
        outline:none;
        background: var(--white-color);
        width: 99%;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto;
        color: #999;
        text-decoration: none;
        border: 1px solid #999;
        &:hover {
            border: 1px solid var(--dark-color);
            color var(--dark-color);
        }
    }
    @media(max-width:768px) {
        width: 84%;
        margin: 2em auto;
        padding: 15px 1rem;
    }
`