import React from 'react';
import './styles/Projects.css';

function Thumbnail(props) {
  return (
    <div className="project">
      <div className="project-image">
        <a className="projectInfo" href={props.link} target= "_blank" alt="website for app" rel="noreferrer">
          <img id="pic" src={props.image} alt="Project preview"/>
          <div className="projectTitle">{props.title}</div>
        </a>
      </div>
      <div>
        <a className="projectInfo" href={props.githubRepo} target= "_blank" alt="website for repo" rel="noreferrer">Github</a>
      </div>

    </div>
  );
}

export default Thumbnail;