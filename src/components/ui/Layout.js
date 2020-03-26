import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default (props) => {
    return (    
        <div style={props.style}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
};
