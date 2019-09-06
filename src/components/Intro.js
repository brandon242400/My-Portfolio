import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className='intro-container' id='intro-section'>
        <h1 className='intro-name'>
          Welcome
			  </h1>
        <p className='intro-introduction'>
          My name is Brandon Carmona
        <br /><br />
          I'm a passionate developer looking for a position that can utilize my skills. Have a look through my portfolio and feel free to get in touch with me if you like what you see.
			  </p>
      </div>
    )
  }
}
