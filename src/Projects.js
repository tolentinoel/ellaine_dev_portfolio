import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './styles/App.css';
import flip from './images/flip_thumb.png';
import splash from './images/splashGlam_thumb.png';
import makegotchi from './images/makegotchi_thumb.png';
import football from './images/FF_thumb.png';
import dev from './images/devlogo2.png';

function Projects(props) {
  
  return (

    <div className="projectDiv">
      <h1 className="projectHeader">Projects</h1>
      <div className="projectSubDiv">
        <Thumbnail
          link="http://ellaine.dev/"
          image={dev}
          title="Portfolio"
          githubRepo="https://github.com/tolentinoel/ellaine_dev_portfolio"
          techStacks = {["html", "css", "ruby", "react", "bootstrap", "fontawesome"]}
          info="My portfolio website hosted at 'ellaine.dev/'. It contains few recent articles, projects and links to my social media accounts."
        />


        <Thumbnail
          link="https://tolentinoel.github.io/flip"
          image={flip}
          title="Flip!"
          githubRepo="https://github.com/tolentinoel/flip"
          techStacks = {["html", "css", "ruby", "sqlite", "javaScript", "github", "bootstrap"]}
          info="A classic memory game application with a twist! Contains 3 difficulty levels and 3 themes to choose from. Deployed through Github pages."
        />

          <Thumbnail
          link="https://makegotchi.herokuapp.com/"
          image={makegotchi}
          title="Makegotchi"
          githubRepo="https://github.com/nnhk23/makegotchi-frontend"
          techStacks = {["html", "css", "ruby", "postgresql", "javaScript", "heroku", "react", "reactRouter", "bootstrap" ]}
          info= "A React, one-player, virtual pet game that enables the user to adopt from a selection of Tamagotchis (virtual pet) and interact with them by feeding, cleaning, tucking them into bed. A collaboration project with 3 other software developers from Flatiron School."
        />

          <Thumbnail
          link="https://splashglam.herokuapp.com/"
          image={splash}
          title="SplashGlam"
          githubRepo="https://github.com/tolentinoel/splashglam_frontend"
          techStacks = {["html", "css", "ruby", "postgresql", "javaScript", "heroku", "react", "bootstrap" ]}
          info = "A React-powered, e-commerce skincare app using Soko Glam product data. The app also has a bookmarking & theme toggling feature for the users."
        />

          <Thumbnail
          link="https://www.youtube.com/watch?v=U66aECUWbTQ&t=1s"
          image={football}
          title="FootballFanatic"
          githubRepo="https://github.com/tolentinoel/footballFanatic"
          techStacks = {["html", "css", "ruby","sqlite", "javaScript", "cli", "ticketMaster" ]}
          info="A CLI app that displays events or football games that can be found through city name, date, team/performer
          name or stadium name using the TicketMaster API. "
        />
        </div>
      

    </div>
  )
}

export default Projects;