import React from 'react';
import './styles/Projects.css';


class Thumbnail extends React.Component {

  stacks = (tech) => {
    // let react = "https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat"
    return tech.map(lang => {
      switch (lang){
        case 'react':
          return (
            <img src="https://img.shields.io/badge/-ReactJs-4298B8?logo=react&logoColor=white&style=flat" alt={lang}/>
            )
        case 'ruby' :
          return (
            <img src="https://img.shields.io/badge/-Ruby%20on%20Rails-A42E2B?logo=ruby%20on%20rails&logoColor=white&style=flat" alt={lang}/>
            )
        case 'html' :
          return (
            <img src="https://img.shields.io/badge/-Html5-A86454?logo=html5&logoColor=white&style=flat" alt={lang}/>
            )
        case 'css' :
          return (
            <img src="https://img.shields.io/badge/-CSS3-2E3084?logo=css3&logoColor=white&style=flat" alt={lang}/>
            )
        case 'javaScript':
          return (
            <img src="https://img.shields.io/badge/-JavaScript-D4AA00?logo=javascript&logoColor=white&style=flat" alt={lang}/>
            )
        case 'bootstrap':
          return (
            <img src="https://img.shields.io/badge/-Bootstrap-005571?logo=bootstrap&logoColor=white&style=flat" alt={lang}/>
            )
        case 'heroku':
          return (
            <img src ="https://img.shields.io/static/v1?label=Hosted&message=Heroku&color=005571" alt={lang}/>
            )
        case 'netlify':
          return (
            <img src ="https://img.shields.io/static/v1?label=Hosted&message=Netlify&color=005571" alt={lang}/>
            )
        case 'postgresql':
          return (
            <img src="https://img.shields.io/badge/-PostgSql-005571?logo=postgresql&logoColor=white&style=flat" alt={lang}/>
            )
        case 'sqlite':
          return (
            <img src="https://img.shields.io/badge/-sqlite-005571?logo=sqlite&logoColor=white&style=flat" alt={lang}/>
            )
        case 'github':
          return (
            <img src ="https://img.shields.io/static/v1?label=Hosted&message=Github.io&color=005571" alt={lang}/>
            )
        case 'cli':
          return (
            <img src="https://img.shields.io/badge/-CLI-005571?logo=windows%20terminal&logoColor=white&style=flat" alt={lang}/>
            )
        case 'ticketMaster':
          return (
            <img src="https://img.shields.io/badge/-TicketMaster%20API-005571?logo=ticketmaster&logoColor=white&style=flat" alt={lang}/>
            )
        case 'reactRouter':
          return (
            <img src="https://img.shields.io/badge/-React%20Router-005571?logo=react%20router&logoColor=white&style=flat" alt={lang}/>
        )
        case 'fontawesome':
          return (
            <img src="https://img.shields.io/badge/-Font%20Awesome-005571?logo=font%20awesome&logoColor=white&style=flat" alt={lang}/>
        )
        case 'hostgator':
          return(
            <img src ="https://img.shields.io/static/v1?label=Hosted&message=HostGator&color=005571" alt={lang}/>
          )
        default:
          return (
            
            <p>{lang}</p>
            )
      }

    });

  }

  render(){

    return (
      <div className="project">
        <div className="projectImage">

          <a href={this.props.link} target= "_blank" alt="website for app" rel="noreferrer">
            <img id="pic" src={this.props.image} alt="Project preview"/>
          </a>

          <span className="projectTitle">
              <h4 id="info">
                <a className="projectInfo" href={this.props.link} target= "_blank" alt="website for app" rel="noreferrer"><strong>{this.props.title}</strong> </a> |
                {this.props.githubRepo === "" ? 
                <a className="projectInfo" href={this.props.social} target= "_blank" alt="link for social" rel="noreferrer"><strong> Instagram</strong></a>
                :
                <a className="projectInfo" href={this.props.githubRepo} target= "_blank" alt="website for repo" rel="noreferrer"><strong> Github</strong></a>
                }
              </h4>
                <p>{this.props.info}</p>
              <span>
                {this.stacks(this.props.techStacks)}

              </span>
          </span>

        </div>
      </div>
    );
  }
}


export default Thumbnail;