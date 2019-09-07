import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop(e) {
    e.preventDefault();
    var scrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth'
    }
    window.scrollTo(scrollOptions);
  }

  render() {
    return (
      <Wrapper>
        <a href='none' onClick={this.scrollToTop}>
          Intro
        </a>
        <a href='#skills-section'>
          Skills
        </a>
        <a href='#projects-section'>
          Projects
        </a>
        <a href='#contact-section'>
          Contact
        </a>
        <a href='#' className='image-link'>
          <img src={require('../images/github-logo.svg')} />
        </a>
      </Wrapper>
    )
  }
}



const Wrapper = styled.div`
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  height: 5vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.75;
  z-index: 5;

  a {
    font-family: 'Merriweather', serif;
    float: left;
    color: #f2f2f2;
    text-align: center;
    /* padding: 6px 16px; */
    text-decoration: none;
    width: 15%;
    height: 50px;
    font-size: 4vh;
    transition: all 0.25s;
  }

  a:hover {
    background-color: #ddd;
    color: black;
    width: 18%;
    font-weight: bolder;
  }

  .image-link img {
    width: 40px;
    height: 40px;
  }

  .image-link {
    width: 2vh;
    height: 30px;
  }

  .image-link:hover {
    width: 5%;
  }

  .active {
    background-color: #4caf50;
    color: white;
    font-weight: bolder;
    width: 20% !important;
  }
`;