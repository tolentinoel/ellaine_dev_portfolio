import React from "react";
import './styles/About.css';
import solo from './images/solo2.png';

function About(props) {

  return (
    <section className="aboutDiv">
      <h1 className="aboutLabel">About Me:</h1>
        <div className="aboutTextDiv">
          <div className="soloPhotDiv">
            <img src={solo} className="soloPhoto" alt="solo pic" />

          </div>
          <h5 className="aboutText">
            I am Ellaine Tolentino. My pronouns are She/They. I am a member of the LGBTQIA+ community, a first generation Filipino and I love the Arts and Music. My discovery of Software Development began back in 2009 in a computer class fiddling with the theme of my Friendster & MySpace accounts. I didn't knew I was in the realm of HTML and CSS then but I enjoyed it to the point I even ventured on embedding music & videos on my page!
            <br/>
            Fast-forward to today, and now I am a coding bootcamp graduate with a degree in Interior Design. I consider myself as a full-stack dev but Front-end Development is my favorite! I am looking forward in producing creative and interesting products/projects that will serve as a great contribution to the community. I am also trying to learn more of data structures and practice alot more algorithms!
            <br/>
            Here is my tech stack as of the moment:
            <br/>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="logo"/>
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="logo"/>
            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=white" alt="logo"/>
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="logo"/>
      

          </h5>
        </div>

    </section>
  )
}

export default About;