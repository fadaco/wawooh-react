import React from 'react'
import Styled from 'styled-components';

const FLEX = Styled.div`
    display: flex;
`
export default () => (
    <div style={{padding: '0px 40px'}}>
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>Wawooh Brand</h1>
            </div>
            <div style={{textAlign: 'center'}}>
                <p>Fashion business for us is different. We set ourselves apart from every other afrocentric fashion platforms by connecting you with brands that totally change the narrative of the African fashion designer/brand or creative. Our Brands take out their time to understand your preferences and in so doing, create memories for you in form of trendy clothing, shoes, accessories and gifts that best express your individuality and wrap you in as part of the new generation of the fashion world. When it comes to choosing brands, we select the best in the country, giving you no worries but an assurance of you getting a variety and the most covetable and exclusive collectibles.</p>
            </div>
            <br />
            <div>
                <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349316/aboutUs/brand1.jpg" alt="brand1" style={{width: '100%'}} />
            </div>
        </div>
        <br />
        <br />
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>Our Brand Designs</h1>
            </div>
            <div style={{textAlign: 'center'}}>
                <p>Expression comes with understanding your persona. Our designs are created from an understanding of your likes, dislikes, body structure, personality, mood and a rebellious need to give you the extra vibe that makes you the cynosure of all eyes. From this understanding and creative fashion pieces that follow thereof, is the confidence that expresses your individuality.</p>
            </div>
            <br />
            <div>
                <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349322/aboutUs/brand2.jpg" alt="brand2" style={{width: '100%'}} />
            </div>
        </div>
        <br />
        <br />
        <FLEX>
            <div style={{width: '50%', padding: '10px', height: 450}}>
                <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349328/aboutUs/who8.gif" alt="brand3" style={{width: '100%', height: '100%'}} />
            </div>
            <div style={{width: '50%', padding: '10px'}}>
                <h2 style={{textAlign: 'center'}}>Vendors</h2>
                <p style={{textAlign: 'center'}}>We have a great number of top fashion designers who are firmly established with production quarters across Africa. We are serious about making sure every single person in our supply chain comply with our tagline, “delivered as promised” and produce fashion outfits/accessories that best express you. We set high standards and support our vendors in fulfilling our brand promise, by checking out their factories to be sure that they can meet up with orders, carrying out the best quality assurance checks to make sure that our customers get the value worth of money spent on orders. Our vendors are exposed to a larger market and are able to get make more money for themselves and those in their employ by being on a platform that leverages the opportunities and potentials of the digital world, large networks and experiences of experts in the business of fashion- <b>WAWOOH</b>.</p>
            </div>
        </FLEX>
        <br />
        <br />
    </div>
)