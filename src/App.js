import logo from './images/Logo3.png';

import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Projects from './Projects.js';
import About from './About.js';
import Experience from './Experience.js';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faDev, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function App() {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click Me!</Button>
    </OverlayTrigger>
  );


  return (
    <BrowserRouter>
      <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

      <Navbar variant="dark" collapseOnSelect expand="lg" fixed="top" id="navigation">
        <Navbar.Brand href="#top">ellaine.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="navigationSub">
            <Nav.Link href="#about" id="tab1">About</Nav.Link>
            <Nav.Link href="#experience" id="tab2">Experience</Nav.Link>
            <Nav.Link href="#projects" id="tab3">Projects</Nav.Link>
            <Nav.Link href="#contact" id="tab4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className="App">

        <div className="headerDiv">
          <h1 className="lHeader" id="mabuhay">Mabuhay! My name is <h1 className="lHeader" id="name2"> Ellaine.</h1></h1>

        </div>

        <div className="landing">

          <div id="summaryDiv">

            <h1 className="summary"><strong>I am a builder, a designer, & a developer with a keen eye for design in all forms.</strong> </h1>
            <h3 className="summary">I'm a Silicon Valley-based Software Engineer, with a demonstrated history of working in a customer-facing role in hospitality, background in construction and a Bachelor of Science degree in Interior Design. I am currently doing a freelance project to further practice my knowledge from my recent schooling.</h3>

            <a href="mailto:tolentino.el@gmail.com">
              <Button variant="outline-light" id="contactButton">
                Keep in touch!
              </Button>
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
        <div id= "contact">
        <Example/>
          <h1>Contact Me:</h1>
    
          <a href="mailto:tolentino.el@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faAt} size="2x" color="darkturquoise" className="icon"/></a>
          <a href="https://twitter.com/tolentinoEL" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faTwitter} size="2x" color="darkturquoise" className="icon"/></a>
          <a href="https://dev.to/tolentinoel" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faDev} size="2x" color="darkturquoise" className="icon"/></a>
          <a href="https://www.linkedin.com/in/ellainet/" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faLinkedin} size="2x" color="darkturquoise" className="icon"/></a>
          <a href="https://github.com/tolentinoel" rel="noreferrer" target="_blank"><FontAwesomeIcon focusable="true" icon={faGithub} size="2x" color="darkturquoise" className="icon"/></a>
        </div>

        <a href="#top"><img src={logo} className="logo" alt="Logo" /></a>

        <div id="footer">
          <p id="footText" >Built & Designed by Ellaine Tolentino</p>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;


