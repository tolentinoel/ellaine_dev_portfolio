import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './styles/App.css';
import flip from './images/flip_thumb.png';
import splash from './images/splashGlam_thumb.png';
import makegotchi from './images/makegotchi_thumb.png';
import football from './images/FF_thumb.png';
import dev from './images/devlogo2.png';
import sucia from './images/sucia_thumb.png';
import horoscope from './images/horoscopeGen_thumb.png';

function Projects(props) {

  return (

    <div className="projectDiv">
      <h1 className="projectHeader">Projects</h1>
      <div className="projectSubDiv">

        <Thumbnail
          key= "1"
          link="https://horoscope-gen.herokuapp.com/"
          image={horoscope}
          title="HoroscopeGen"
          githubRepo="https://github.com/tolentinoel/horoscopeGenerator"
          techStacks = {[ "react", "bootstrap", "fontawesome", "hostgator", "html", "css",]}
          info="Powered by React, provides the user their general horoscope advice for the week and their lucky color."
        />


        <Thumbnail
          key= "2"
          link="http://suciacharters.com/"
          image={sucia}
          title="Sucia Charters"
          githubRepo=""
          social = "https://www.instagram.com/sucia_charters/"
          techStacks = {["html", "css", "ruby", "react", "bootstrap", "fontawesome", "hostgator"]}
          info="Fully redesigned charter boat tour business website from an HTML, CSS, JS into a React App. Updated everything from photos displayed, verbiages and company logo. Company based from Seattle,WA."
        />

        <Thumbnail
          key="3"
          link="http://ellaine.dev/"
          image={dev}
          title="Portfolio"
          githubRepo=""
          social = "https://www.instagram.com/tolentinoel/"
          techStacks = {["html", "css", "ruby", "react", "bootstrap", "fontawesome", "netlify"]}
          info="My portfolio website hosted at 'ellaine.dev/'. It contains few recent articles, projects and links to my social media accounts."
        />

        <Thumbnail
          key="4"
          link="https://tolentinoel.github.io/flip"
          image={flip}
          title="Flip!"
          githubRepo="https://github.com/tolentinoel/flip"
          techStacks = {["html", "css", "ruby", "sqlite", "javaScript", "github", "bootstrap"]}
          info="A classic memory game application with a twist! Contains 3 difficulty levels and 3 themes to choose from. Deployed through Github pages."
        />
         </div>

        <div className="projectSubDiv">
        <Thumbnail
          key="5"
          link="https://makegotchi.herokuapp.com/"
          image={makegotchi}
          title="Makegotchi"
          githubRepo="https://github.com/nnhk23/makegotchi-frontend"
          techStacks = {["html", "css", "ruby", "postgresql", "javaScript", "react", "reactRouter", "bootstrap", "heroku" ]}
          info= "A React, one-player, virtual pet game that enables the user to adopt from a selection of Tamagotchis (virtual pet) and interact with them by feeding, cleaning, tucking them into bed. A collaboration project with 3 other software developers from Flatiron School."
        />

          <Thumbnail
            key="6"
            link="https://splashglam.herokuapp.com/"
            image={splash}
            title="SplashGlam"
            githubRepo="https://github.com/tolentinoel/splashglam_frontend"
            techStacks = {["html", "css", "ruby", "postgresql", "javaScript", "react", "bootstrap", "heroku" ]}
            info = "A React-powered, e-commerce skincare app using Soko Glam product data. The app also has a bookmarking & theme toggling feature for the users."
        />

          <Thumbnail
            key="7"
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