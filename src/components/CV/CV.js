import React, { Component } from 'react';
import PersonalSection from './Personal/PersonalSection';
import WorkSection from './Work/WorkSection';
import EducationSection from './Education/EducationSection';

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: true };
  }

  render() {
    const { editMode } = this.state;
    const childItems = (
      <>
        <PersonalSection editMode={editMode} />
        <WorkSection editMode={editMode} />
        <EducationSection editMode={editMode} />
      </>
    );

    const form = (
      <form autoComplete='off' noValidate>
        {childItems}
      </form>
    );

    const preview = <div className='c-cv-preview'>{childItems}</div>;

    return <>{editMode ? form : preview}</>;
  }
}
