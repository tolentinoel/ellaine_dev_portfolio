import React from "react";
import './styles/About.css';

function About(props) {

  return (
    <div className="about_div">
      <h1>About Me:</h1>
      <div  className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="ellainet">
        <a className="LI-simple-link"  target="blank_" href='https://www.linkedin.com/in/ellainet?trk=profile-badge'>Ellaine Tolentino (She/They) 🏳️‍🌈</a>
        <h3 className="aboutMeContent">I am a Silicon Valley-based online Software Engineering graduate, with a demonstrated history of working in a customer-facing role in the hospitality industry and a background in Interior Design. I also do like making friends! Don't hesitate to stay in touch! Let's connect!</h3>
      </div>
    </div>
  )
}

export default About;