import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <h1>Projects</h1>
        <div className='projects-tony-container'>
          <a href='#'>
            <img src={require('../images/tony-portfolio-desktop.jpg')} 
            alt='Desktop view of website' />
          </a>
          <a href='#'>
            <img src={require('../images/tony-portfolio-mobile.png')} 
            alt='Mobile view of website' />
          </a>
          <p className='tony-portfolio-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eaque esse animi doloribus ipsum adipisci aliquid voluptate veniam reiciendis ipsam et, aperiam odit aliquam rem voluptatem, quaerat commodi autem! Suscipit.
          </p>
        </div>
      </div>
    )
  }
}
