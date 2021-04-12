import React from 'react';
import './styles/Projects.css';

function Thumbnail(props) {
  return (
    <div className="project">
      <div className="projectImage">

        <a href={props.link} target= "_blank" alt="website for app" rel="noreferrer">
          <img id="pic" src={props.image} alt="Project preview"/>
        </a>

        <span className="projectTitle">
            <h4>
              <a className="projectInfo" href={props.link} target= "_blank" alt="website for app" rel="noreferrer"> {props.title}</a> | 
              <a className="projectInfo" href={props.githubRepo} target= "_blank" alt="website for repo" rel="noreferrer"> Github</a>
            </h4>
        </span>

      </div>
    </div>
  );
}

export default Thumbnail;