import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PersonalFieldset from './Personal/PersonalFieldset';
import PersonalPreview from './Personal/PersonalPreview';
import WorkFieldset from './Work/WorkFieldset';
import WorkPreview from './Work/WorkPreview';
import EducationFieldset from './Education/EducationFieldset';
import EducationPreview from './Education/EducationPreview';

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      name: '',
      summary: '',
      phone: '',
      email: '',
      location: '',
      linkedIn: '',
      personalSite: '',
      workList: [],
      educationList: [],
    };
  }

  handleUpdatePersonal = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value,
    });
  };

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

  handleAddEducation = () => {
    const newEducation = {
      id: nanoid(),
      degree: '',
      school: '',
      startDate: '',
      endDate: '',
      currentlyEnrolled: false,
    };

    const updatedEducationList = [...this.state.educationList, newEducation];

    this.setState({
      educationList: updatedEducationList,
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

    this.setState(
      {
        [list]: listCopy,
      },
      () => {
        console.log(this.state.workList);
      }
    );
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

  handleToggleEditMode = (e) => {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  handleResetCV = () => {
    this.setState({
      editMode: true,
      name: '',
      summary: '',
      phone: '',
      email: '',
      location: '',
      linkedIn: '',
      personalSite: '',
      workList: [],
      educationList: [],
    });
  };

  render() {
    const {
      editMode,
      name,
      summary,
      phone,
      email,
      location,
      linkedIn,
      personalSite,
      workList,
      educationList,
    } = this.state;

    const cvEdit = (
      <form autoComplete='off' noValidate>
        <PersonalFieldset
          name={name}
          summary={summary}
          phone={phone}
          email={email}
          location={location}
          linkedIn={linkedIn}
          personalSite={personalSite}
          changeEvent={this.handleUpdatePersonal}
        />
        <WorkFieldset
          workList={workList}
          addItemEvent={this.handleAddWork}
          changeEvent={(e) => {
            this.handleUpdateList(e, 'workList');
          }}
          deleteItemEvent={(e) => {
            this.handleDeleteItem(e, 'workList');
          }}
        />
        <EducationFieldset
          educationList={educationList}
          addItemEvent={this.handleAddEducation}
          changeEvent={(e) => {
            this.handleUpdateList(e, 'educationList');
          }}
          deleteItemEvent={(e) => {
            this.handleDeleteItem(e, 'educationList');
          }}
        />
        <div className='c-cv-buttons'>
          <button
            type='submit'
            className='c-button'
            value='submit'
            onClick={this.handleToggleEditMode}
          >
            Preview CV
          </button>
          <button
            type='reset'
            className='c-button'
            value='reset'
            onClick={this.handleResetCV}
          >
            Reset CV
          </button>
        </div>
      </form>
    );

    const cvPreview = (
      <div className='c-cv-preview'>
        <PersonalPreview
          name={name}
          summary={summary}
          phone={phone}
          email={email}
          location={location}
          linkedIn={linkedIn}
          personalSite={personalSite}
        />
        <WorkPreview workList={workList} />
        <EducationPreview educationList={educationList} />
        <div className='c-cv-buttons'>
          <button
            type='button'
            className='c-button'
            value='edit'
            onClick={this.handleToggleEditMode}
          >
            Edit CV
          </button>
          <button type='button' className='c-button' value='save'>
            Save as PDF
          </button>
        </div>
      </div>
    );

    return <>{editMode ? cvEdit : cvPreview}</>;
  }
}
