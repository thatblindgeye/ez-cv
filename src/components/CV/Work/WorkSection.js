/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import WorkFieldset from './WorkFieldset';
import WorkPreview from './WorkPreview';

export default class WorkSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workList: [],
    };
  }

  handleAddWork = () => {
    const newWork = {
      id: nanoid(),
      position: '',
      employer: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
      currentlyEmployed: false,
    };

    const updatedWorkList = [...this.state.workList, newWork];

    this.setState({
      workList: updatedWorkList,
    });
  };

  handleUpdateWork = (e) => {
    const currentItem = e.target.closest('li');
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const workListCopy = this.state.workList.map((item) => {
      if (item.id === currentItem.id) {
        item[name] = value;
      }
      return item;
    });

    this.setState({
      workList: workListCopy,
    });
  };

  handleDeleteWork = (e) => {
    const currentItem = e.target.closest('li');

    const workListCopy = this.state.workList.filter(
      (item) => item.id !== currentItem.id
    );

    this.setState({
      workList: workListCopy,
    });
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
            addButtonEvent={this.handleAddWork}
            changeEvent={this.handleWorkChange}
            deleteButtonEvent={this.handleWorkDelete}
          />
        ) : (
          <WorkPreview workList={workList} editMode={editMode} />
        )}
      </>
    );
  }
}
