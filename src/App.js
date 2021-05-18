import React from 'react';
import logo from './images/Logo3.png';
import './styles/App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Projects from './Projects.js';
import Blog from './Blog.js';
import About from './About.js';
import Experience from './Experience.js';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faDev, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

class App extends React.Component {


  popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Oh hey!</Popover.Title>
      <Popover.Content>
        Want to follow my journey? Follow my Instagram! <a href="https://www.instagram.com/tolentinoel/?hl=en" target="_blank" rel="noreferrer"><strong>@tolentinoel</strong></a>
      </Popover.Content>
    </Popover>
  );

 Badges = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={this.popover}>
      <Button variant="outline-dark" id="footText">Built & Designed by Ellaine Tolentino</Button>
    </OverlayTrigger>
  );
  
  render(){
  return (
    <div>
      <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

      <Navbar variant="dark" collapseOnSelect expand="lg" fixed="top" id="navigation">
        <Navbar.Brand href="#top">ellaine.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="navigationSub">
            <Nav.Link href="#about" id="tab1">About</Nav.Link>
            <Nav.Link href="#experience" id="tab2">Experience</Nav.Link>
            <Nav.Link href="#projects" id="tab3">Projects</Nav.Link>
            <Nav.Link href="#blog" id="tab4">Blogs</Nav.Link>
            <Nav.Link href="#contact" id="tab5">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className="App">

        <div className="headerDiv">
          <h1 className="lHeader" id="mabuhay">Mabuhay! My name is <p className="lHeader" id="name2"> Ellaine.</p></h1>
        </div>

        <div className="landing">
          <div id="summaryDiv">
            <h1 className="summary" id="h1Landing"><strong>I am a builder, a designer, & a developer with a keen eye for design in all forms.</strong> </h1>
            <h3 className="summary">I'm a Silicon Valley-based Software Engineer, with a demonstrated history of working in a customer-facing role in hospitality, background in construction and a Bachelor of Science degree in Interior Design. I am currently doing a freelance project to further practice my knowledge from my recent schooling.</h3>
            <a href="mailto:tolentino.el@gmail.com">
              <Button variant="outline-light" id="contactButton">Keep in touch!</Button>
            </a>
            <a href="#about">
              <Button variant="outline-light" id="contactButton2">More about me</Button>
            </a>
          </div>
        </div>

        <div id="about">
          <About/>
        </div>

        <div id= "experience">
          <Experience />
        </div>

        <div id= "projects">
          <Projects/>
        </div>

        <div id="blog">
          <Blog/>
        </div>

        <div id= "contact">
          <h1>Contact Me:</h1>
          <a href="mailto:tolentino.el@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faAt} size="2x" color="#caf000;" className="icon"/></a>
          <a href="https://twitter.com/tolentinoEL" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faTwitter} size="2x" color="#caf000;" className="icon"/></a>
          <a href="https://dev.to/tolentinoel" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faDev} size="2x" color="#caf000;" className="icon"/></a>
          <a href="https://www.linkedin.com/in/ellainet/" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faLinkedin} size="2x" color="#caf000;" className="icon"/></a>
          <a href="https://github.com/tolentinoel" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faGithub} size="2x" color="#caf000;" className="icon"/></a>
        </div>

        <span><a href="#top"><img src={logo} className="logo" alt="Logo" /></a></span>

        <div id="footer">
          {this.Badges()}
        </div>

        </div>
    </div>



  );

  }
  
}


export default App;


