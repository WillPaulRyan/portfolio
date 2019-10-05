import React from 'react';
import './Profile.css';


class Profile extends React.Component {
  render () {
    return (
      <div id="profile">
        <img id="profile-header" src='https://cdn.pixabay.com/photo/2016/03/06/06/42/low-poly-1239778_1280.jpg' alt=''/>
        <h1>Will Ryan III</h1>
        <h3>Web Developer</h3>
        <div id="social">
          <a href="https://www.linkedin.com/in/willpaulryan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/WillPaulRyan" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://codepen.io/willpaulryan" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
        </div>
        <a id="cv" href="./cv.pdf" target="_blank" download><h4>Download CV</h4></a>
      </div>
    )
  }
}

export default Profile;