import React, { lazy, Suspense } from 'react';
import logo from './images/Logo3.png';
import './styles/App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
        Want to follow my journey outside of code? Follow my Instagram! <a href="https://www.instagram.com/tolentinoel/?hl=en" target="_blank" rel="noreferrer"><strong>@tolentinoel</strong></a>
      </Popover.Content>
    </Popover>
  );

 Badges = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={this.popover}>
      <Button variant="outline-dark" id="footText">Built & Designed by Ellaine Tolentino</Button>
    </OverlayTrigger>
  );

  render(){

    const AboutComponent = lazy(() => import('./About'));
    const ProjectsComponent = lazy(() => import('./Projects'));
    const BlogComponent = lazy(() => import('./Blog'));
    const ExperienceComponent = lazy(() => import('./Experience'));


    const renderLoader = () => <h2>Loading...</h2>


    const DetailsComponent = () => (
      <Suspense fallback= {renderLoader()}>
        <div id="about">
          <AboutComponent/>
        </div>

        <div id= "experience">
          <ExperienceComponent />
        </div>

        <div id= "projects">
          <ProjectsComponent/>
        </div>

        <div id="blog">
          <BlogComponent/>
        </div>
      </Suspense>
    )
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
          <h1 className="lHeader" id="mabuhay">Mabuhay! <p className="lHeader" id="name2"> I'm Ellaine.</p></h1>
        </div>

        <div className="landing">
          <div id="summaryDiv">
            <h1 className="summary" id="h1Landing"><strong>A former Interior Designer, hotelier, now turned programmer.</strong> </h1>
            <h3 className="summary"> 
            I'm a Silicon Valley-based web developer, with a history in hospitality, background in construction and a Bachelor of Science degree in Interior Design.
            I consider myself as a meticulous, passionate learner, and a persevering individual that always tries to do a good job in all roles I have in life.
            I am a bilingual(English & Tagalog) and skilled with Javascript, React, but recently learned C#, Typescript and Jest.</h3>
            <a href="mailto:tolentino.el@gmail.com">
              <Button variant="outline-light" id="contactButton">Keep in touch!</Button>
            </a>
            <a href="#about">
              <Button variant="outline-light" id="contactButton2">More about me</Button>
            </a>
          </div>
        </div>

        <DetailsComponent/>

        <div id= "contact">
          <div id= "contactBody">
            <h1>Contact Me:</h1>
            <a href="mailto:tolentino.el@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faAt} size="2x" color="#caf000;" className="icon"/></a>
            <a href="https://twitter.com/tolentinoEL" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faTwitter} size="2x" color="#caf000;" className="icon"/></a>
            <a href="https://dev.to/tolentinoel" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faDev} size="2x" color="#caf000;" className="icon"/></a>
            <a href="https://www.linkedin.com/in/ellainet/" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faLinkedin} size="2x" color="#caf000;" className="icon"/></a>
            <a href="https://github.com/tolentinoel" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faGithub} size="2x" color="#caf000;" className="icon"/></a>
          </div>

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


