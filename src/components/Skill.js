import React, { Component } from 'react';

export default class Skill extends Component {
  constructor(props) {
    super(props);
    // Saves the icon image file and name of the skill
    this.state = {
      icon: props.icon,
      skillName: props.skillName
    };
  }

  render() {
    return (
      <div className='skill-container'>
        <img src={this.state.icon} />
        <h3>{this.state.skillName}</h3>
      </div>
    );
  }
}
