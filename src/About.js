import React from "react";
import './styles/About.css';
import solo from './images/solo2.png';


function About(props) {

  return (
    <section className="aboutDiv">
      <h1 className="aboutLabel">About Me:</h1>
        <div className="aboutTextDiv">

        <h5 className="aboutText">
          I am Ellaine Tolentino. My pronouns are She/They. I am a member of the LGBTQIA+ community, a first generation Filipino and I love the Arts and Music. My discovery of Software Development began back in 2009 in a computer class fiddling with the theme of my Friendster & MySpace accounts. I didn't knew I was in the realm of HTML and CSS then but I enjoyed it to the point I even ventured on embedding music & videos on my page!
          <br/>

          Fast-forward to today, and now I am a coding bootcamp graduate with a degree in Interior Design. I consider myself as a full-stack dev but Front-end Development is my favorite! I am looking forward in producing creative and interesting products/projects that will serve as a great contribution to the community. I am also trying to learn more of data structures and practice alot more algorithms!
          <br/>
          Here is my tech stack as of the moment:
        </h5>


        <div className="soloPhotDiv">
          <img src={solo} className="soloPhoto" alt="solo pic" />

        </div>

        </div>

    </section>
  )
}

export default About;