import React from 'react';
import Styled from 'styled-components';
import Button from "../ui/Button";


const DIV= Styled.div`
    display: flex;
    padding: 50px;
    .about-card{
        padding: 15px; 
        width: 33%;
     }
     .center{
         text-align: center;
     }
     .about-img{
        width: 100%;
        height: 500px;
        img{
            width: 100%;
            height: 100%
            object-fit: cover;
        }
     }
`
const About = Styled.div`
    text-align: center;
    
`
export default (props) => (
    <div>
        <About>
            <h1>COME CLOSER FASHION LOVER</h1>
            <p>We are the trusted stop-shop for the Afro-modern man and woman.</p>
            <p>Gone through our site yet? You totally should, we fix you up real good!</p>  
        </About>
        <DIV>
            <div className="about-card">
                <div className="about-img">
                    <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349325/aboutUs/who.jpg" alt="Who-we-are" />
                </div>
                <div className="center">
                    <h3>WHO WE ARE</h3>
                    <p>Your favorite fashion fixer, always on time to meet your wardrobe demands.</p>
                    <Button onClick={() => props.navigate('/about/who-we-are')} label="CHECK US OUT" width="60%"/>
                </div>
            </div>
            <div className="about-card">
                <div className="about-img">
                    <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349335/aboutUs/event.jpg" alt="Wawooh-event" />
                </div>
                <div className="center">
                    <h3>WAWOOH EVENTS</h3>
                    <p>Keep up with style moments & enjoy fun content that make you come alive.</p>
                    <Button onClick={() => props.navigate('/about/events')} label="SURF" width="60%"/>
                </div>
            </div>
            <div className="about-card">
                <div className="about-img">
                    <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349341/aboutUs/brand.jpg" alt="Wawooh-brand"/>
                </div>
                <div className="center">
                    <h3>WAWOOH BRANDS</h3>
                    <p>Just the way you want it- stylish, on time, in full, original and intensely creative.</p>
                    <Button onClick={() => props.navigate('/about/brands')} label="DISCOVER HERE" width="60%"/>
                </div>
            </div>
        </DIV>
    </div>
);
