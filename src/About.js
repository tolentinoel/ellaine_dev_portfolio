import React from "react";
import './styles/About.css';

function About(props) {

  return (
    <div className="aboutDiv">
      <h1 className="aboutLabel">About Me:</h1>
      <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="ellainet">
        <a className="LI-simple-link"  target="blank_" href='https://www.linkedin.com/in/ellainet?trk=profile-badge'>Ellaine Tolentino (She/They) 🏳️‍🌈</a>
        <h4 className="aboutText"> I am a full stack Software Engineer. Coming from a design and hospitality background, I love building and seeing projects come to life that can impact someone's life anywhere in the world! I find Software Engineering as a very powerful tool because it aligns with user experience and creativity. Front-end Development is my fave! I am looking forward in producing creative and interesting products that will serve as a great contribution to the community.</h4>
      </div>
    </div>
  )
}

export default About;