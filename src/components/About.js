import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import icon1 from '../assets/about-icon1.png';
import icon2 from '../assets/about-icon2.png';
import icon3 from '../assets/about-icon3.png';

const About = () => {
    return(
        <div>
            <Container>
                <div className='about-container mt-4'>
                    <div className='about-items'>  
                        <div className='about-item'>
                            <img className='about-icon' src={icon1} alt='Cog wheel icon'/>
                            <div className='about-text'>
                                <p className='text-body-lg'>Strong Technical Skills</p>
                                <p>Experience on real-world projects in industrial control systems, cybersecurity, and system configuration.</p>
                            </div>
                        </div>

                        <div className='about-item'>
                            <img className='about-icon' src={icon2} alt='Web development icon'/>
                            <div className='about-text'>
                                <p className='text-body-lg'>Front-End & Development Skills</p>
                                <p>Web development background and experience with various frameworks, website hosting, UI/UX, and responsive design.</p>
                            </div>
                        </div>

                        <div className='about-item'>
                            <img className='about-icon' src={icon3} alt='Controller icon'/>
                            <div className='about-text'>
                                <p className='text-body-lg'>Highly Creative</p>
                                <p>Passionate about various creative fields, such as game development, 3D modeling, pixel art, and sound design.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-bottom-items'>
                    <p>Want to learn more?</p>
                    <Button className='about-button' variant="dark" href='#projects'>Go to Projects</Button> 
                </div>
            </Container>
            <div className='mid-topBlur'></div>
            <div className='mid-bottomBlur'></div>
        </div>
    );
}

export default About;