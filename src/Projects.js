import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './styles/App.css';
import flip from './images/flip_thumb.png';
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
        category="Game"
      />

        <Thumbnail
        link="https://makegotchi.herokuapp.com/"
        image={makegotchi}
        title="Makegotchi"
        category="Game"
      />

        <Thumbnail
        link="https://splashglam.herokuapp.com/"
        image={splash}
        title="SplashGlam"
        category="Skincare"
      />
    </div>
  )
}
 
export default Projects;