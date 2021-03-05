import logo from './images/logo2.png';
import './styles/App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js'; 
import About from './About.js'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <img src={logo} className="logo" alt="Logo" />
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
