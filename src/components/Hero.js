import React from 'react';
import './Hero.css';

const Hero = () => {
    return(
        <div className='text-center'>
            <h1 className='hero-title'>Hi, I'm Khadeejah</h1>
            <div className='wrapper'>
                <div className='static-text'>A</div>
                <ul className='dynamic-text'>
                    <li><span>Web Developer</span></li>
                    <li><span>UI/UX Designer</span></li>
                    <li><span>Game Developer</span></li>
                    <li><span>ICS CS Analyst</span></li>
                </ul>
            </div>

            <br/>

            <div className='topBlur'></div>
            <div className='bottomBlur'></div>
        </div>
    );
}

export default Hero;