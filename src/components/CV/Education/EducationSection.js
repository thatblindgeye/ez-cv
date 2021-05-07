import React, { Component } from 'react';

export default class EducationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEducation: {
        id: '',
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
      },
      educationList: [],
    };
  }

  render() {
    return (
      <fieldset className='education'>
        <legend>Education</legend>
      </fieldset>
    );
  }
}
