import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PersonalSection from './Personal/PersonalSection';
import WorkSection from './Work/WorkSection';
import EducationSection from './Education/EducationSection';

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: true, workList: [], educationList: [] };
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

  handleUpdateList = (e, list) => {
    const currentItem = e.target.closest('li');
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const listCopy = this.state[list].map((item) => {
      if (item.id === currentItem.id) {
        item[name] = value;
      }
      return item;
    });

    this.setState({
      [list]: listCopy,
    });
  };

  handleDeleteItem = (e, list) => {
    const currentItem = e.target.closest('li');
    const listCopy = this.state[list].filter(
      (item) => item.id !== currentItem.id
    );
    this.setState({
      [list]: listCopy,
    });
  };

  render() {
    const { editMode, workList } = this.state;
    const childItems = (
      <>
        <PersonalSection editMode={editMode} />
        <WorkSection
          editMode={editMode}
          workList={workList}
          addButtonEvent={this.handleAddWork}
          changeEvent={(e) => {
            this.handleUpdateList(e, 'workList');
          }}
          deleteButtonEvent={(e) => {
            this.handleDeleteItem(e, 'workList');
          }}
        />
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
