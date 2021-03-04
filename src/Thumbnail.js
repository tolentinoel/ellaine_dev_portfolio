import React from 'react';
import './styles/App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link} target= "_blank" alt="website for app" rel="noreferrer">
        <div className="project-image">
          <img src={props.image} alt="Project preview"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </a>
    </div>
  );
}
 
export default Thumbnail;