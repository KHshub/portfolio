import React from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerGit from '../assets/footer-git.png';
import footerItch from '../assets/footer-itch.png';
import footerLinkedin from '../assets/footer-linkedin.png';

const Contact = () => {
    return (
        <div className='text-center'>
            <Container>
                <h6>Email me at khadeejahalhomoud@gmail.com, <br/>or reach out to me on the socials below.</h6>
                <div className='contact-icons mt-4'>
                        <a href='https://sa.linkedin.com/in/khadeejah-al-homoud'><img src={footerLinkedin} alt='social media icon'/></a>
                        <a href='https://khadeejah.itch.io'><img src={footerItch} alt='social media icon'/></a>
                        <a href='https://github.com/KHshub'><img className='contact-icon-git' src={footerGit} alt='social media icon'/></a>
                </div>
            </Container>
            <div className='low-blur1'></div>
            <div className='low-blur2'></div>
        </div>
    );
}

export default Contact;