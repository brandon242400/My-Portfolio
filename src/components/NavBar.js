import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';

export default class NavBar extends Component {

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
    return (
      <Wrapper>
        <a href='none' onClick={this.scrollToElement}>
          Welcome
        </a>
        <a href='#skills-section' onClick={this.scrollToElement}>
          Skills
        </a>
        <a href='#projects-section' onClick={this.scrollToElement}>
          Projects
        </a>
      </Wrapper>
    );
  }
}



const Wrapper = styled.div`
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.75;
  z-index: 5;

  a {
    font-family: 'Roboto', sans-serif;
    float: left;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    padding-top: 5px;
    width: 20%;
    height: 50px;
    font-size: 200%;
    transition: all 0.25s;
  }

  a:hover {
    background-color: #fff;
    color: black;
    font-weight: bolder;
    width: 25%;
  }

  @media (max-width: 799px) {
    display: none;
  }
`;