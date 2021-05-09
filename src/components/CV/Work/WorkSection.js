/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import WorkFieldset from './WorkFieldset';
import WorkPreview from './WorkPreview';

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
    const { workList } = this.state;
    const { editMode } = this.props;

    return (
      <>
        {editMode ? (
          <WorkFieldset workList={workList} editMode={editMode} />
        ) : (
          <WorkPreview workList={workList} editMode={editMode} />
        )}
      </>
    );
  }
}
