import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RoR from '../assets/project-RoR.png';
import csHub from '../assets/project-CSHub.png';
import portfolio from '../assets/portfolio.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const projects = [
    { title: 'Roots of Resillience', thumbnail: RoR, description: 'A 2D pixel art short game developed as a submission for Story of Palestine game jam. Can be played in-browser.', skills: ['Godot Engine', 'C#', 'GDScript', 'Aseprite'], demo: 'https://kateam.itch.io/roots-of-resilience'},
    { title: 'CS Hub', thumbnail: csHub, description: 'A website developed as a hub for anyone interested in Computer Science. Contains a variety of vital courses.', skills: ['Figma', 'JavaScript', 'Github','Bootstrap'], demo: 'https://khshub.github.io/CS-Hub'},
    { title: 'Portfolio', thumbnail: portfolio, description: 'A personal portfolio developed and hosted to showcase my current skills and various projects in one place.', skills: ['React', 'JavaScript', 'Github','Bootstrap'], demo: ''}
  
  ];

const Projects = () => {
    return(
        <Container>
            <Swiper
                modules={[Navigation, Pagination]}
                speed={1500}
                centeredSlides={true}
                autoplay={100}
                spaceBetween={0}
                centeredSlidesBounds={true}
                autoplayDisableOnInteraction={false}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    300: {
                        slidesPerView:1,
                    },
                    770: {
                      slidesPerView: 2,
                    },
                    990: {
                        // width: 768,
                        slidesPerView: 3,
                    }
                  }}
                  activeSlideKey='2'
            >
            <div className='card-container'>
                <div className='project-wrapper'>
                    {projects.map((project, key) => (
                        <SwiperSlide>
                            <div className='project-carousel'>
                                <div className='project-cards'>
                                    <a href={project.demo}>
                                        <img className='img-card' variant="top" src={project.thumbnail} alt='project thumbnail'/>
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
                        </SwiperSlide>
                    ))}
                </div>
            </div>
            </Swiper>
            <div className='low-blur1'></div>
            <div className='low-blur2'></div>
        </Container>
    );
}

export default Projects;

