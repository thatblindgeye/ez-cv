import React, { Component } from 'react';
import EducationSection from './Education/EducationSection';

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
  }

  render() {
    return (
      <form autoComplete='off' noValidate>
        <EducationSection editMode={this.state.editMode} />
      </form>
    );
  }
}
