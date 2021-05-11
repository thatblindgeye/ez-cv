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
        responsibilities: '',
        startDate: '',
        endDate: '',
        currentlyEmployed: false,
      },
      workList: [
        {
          id: 2,
          position: 'TPS Auditor',
          employer: 'Awfiss Space',
          startDate: '2019-10-15',
          endDate: '2020-11-01',
          responsibilities:
            'Ensuring all TPS reports were filled out correctly.',
          currentlyEmployed: false,
        },
        {
          id: 77,
          position: 'A position',
          employer: 'Ink, inc.',
          startDate: '2016-02-22',
          endDate: '',
          responsibilities: 'Some stuff.',
          currentlyEmployed: false,
        },
      ],
    };
  }

  handleWorkChange = (e) => {
    const currentItem = e.target.closest('li');
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const workListCopy = this.state.workList.map((item) => {
      if (item.id === Number(currentItem.id)) {
        item[name] = value;
      }
      return item;
    });

    this.setState(
      {
        workList: workListCopy,
      },
      () => {
        console.log('main: ', this.state.workList);
      }
    );
  };

  render() {
    const { workList } = this.state;
    const { editMode } = this.props;

    return (
      <>
        {editMode ? (
          <WorkFieldset
            workList={workList}
            editMode={editMode}
            changeEvent={this.handleWorkChange}
          />
        ) : (
          <WorkPreview workList={workList} editMode={editMode} />
        )}
      </>
    );
  }
}
