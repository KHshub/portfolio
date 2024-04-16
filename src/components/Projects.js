import React from 'react';
import './Projects.css';
import RoR from '../assets/project-RoR.png';
import csHub from '../assets/project-CSHub.png';
import portfolio from '../assets/portfolio.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const projects = [
    { title: 'Roots of Resillience', imgSrc: RoR, description: 'A 2D pixel art short game developed as a submission for Story of Palestine game jam. Can be played in-browser.', skills: ['Godot Engine', 'C#', 'GDScript', 'Aseprite'], demo: 'https://kateam.itch.io/roots-of-resilience'},
    { title: 'CS Hub',imgSrc: csHub, description: 'A website developed as a hub for anyone interested in Computer Science. Contains a variety of vital courses.', skills: ['Figma', 'JavaScript', 'Github','Bootstrap'], demo: 'https://khshub.github.io/CS-Hub'},
    { title: 'Portfolio', imgSrc: portfolio, description: 'A personal portfolio developed and hosted to showcase my current skills and various projects in one place.', skills: ['React', 'JavaScript', 'Github','Bootstrap'], demo: ''}
  
  ];

const Projects = () => {
    return(
        <Container>
            <div className='card-container'>
                <button disabled className='wrapper-btns left-btn' variant='info'>{'<'}</button>
                <div className='project-wrapper'>
                    {projects.map((project, index) => (
                        <div className='project-carousel'>
                            <div className='project-cards'>
                                <a href={project.demo}>
                                    <img className='img-card' variant="top" src={project.imgSrc} />
                                </a>
                                <div>
                                    <div className='card-title'><h5>{project.title}</h5></div>
                                    <div className='card-text'>
                                        {project.description}
                                        <ul className='pt-3 pb-4 skills'>
                                            {project.skills.map((skill, id) => (
                                                <li>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button className='card-link' variant='dark' href={project.demo}>Go to Demo</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button disabled className='wrapper-btns right-btn' variant='info'>{'>'}</button>
            </div>
        </Container>
    );
}

export default Projects;

