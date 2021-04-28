import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './styles/App.css';
import flip from './images/flip_thumb.png';
import splash from './images/splashGlam_thumb.png';
import makegotchi from './images/makegotchi_thumb.png';
import football from './images/FF_thumb.png';

function Projects(props) {
  return (

    <div className="projectDiv">
      <h1 className="projectHeader">Projects</h1>
      <div className="projectSubDiv">
        <Thumbnail
          link="https://tolentinoel.github.io/flip"
          image={flip}
          title="Flip!"
          githubRepo="https://github.com/tolentinoel/flip"
        />

          <Thumbnail
          link="https://makegotchi.herokuapp.com/"
          image={makegotchi}
          title="Makegotchi"
          githubRepo="https://github.com/nnhk23/makegotchi-frontend"
        />

          <Thumbnail
          link="https://splashglam.herokuapp.com/"
          image={splash}
          title="SplashGlam"
          githubRepo="https://github.com/tolentinoel/splashglam_frontend"
        />

          <Thumbnail
          link="https://www.youtube.com/watch?v=U66aECUWbTQ&t=1s"
          image={football}
          title="FootballFanatic"
          githubRepo="https://github.com/tolentinoel/footballFanatic"
        />

      </div>

    </div>
  )
}

export default Projects;