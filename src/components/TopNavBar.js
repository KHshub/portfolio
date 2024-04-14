import React from 'react';
import './TopNavBar.css';
import Nav from 'react-bootstrap/Nav';

const TopNavBar = () => {
    return <div className='pt-4 TopNavBar'>
        <Nav className='justify-content-center'>
            <Nav.Item>
                <Nav.Link href="#about">about</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#skills">skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#projects">projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#contact">contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
}

export default TopNavBar;