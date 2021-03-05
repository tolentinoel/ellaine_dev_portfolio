import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './styles/App.css';
import flip from './images/flip_thumb3.png';
import splash from './images/splashGlam_thumb.png';
import makegotchi from './images/makegotchi_thumb.png';

function Projects(props) {
  return (
    
    <div>
      <h1>Projects</h1>
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
    </div>
  )
}
 
export default Projects;