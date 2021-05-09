/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import EducationFieldset from './EducationFieldset';
import EducationPreview from './EducationPreview';

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
        currentlyEnrolled: false,
      },
      educationList: [
        {
          id: nanoid(15),
          degree: 'AS Accounting',
          school: 'Fake University',
          startDate: '2015-01-01',
          endDate: '2017-01-05',
          currentlyEnrolled: false,
        },
        {
          id: nanoid(15),
          degree: 'AS Math',
          school: 'Real University',
          startDate: '2018-05-01',
          endDate: '',
          currentlyEnrolled: true,
        },
      ],
    };
  }

  render() {
    const { educationList } = this.state;
    const { editMode } = this.props;

    return (
      <>
        {editMode ? (
          <EducationFieldset
            educationList={educationList}
            editMode={editMode}
          />
        ) : (
          <EducationPreview educationList={educationList} editMode={editMode} />
        )}
      </>
    );
  }
}
