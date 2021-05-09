/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import EducationItem from './EducationItem';

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
    return (
      <fieldset className='education'>
        <legend>
          <h2>Education</h2>
        </legend>
        <ul role='list'>
          {this.state.educationList.map((item) => {
            const {
              id,
              degree,
              school,
              startDate,
              endDate,
              currentlyEnrolled,
            } = item;
            return (
              <li key={id}>
                <EducationItem
                  editMode={this.props.editMode}
                  itemID={id}
                  degree={degree}
                  school={school}
                  startDate={startDate}
                  endDate={endDate}
                  enrolled={currentlyEnrolled}
                />
              </li>
            );
          })}
        </ul>
        <button type='button' value='add'>
          Add Education
        </button>
      </fieldset>
    );
  }
}
