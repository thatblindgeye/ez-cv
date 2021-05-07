/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
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
          id: 5,
          degree: 'AS Accounting',
          school: 'Fake University',
          startDate: '2015-01-01',
          endDate: '',
          currentlyEnrolled: false,
        },
        {
          id: 15,
          degree: 'AS Math',
          school: 'Real University',
          startDate: '2018-01-01',
          endDate: '',
          currentlyEnrolled: true,
        },
      ],
    };
  }

  handleEnrolledCheckbox = (e, item) => {
    if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      console.log(item);
    }
  };

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
                  clickEnrolled={(e) => {
                    this.handleEnrolledCheckbox(e, item);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </fieldset>
    );
  }
}
