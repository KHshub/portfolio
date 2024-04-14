import React, {Component} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


class App extends Component {  
  render() {
    return <div className='App'>
      <Container>
        <TopNavBar />
        <div className='section-spacer'></div>
        <div className='section-spacer'></div>
        
        <div className='gradient-container'>
          <div className='g1'></div>
        </div>

        {/* Hero Section */}
        <div className='section-spacer'></div>
          <Hero />
          <div className='section-spacer'></div>
        <div className='section-spacer'></div>
        <div className='section-spacer'></div>

        {/* About Section */}
        <h2 className='text-center section-title' id='about' >ABOUT</h2>
        <About/>
        <div className='section-spacer'></div>
        <div className='section-spacer'></div>

        {/* Skills */}
        <h2 className='text-center section-title' id='skills'>SKILLS</h2>
        <Skills />
        <div className='section-spacer'></div>
        <div className='section-spacer'></div>

        {/* Projects */}
        <h2 className='text-center section-title' id='projects'>PROJECTS</h2>
        <Projects />
        <div className='section-spacer'></div>
        <div className='section-spacer'></div>

        {/* Contact */}
        <h2 className='text-center section-title' id='contact'>GET IN TOUCH</h2>
        <Contact />
        <div className='section-spacer'></div>
        <div className='section-spacer'></div>

        <div className='text-center footer'>
          <p>Copyright &copy; All Rights Reserved</p>
        </div>
      
      </Container>
    </div>
  }
}

export default App;
