import React from "react";
import './styles/About.css';
import solo from './images/solo2.png';

export default class About extends React.Component{


render(){
  return (
    <section className="aboutDiv">
      <h1 className="aboutLabel">About Me:</h1>
        <div className="aboutTextDiv">
          <div className="soloPhotDiv">
            <img src={solo} className="soloPhoto" alt="solo pic" width="300" height="300"/>

          </div>
          <h3 className="aboutText">
          Hello, my name is Ellaine Tolentino. My pronouns are She/They. I am a first-generation Filipino and a member of the LGBTQIA+ community who enjoys the arts and music. In 2009, I began fiddling with the themes of my Friendster and MySpace profiles, which led to my first encounter to software development. I had no idea I was working with HTML and CSS at the time, but I had so much fun with it that I also experimented with putting music and movies on my page!
            <br/>
            I am now a coding bootcamp graduate with a degree in Interior Design and a hospitality background. I consider myself a full-stack developer, but front-end programming is my absolute fave! I'm looking forward to developing new and exciting products/projects that will benefit the community. In June of 2022, I completed a fully-remote apprenticeship program with Microsoft Leap, working with the amazing developers in the Redmond, WA office. Now, I am transitioning to be one of their full-time Software Engineer!            <br/>
            <br/>
            Here is my tech stack as of the moment:
            <br/>
            <br/>
            <div id ="techBadges">
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="130" height="28" alt="javascript"/>
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="100" height="28" alt="React"/>
              <img src="https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width="140" height="28" alt="typescript"/>
              <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" width="80" height="28" alt="typescript"/>
              <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" width="140" height="28" alt="ruby"/>
              <img src="https://img.shields.io/badge/c%23-A179DC?style=for-the-badge&logo=c-sharp&logoColor=white" width="60" height="28" alt="c-sharp"/>
              <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" width="130" height="28" alt="postgresql"/>
              <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" width="100" height="28" alt="sqlite"/>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" width="100" height="28" alt="html"/>
              <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" width="80" height="28" alt="css"/>
              <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" width="130" height="28" alt="bootstrap"/>
              <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" width="130" height="28" alt="heroku"/>
              <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=white" width="120" height="28" alt="firebase"/>
              <img src="	https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" width="120" height="28" alt="netlify" />
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" width="80" height="28" alt="git"/>
            </div>

          </h3>
        </div>

    </section>
  )


}
}