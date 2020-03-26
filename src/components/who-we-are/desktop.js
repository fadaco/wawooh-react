import React from 'react';
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
            <FLEX style={{padding: '10px'}}>
                <div style={{width: '42%', padding: '10px'}}>
                    <div>
                        <h1 className="center">WHO WE ARE</h1>
                    </div>
                    <div>
                        <p>For a very long time, expression of one’s self has been through fashion. This expression however isn’t limited to clothing alone, it embodies the hair, accessories used to enhance beauty, the creativity of apparels and let’s not forget the shoes and the bag. But in all of this, there is a constant, one that must always be present and it is tagged the most important- clothes.</p>
                        <p>The beauty of fabrics and the skilled hands of so many fashion designers have collaborated in creating some amazing fashion pieces that have left fashion consumers and the indifferent few in awe. It is however sad that many try so hard at imitating these wonderfully crafted wears but fail at it. Indeed, many are called but few are chosen.</p>
                        <p>At <b>WAWOOH</b>, we have the chosen ones and our assurance to you is, “what you see is what you get”. We take away the burden of overthinking what to wear for any event or casual turn up. With our collection from renowned and the best emerging fashion brands in Africa, you can rest assured that you get the value of your money worth.</p>
                        <p>We pride ourselves in rewriting the new emerging story of “AMAKA TAILORS” who disappoint you when they give you something entirely different from what you asked for, by curating a variety of attires, creating specially for you on request and providing accessories to match on our platform, just the way you want it and in the space of time you need it.</p>
                        <p>Most importantly, together our brands offer customers a wealth of styles and trends within fashion, beauty and accessories.</p>
                        <p><b>WAWOOH</b> yeah?</p>
                    </div>            
                </div>
                <div style={{width: '58%', padding: '10px', height: 700}} className="who">
                    <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349327/aboutUs/who1.jpg" alt="who1" style={{width: '100%'}}/>
                </div>
            </FLEX>
        </div>

        <br />
        <br />
        <div>
            
            <FLEX style={{padding: '10px'}}>
                <div style={{width: '50%', padding: 10}} className="who">
                    <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349325/aboutUs/who2.jpg" alt="who2" style={{width: '100%'}}/>
                </div>
                <div style={{width: '50%', padding: '10px'}}>
                    <div>
                        <h1 className="center">WHAT YOU NEVER KNEW ABOUT YOUR PERSON & CHOICES</h1>
                    </div>
                    <p>Did you know that there is an inner you waiting to be set free? The classy and sophisticated you, the wild feline waiting to be let out to scratch and show who the queen is and the style slayer in you who can’t wait to be on the cover of every style magazine but you are holding back because you haven’t discovered yourself yet?</p>
                    <p>Lucky you, we are here just in time to give you an array of choice attires and affordable ones too to select from. You definitely have no excuse to not be expressive now.</p>
                    <p>From helping you find your perfect fit in different sizes from our readymade collection to creating the perfect bespoke wears for your various occasions, you can be confident that once you step out of your homes, you will be the cynosure of all eyes and you will leave many screaming, <b>WAWOOH!</b></p>
                </div>
            </FLEX>
        </div>
        <br />
        <br />
        <div>
            <div>
                <h1 className="center">EVEN BETTER THAN YOU WANT IT</h1>
            </div>
            <div style={{padding: '0px 150px'}}>
                <p>Ever stared longingly at your favorite style crush in a gown or suit? Owambe styles and shoes? and wished to yourself to have something similar, perfectly sewn and delivered to your door step in time for your next outing? Exactly our offering to you. Better than you want it! Get hooked up with your celebrity designers and favorite African brands on Wawooh at affordable costs. From paying close attention to trend in keeping you ageless in timeless designs to creating and recreating beautiful designs that make you come alive, we have everything you ever wanted and more. Before you say it, we think it and create just for you!</p>
            </div>
            <br/>
            <div>
                <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349328/aboutUs/who3.jpg" alt="who3" style={{width: '100%'}}/>
            </div>
        </div>
        <br />
        <br />
        <div>
            <FLEX>
                <div style={{width: '50%', padding: '10px'}}>
                    <div>
                        <h1 className="center">THE WAWOOH EFFECT</h1>
                    </div>
                    <div>
                        <p>Whether in an apparel made of leaves, fur or chicken feathers, we never get it wrong in the process of creating art and a wow effect.</p>
                        <p>With the right measurement for your bespoke outfit and your trust in our creativity and innovation, you can attend a MET Ball every weekend the rest of the year and arrest attendees’ attention.</p>
                        <p>We exist to give you the confidence to be whoever you want to be.</p>
                    </div>
                </div>
                <div style={{width: '50%', padding: 10}} className="who">
                    <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349317/aboutUs/who4.jpg" alt="who4" style={{width: '100%'}}/>
                </div> 
            </FLEX>
        </div>
        <div>
            <FLEX>
                <div style={{width: '58%', padding: '10px', height: 700}} className="who">
                    <img src="https://res.cloudinary.com/har9qnw3d/image/upload/v1555349328/aboutUs/who5.jpg" alt="who5" style={{width: '100%'}} />
                </div>
                <div style={{width: '42%', padding: '10px'}}>
                    <div>
                        <h1 className="center">ACCEPTANCE</h1>
                    </div>
                    <div>
                        <p>At <b>WAWOOH</b>, we do not conform to any stereotype and so the People of Wawooh, male and female, of any religion, ethnicity, beliefs, slim or plus size, tall or short, slay their dresses in the most beautiful way without no altercations, prompting you to shop directly off their pictures.</p>
                        <p>We told you, we have just what you need.</p>
                    </div>
                </div>
            </FLEX>
        </div>
        <div>
            <FLEX>
                <div style={{width: '58%', padding: '10px'}}>
                    <p><b>WAWOOH</b> is your number one fashion dedicated marketplace for shopping quality African designers. Be it bespoke or ready to wear African fashion wears & accessories, Wawooh has got you covered.</p>
                    <p>We provide our customers with access to thousands of top fashion industry creative designers.</p>
                    <p>We are a subsidiary company of Longbridge technologies, Nigeria’s leading software and financial tech service provider.</p>
                </div>
                <div style={{width: '42%', padding: '10px'}}>

                </div>
            </FLEX>
        </div>
    </PARENT>
);
