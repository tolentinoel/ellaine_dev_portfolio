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
            <img src={solo} className="soloPhoto" alt="solo pic" width="250" height="250"/>

          </div>
          <h3 className="aboutText">
            I am Ellaine Tolentino. My pronouns are She/They. I am a member of the LGBTQIA+ community, a first generation Filipino and I love the Arts and Music. My discovery of Software Development began back in 2009 in a computer class fiddling with the theme of my Friendster & MySpace accounts. I didn't knew I was in the realm of HTML and CSS then but I enjoyed it to the point I even ventured on embedding music & videos on my page!
            <br/>
            Fast-forward to today, and now I am a coding bootcamp graduate with a degree in Interior Design. I consider myself as a full-stack dev but Front-end Development is my favorite! I am looking forward in producing creative and interesting products/projects that will serve as a great contribution to the community. I am also trying to learn more of data structures and practice alot more algorithms!
            <br/>
            <br/>
            Here is my tech stack as of the moment:
            <br/>
            <br/>
            <div id ="techBadges">

              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" width="100" height="28" alt="html"/>
              <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" width="80" height="28" alt="css"/>
              <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" width="140" height="28" alt="ruby"/>
              <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" width="130" height="28" alt="postgresql"/>
              <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" width="100" height="28" alt="sqlite"/>
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="130" height="28" alt="javascript"/>
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="100" height="28" alt="React"/>
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