import React from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';
import footerGit from '../assets/footer-git.png';
import footerItch from '../assets/footer-itch.png';
import footerLinkedin from '../assets/footer-linkedin.png';

const Contact = () => {
    return (
        <div className='text-center'>
            <h6>Email me at <a className='email' href='mailto:khadeejahalhomoud@gmail.com'>khadeejahalhomoud@gmail.com</a>, <br/>or reach out on the platforms below.</h6>
            <Container>
                <div className='contact-container'>
                    <div className='mt-4'>
                        <div className='contact-row icon-style'>
                            <div className='icon-border'>
                                <a href='https://sa.linkedin.com/in/khadeejah-al-homoud'><img src={footerLinkedin} alt='social media icon'/></a>
                            </div>
                            <div className='icon-text'>
                                <h6>Linkedin</h6>
                                <small>Khadeejah Al Homoud</small>
                            </div>
                        </div>

                        <div className='contact-row icon-style'>
                            <div className='icon-border'>
                                <a href='https://khadeejah.itch.io'><img src={footerItch} alt='social media icon'/></a>
                            </div>
                            <div className='icon-text'>
                                <h6>Itch.io</h6>
                                <small>Khadeejah</small>
                            </div>
                        </div>

                        <div className='contact-row'>
                            <div className='icon-border contact-icon-git'>
                                <a href='https://github.com/KHshub'><img src={footerGit} alt='social media icon'/></a>
                            </div>
                            <div className='icon-text'>
                                <h6>Github</h6>
                                <small>KHshub</small>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;