import logo from './images/Logo3.png';
import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <BrowserRouter>
      <div className="navigation">
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <img src={logo} className="logo" alt="Logo" />
          <div className="navigationSub">
            <a href="#about" className="tab">About</a>
            <a href="#projects" className="tab">Projects</a>
          </div>
        
      </div>

      <div className="App">

        <div className="landing">
          <h1 className="lHeader" id="mabuhay">Mabuhay! </h1>
          {/* <h1 className="lHeader" id="name1">My name is </h1> */}
          <h1 className="lHeader" id="name2"> My name is Ellaine.</h1>
          <h2 className="summary">I am a Silicon Valley-based Software Engineer, with a demonstrated history of working in a customer-facing role in the hospitality industry and a background in Interior Design. I also do like making friends! Don't hesitate to stay in touch! Let's connect!</h2>
          <a href="mailto:tolentino.el@gmail.com">
            <Button variant="outline-light">
              Keep in touch!
            </Button>
          </a>
        </div>
       

        <div id="about">
          <About/>
        </div>

        <div id= "projects">
          <Projects/>
        </div>
        <div id="footer">
          FOOTER is here
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
