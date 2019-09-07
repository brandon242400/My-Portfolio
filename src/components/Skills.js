import React, { Component } from 'react';
import Skill from './Skill';

export default class Skills extends Component {
  render() {
    return (
      <div className='skills-container'>
        <h1>Skills</h1>
        <div className='skills-icon-container'>
          <Skill icon={require('../images/github-logo.svg')} skillName='Git/GitHub' />
          <Skill icon={require('../images/react-logo.svg')} skillName='React' />
          <Skill icon={require('../images/css-logo.svg')} skillName='CSS' />
          <Skill icon={require('../images/html-logo.svg')} skillName='HTML' />
          <Skill icon={require('../images/java-logo.svg')} skillName='Java' />
          <Skill icon={require('../images/js-logo.svg')} skillName='JavaScript' />
          <Skill icon={require('../images/nodejs-logo.svg')} skillName='NodeJS' />
          <Skill icon={require('../images/python-logo.svg')} skillName='Python' />
        </div>
      </div>
    )
  }
}
