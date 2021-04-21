import logo from './images/Logo3.png';
import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Experience from './Experience.js';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <BrowserRouter>
      <div className="navigation">
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
          <div className="navigationSub">
            <a href="#about" className="tab">About</a>
            <a href="#experience" className="tab">Experience</a>
            <a href="#projects" className="tab">Projects</a>
            <a href="#contact" className="tab">Contact</a>
          </div>

      </div>
      
      <img src={logo} className="logo" alt="Logo" />
      
      <div className="App">
        <div className="headerDiv">
          <h1 className="lHeader" id="mabuhay">Mabuhay! My name is </h1>
          <h1 className="lHeader" id="name2"> Ellaine.</h1>
        </div>

        <div className="landing">
          <h2 className="summary">I am a builder, a designer, & a developer with a keen eye for design in all forms. </h2>
          <h3 className="summary">I am a Silicon Valley-based Software Engineer, with a demonstrated history of working in a customer-facing role in the hospitality industry, construction and a background in Interior Design.</h3>
          <a href="mailto:tolentino.el@gmail.com">
            <Button variant="outline-light">
              Keep in touch!
            </Button>
          </a>
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
          <h2>LET'S TALK?</h2>

        </div>

        <div id="footer">

            <p id="footText">Built & Designed by Ellaine Tolentino</p>
           
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
