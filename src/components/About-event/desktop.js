import React from 'react'
import Styled from 'styled-components';

const FLEX = Styled.div`
    display: flex;
`
const PARENT = Styled.div`
    padding: 0px 40px;
    p{
        text-align: justify;
    }
    .who{
        img{
            height: 100%;
            object-fit: cover;
        }
    }
    .center{
        text-align: center;
    }
`
export default () => (
    <PARENT>
        <div>
            <div className="center">
                <h1>Wawooh Event</h1>
            </div>
            <div >
                <p className="center">Got an owambe, a casual hang out, graduation or you are on a mission to slay to church, work or the red carpet?.....</p>
            </div>
            <br />
            <br />
            <div>
                <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349311/aboutUs/event1.jpg" alt="event1" style={{width: '100%'}}/>
            </div>
        </div>
        <br />
        <br />
        <FLEX style={{padding: '10px'}}>
            <div style={{width: '42%', padding: '10px'}}>
                <p><b>WAWOOH EVENT</b> is your one stop shop!</p>
                <p>See what fashion styles or designs are trending from top events, shows and celebrities on <b>Wawooh event</b> and get to shop directly for them on the designer’s storefront on <b>Wawooh shop</b>.</p>
                <p>Our fashion editorial which covers every A-list event in Lagos and beyond, provides you with choices and style inspiration to not look average while also giving you unlimited access to everything lifestyle, beauty and fashion till you are buzzing with the afropolitan vibes.</p>
            </div>
            <div  style={{width: '58%', padding: '10px', height: 700}}>
                <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349315/aboutUs/event2.jpg" alt="event2" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
        </FLEX>
        <br />
        <br />
    </PARENT>
)