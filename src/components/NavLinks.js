import React, { Component } from 'react';
import styled from 'styled-components';


export default class NavLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gitShow: false,
      linkedinShow: false,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // Initializing github/linkedin text images with these IDs to prevent animation on site loading in.
    this.iconStyle = { zIndex: 3, height: 60 };
    Wrapper = getWrapper();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // Dynamically updating width & height to window dimensions
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width <= 1000 && this.state.width > 600) {
      this.iconStyle = { zIndex: 3, height: 40 };
      Wrapper = getWrapperMedium();
    } else if (this.state.width <= 600) {
      this.iconStyle = { zIndex: 3, height: 40 };
      Wrapper = getWrapperSmall();
    } else {
      this.iconStyle = { zIndex: 3, height: 60 };
      Wrapper = getWrapper();
    }
    this.setState({
      gitShow: false,
      linkedinShow: false
    });
    this.gitID = 'no-display-1';
    this.linkedinID = 'no-display-2';
  }

  // Handles image ID changes to correctly animate the github and linkedin text
  handleMouseOver(e) {
    if (e.target.alt === 'GitHub Logo') {
      this.gitID = this.state.gitShow ? 'github-noshow' : 'github-show';
      this.setState((prevState) => ({ gitShow: !prevState.gitShow }));
    } else {
      this.linkedinID = this.state.linkedinShow ? 'linkedin-noshow' : 'linkedin-show';
      this.setState((prevState) => ({ linkedinShow: !prevState.linkedinShow }));
    }
  }

  render() {
    return (
      <Wrapper>
        <img src={require('../images/github-text-logo.png')} alt='GitHub text'
          id={this.gitID} />
        <a href='https://github.com/brandon242400' target='_blank' className='navlinks-github' rel="noopener noreferrer">
          <img src={require('../images/github-logo.svg')} alt='GitHub Logo' onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseOver} style={this.iconStyle} />
        </a>

        <img src={require('../images/linkedin-text.png')} alt='Linkedin text'
          id={this.linkedinID} />
        <a href='https://www.linkedin.com/in/brandon-carmona/' target='_blank' className='navlinks-linkedin' rel="noopener noreferrer">
          <img src={require('../images/linkedin-logo.png')} alt='Linkedin Logo' onMouseEnter={this.handleMouseOver}
            onMouseLeave={this.handleMouseOver} style={this.iconStyle} />
        </a>
      </Wrapper>
    );
  }
}


var Wrapper;

function getWrapper() {
  return (
    styled.div`
      position: fixed;
      right: 0;
      top: 70px;
      display: grid;
      grid-template-rows: 60px 60px;
      grid-template-columns: auto auto;
      grid-row-gap: 20px;

      padding: 10px;
      // border: 1px solid black;

      .navlinks-github {
        margin-right: 10px;
      }

      #github-show {
        // display: none;
        height: 60px;
        position: relative;
        margin-left: auto;
        right: -300px;
        animation: github-slide-in .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes github-slide-in {
        from { right: -300px; }
        to { right: 0px; }
      }

      #github-noshow {
        position: relative;
        height: 60px;
        right: -300px;
        margin-left: auto;
        animation: github-slide-out .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes github-slide-out {
        from { right: 0px; }
        to { right: -300px; }
      }

      #linkedin-show {
        // display: none;
        position: relative;
        right: -200px;
        height: 60px;
        animation: linkedin-slide-in .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes linkedin-slide-in {
        from { right: -400px; }
        to { right: 0px; }
      }

      #linkedin-noshow {
        position: relative;
        right: -400px;
        height: 60px;
        animation: linkedin-slide-out .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes linkedin-slide-out {
        from { right: 0px; }
        to { right: -400px; }
      }

      #no-display-1 {
        height: 60px;
        opacity: 0;
      }

      #no-display-2 {
        height: 60px;
        opacity: 0;
      }
    `
  );
}

// Wrapper for screen widths of less than 1000px
function getWrapperMedium() {
  return (
    styled.div`
      position: fixed;
      right: 0;
      top: 100px;
      display: grid;
      grid-template-rows: 40px 40px;
      grid-template-columns: auto auto;
      grid-row-gap: 20px;

      padding: 10px;
      // border: 1px solid black;

      .navlinks-github {
        margin-right: 5px;
      }

      #github-show {
        // display: none;
        height: 40px;
        position: relative;
        margin-left: auto;
        right: -300px;
        animation: github-slide-in .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes github-slide-in {
        from { right: -300px; }
        to { right: 0px; }
      }

      #github-noshow {
        position: relative;
        height: 40px;
        right: -300px;
        margin-left: auto;
        animation: github-slide-out .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes github-slide-out {
        from { right: 0px; }
        to { right: -300px; }
      }

      #linkedin-show {
        // display: none;
        position: relative;
        right: -200px;
        height: 40px;
        animation: linkedin-slide-in .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes linkedin-slide-in {
        from { right: -400px; }
        to { right: 0px; }
      }

      #linkedin-noshow {
        position: relative;
        right: -400px;
        height: 40px;
        animation: linkedin-slide-out .3s;
        animation-fill-mode: forwards;
        z-index: -5;
      }

      @keyframes linkedin-slide-out {
        from { right: 0px; }
        to { right: -400px; }
      }

      #no-display-1 {
        height: 40px;
        opacity: 0;
      }

      #no-display-2 {
        height: 40px;
        opacity: 0;
      }
    `
  );
}

// Wrapper for screen widths of less than 600px
function getWrapperSmall() {
  return (
    styled.div`
      position: fixed;
      right: 0;
      top: 100px;
      display: grid;
      grid-template-rows: 40px 40px;
      grid-template-columns: auto;
      grid-row-gap: 20px;

      padding: 10px;
      // border: 1px solid black;

      .navlinks-github {
        margin-right: 5px;
      }

      #github-show {
        height: 40px;
        display: none;
        z-index: -10;
      }

      #github-noshow {
        height: 40px;
        display: none;
        z-index: -10;
      }

      #linkedin-show {
        height: 40px;
        display: none;
        z-index: -10;
      }

      #linkedin-noshow {
        height: 40px;
        display: none;
        z-index: -10;
      }

      #no-display-1 {
        height: 40px;
        display: none;
      }

      #no-display-2 {
        height: 40px;
        display: none;
      }
    `
  );
}
