/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import WorkItem from './WorkItem';

export default class WorkSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newWork: {
        id: '',
        position: '',
        employer: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
        currentlyEmployed: false,
      },
      workList: [
        {
          id: 2,
          position: 'TPS Auditor',
          employer: 'Awfiss Space',
          startDate: '2019-10-15',
          endDate: '',
          responsibilities:
            'Ensuring all TPS reports were filled out correctly.',
          currentlyEmployed: false,
        },
      ],
    };
  }

  render() {
    return (
      <fieldset className='work'>
        <legend>
          <h2>Work Experience</h2>
        </legend>
        <ul role='list'>
          {this.state.workList.map((item) => {
            const {
              id,
              position,
              employer,
              startDate,
              endDate,
              responsibilities,
              currentlyEmployed,
            } = item;
            return (
              <li key={id}>
                <WorkItem
                  editMode={this.props.editMode}
                  itemID={id}
                  position={position}
                  employer={employer}
                  startDate={startDate}
                  endDate={endDate}
                  responsibilities={responsibilities}
                  employed={currentlyEmployed}
                />
              </li>
            );
          })}
        </ul>
        <button type='button' value='add'>
          Add Work
        </button>
      </fieldset>
    );
  }
}
