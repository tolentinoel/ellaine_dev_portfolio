import React from 'react';
import './styles/Projects.css';


class Thumbnail extends React.Component {

  stacks = (tech) => {
    // let react = "https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat"
    return tech.map(lang => {
      switch (lang){
        case 'react':
          return (
            <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat" alt={lang}/>
            )
        case 'ruby' :
          return (
            <img src="https://img.shields.io/badge/-Ruby%20on%20Rails-CC0000?logo=ruby%20on%20rails&logoColor=white&style=flat" alt={lang}/>
            )
        case 'html' :
          return (
            <img src="https://img.shields.io/badge/-Html5-E34F26?logo=html5&logoColor=white&style=flat" alt={lang}/>
            )
        case 'css' :
          return (
            <img src="https://img.shields.io/badge/-Css3-1572B6?logo=css3&logoColor=white&style=flat" alt={lang}/>
            )
        case 'javaScript':
          return (
            <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat" alt={lang}/>
            )
        case 'bootstrap':
          return (
            <img src="https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat" alt={lang}/>
            )
        case 'heroku':
          return (
            <img src="https://img.shields.io/badge/-Heroku-430098?logo=heroku&logoColor=white&style=flat" alt={lang}/>
            )
        case 'netlify':
          return (
            <img src="https://img.shields.io/badge/-Netlify-00C7B7?logo=netlify&logoColor=white&style=flat" alt={lang}/>
            )
        case 'postgresql':
          return (
            <img src="https://img.shields.io/badge/-PostgSql-336791?logo=postgresql&logoColor=white&style=flat" alt={lang}/>
            )
        case 'sqlite':
          return (
            <img src="https://img.shields.io/badge/-sqlite-003B57?logo=sqlite&logoColor=white&style=flat" alt={lang}/>
            )
        case 'github':
          return (
            <img src="https://img.shields.io/badge/-github-181717?logo=github&logoColor=white&style=flat" alt={lang}/>
            )
        case 'cli':
          return (
            <img src="https://img.shields.io/badge/-CLI-4D4D4D?logo=windows%20terminal&logoColor=white&style=flat" alt={lang}/>
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
                <a className="projectInfo" href={this.props.link} target= "_blank" alt="website for app" rel="noreferrer"> {this.props.title}</a> |
                <a className="projectInfo" href={this.props.githubRepo} target= "_blank" alt="website for repo" rel="noreferrer"> Github</a>
              </h4>
              <span>
                {this.stacks(this.props.techStacks)}
                {/* {this.props.techStacks} */}
              </span>
          </span>

        </div>
      </div>
    );
  }
}


export default Thumbnail;