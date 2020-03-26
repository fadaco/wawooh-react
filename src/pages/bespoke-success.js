import React from 'react';
import styled from 'styled-components'
import Layout from "../components/ui/Layout";


export default () => { 
    return (
        <Layout>
            <MessageContainer>
                <div className="content">
                    <p>Thank you. Your request has been received. We will get back ASAP!</p>
                </div>
            </MessageContainer>
        </Layout>
    )
}

const MessageContainer = styled.div`
    width: 100%;
    margin: auto;
    padding: 6rem 15px;
    background: var(--dark-color);
    color: var(--white-color);
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
        font-size: 2.4rem;
        font-weight: bolder;
        text-align: center;
        animation: fadeInDown .5s linear;
        justify-content: center;
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
        width: 94%;
        margin: 2em auto;
        padding: 15px 1rem;
        .content {
            font-size: 2em;
        }
    }
`