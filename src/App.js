import logo from './images/logo2.png';
import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
      <div className="navigation">
      <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <img src={logo} className="logo" alt="Logo" />
          <div className="navigationSub">
            <a href="#about" className="tab">About</a>
            <a href="#projects" className="tab">Projects</a>

      <div className="App">
        </div>
        <div className="landing">
          <p>Mabuhay! My name is</p>
          <h1>Ellaine Tolentino!</h1>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id= "projects">
          <Projects/>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
