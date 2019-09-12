import React, { Component } from 'react';
import styled from 'styled-components';

export default class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerClicked: false
    };
    this.styles = InitialStyle;
    this.handleClick = this.handleClick.bind(this);
  }

  // Changes the clicked status of the button
  handleClick(e) {
    this.setState(state => ({
      hamburgerClicked: !state.hamburgerClicked
    }));
  }

  /**
     * Smoothly scrolls to the href of the link clicked.
     * @param {Event being passed} e
     */
  scrollToElement(e) {
    e.preventDefault();
    if (e.target.href.indexOf('#') === -1) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    } else {
      let name = e.target.href.slice(e.target.href.indexOf('#') + 1);
      console.log(name);
      e = document.getElementById(name);
      var rect = e.getBoundingClientRect();

      window.scrollBy({
        left: 0,
        top: rect.top,
        behavior: 'smooth'
      });
    }
  }

  render() {
    let Wrapper = this.styles;
    this.styles = this.state.hamburgerClicked ? NotClicked : Clicked;

    return (
      <Wrapper onClick={this.handleClick} >
        <img src={require('../images/hamburger-button.png')} className='hamburger' alt='' />
        <div className='close-nav' ></div>
        <a href='none' onClick={this.scrollToElement}>
          Intro
        </a>
        <br />
        <a href='#skills-section' onClick={this.scrollToElement}>
          Skills
        </a>
        <br />
        <a href='#projects-section' onClick={this.scrollToElement}>
          Projects
        </a>
        <br />
        <a href='#contact-section' onClick={this.scrollToElement}>
          Contact
        </a>
      </Wrapper>
    );
  }
}

const NotClicked = getNotClicked();
function getNotClicked() {
  return (
    styled.div`
      background-color: #333;
      position: fixed;
      border-radius: 15%;
      right: 0;
      top: 0;
      opacity: 0.75;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 50vh;
      width: 40vw;
      max-width: 40vw;
      max-height: 50vh;
      animation: shrink .5s;
      animation-fill-mode: forwards;
      animation-delay: 0.25s;

      @keyframes shrink {
        from {
          width: 40vw;
          height: 50vh;
          max-width: 40vw;
          max-height: 50vh;
        }
        to {
          width: 15vw;
          height: 15vw;
          max-width: 75px;
          max-height: 75px;
        }
      }

      .close-nav {
        display: none;
      }

      a {
        color: white;
        font-family: 'Abril Fatface', cursive;
        font-size: 0em;
        border-radius: 20px;
        background-color: #111;
        margin-top: 5px;
        margin-bottom: auto;
      }

      .hamburger {
        opacity: 0;
        width: 13vw;
        height: 13vw;
        max-width: 65px;
        max-height: 65px;
        margin: auto auto;
        animation: fade-in 0.25s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }

      .hamburger:hover {
        cursor: pointer;
      }

      @media (min-width: 800px) {
        display: none;
      }
    `
  );
}

const Clicked = getClicked();
function getClicked() {
  return (
    styled.div`
      background-color: #333;
      position: fixed;
      border-radius: 15%;
      right: 0;
      top: 0;
      opacity: 0.75;
      text-align: center;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: grow .5s;
      animation-fill-mode: forwards;
      height: 15vw;
      width: 15vw;

      @keyframes grow {
        from {
          width: 15vw;
          height: 15vw;
        }
        to {
          width: 40vw;
          height: 50vh;
        }
      }

      .close-nav {
        z-index: -10;
        opacity: 0;
        width: 200vw;
        height: 100vh;
        position: fixed;
      }

      a {
        color: white;
        font-family: 'Abril Fatface', cursive;
        font-size: 0em;
        border-radius: 20px;
        background-color: #111;
        margin-top: auto;
        margin-bottom: auto;
        animation: slide-in 0.5s;
        animation-fill-mode: forwards;
        animation-delay: 0.25s;
      }

      @keyframes slide-in {
        from {
          font-size: 0em;
          width: 0px;
        }
      
        to {
          font-size: 6vw;
          width: 30vw;
        }
      }

      .hamburger {
        width: 65px;
        height: 65px;
        padding: 5px;
        display: none;
      }

      .hamburger:hover {
        cursor: pointer;
      }

      .active {
        background-color: #373;
      }

      @media (min-width: 800px) {
        display: none;
      }
    `
  );
}

const InitialStyle = getInitial();
function getInitial() {
  return (
    styled.div`
      background-color: #333;
      position: fixed;
      border-radius: 15%;
      right: 0;
      top: 0;
      opacity: 0.75;
      z-index: 5;
      height: 15vw;
      width: 15vw;
      max-width: 75px;
      max-height: 75px;
      min-width: 25px;
      min-height: 25px;

      .close-nav {
        display: none;
      }

      a {
        display: none;
      }

      .hamburger {
        width: 13vw;
        height: 13vw;
        max-width: 65px;
        max-height: 65px;
        margin: auto auto;
      }

      .hamburger:hover {
        cursor: pointer;
      }

      @media (min-width: 800px) {
        display: none;
      }
    `
  );
}
