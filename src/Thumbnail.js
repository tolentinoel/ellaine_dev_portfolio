import React from 'react';
import './styles/Projects.css';


class Thumbnail extends React.Component {

  stacks = (tech)=> {

    console.log(tech)

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
                {this.props.techStacks}
              </span>
          </span>

        </div>
      </div>
    );
  }
}


export default Thumbnail;