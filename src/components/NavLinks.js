import React, { Component } from 'react';
import styled from 'styled-components';


export default class NavLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gitShow: false,
      linkedinShow: false
    };
    // github-noshow , linkedin-noshow
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(e) {
    if (e.target.alt === 'GitHub Logo') {
      this.setState((prevState) => ({ gitShow: !prevState.gitShow }));
    } else {
      this.setState((prevState) => ({ linkedinShow: !prevState.linkedinShow }));
    }
    console.log(this.state.gitShow);
  }

  render() {
    return (
      <Wrapper>
        <img src={require('../images/github-text-logo.png')} alt='GitHub text'
          id={this.state.gitShow ? 'github-show' : 'github-noshow'} />
        <a href='https://github.com/brandon242400' target='_blank' className='navlinks-github' rel="noopener noreferrer">
          <img src={require('../images/github-logo.svg')} alt='GitHub Logo' onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseOver} style={{ zIndex: 3 }} />
        </a>
        <br />
        <img src={require('../images/linkedin-text.png')} alt='Linkedin text'
          id={this.state.linkedinShow ? 'linkedin-show' : 'linkedin-noshow'} />
        <a href='https://www.linkedin.com/in/brandon-carmona/' target='_blank' className='navlinks-linkedin' rel="noopener noreferrer">
          <img src={require('../images/linkedin-logo.png')} alt='Linkedin Logo' onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseOver} style={{ zIndex: 3 }} />
        </a>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 70px;

  padding: 10px;
  // border: 1px solid black;

  a img {
    height: 75px;
  }

  .navlinks-github {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
  }

  .navlinks-github img {
    display: block;
    // border: 1px solid black;
  }

  .navlinks-linkedin {
    display: flex;
  }

  .navlinks-linkedin img {
    display: block;
    margin-left: auto;
  }

  #github-show {
    // display: none;
    height: 75px;
    position: relative;
    right: -200px;
    animation: github-slide-in .3s;
    animation-fill-mode: forwards;
  }

  @keyframes github-slide-in {
    from { right: -400px; }
    to { right: 0px; }
  }

  #github-noshow {
    position: relative;
    height: 75px;
    right: -400px;
    animation: github-slide-out .3s;
    animation-fill-mode: forwards;
  }

  @keyframes github-slide-out {
    from { right: 0px; }
    to { right: -400px; }
  }

  #linkedin-show {
    // display: none;
    position: relative;
    right: -200px;
    height: 75px;
    animation: linkedin-slide-in .3s;
    animation-fill-mode: forwards;
  }

  @keyframes linkedin-slide-in {
    from { right: -400px; }
    to { right: 0px; }
  }

  #linkedin-noshow {
    position: relative;
    right: -400px;
    height: 75px;
    animation: linkedin-slide-out .3s;
    animation-fill-mode: forwards;
  }

  @keyframes linkedin-slide-out {
    from { right: 0px; }
    to { right: -400px; }
  }
`;