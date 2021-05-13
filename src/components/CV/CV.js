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
      valid: false,
      name: '',
      summary: '',
      phone: '',
      email: '',
      location: '',
      linkedIn: '',
      personalSite: '',
      workList: [],
      educationList: [],
      errors: {},
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
        console.log(this.state);
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
    // Check whether all inputs are valid upon clicking the Preview CV button
    this.handleValidateOnSubmit()
      ? // Reset errors to an empty object when all inputs are valid
        this.setState(
          {
            editMode: !this.state.editMode,
            errors: {},
          },
          () => {
            console.log(this.state);
          }
        )
      : // Add a form error if any input is invalid upon submission
        this.setState({
          errors: {
            ...this.state.errors,
            form: 'Unable to preview your CV. Make sure all required fields are filled out and all fields have a valid input.',
          },
        });
  };

  handleValidateInputs = (target) => {
    const { name, value } = target;

    const errorTypes = {
      none: '',
      blank: `${name} cannot be blank.`,
      phonePattern: `${value} is not a valid phone number. Make sure you include the whole number and only use valid characters.`,
      emailPattern: `${value} is not a valid email. Make sure you include a username, the @ symbol, and a domain (e.g. "gmail.com").`,
    };

    const setErrorState = (type) => {
      this.setState(
        {
          errors: {
            ...this.state.errors,
            [name]: errorTypes[type],
          },
        },
        () => {
          console.log(this.state);
        }
      );
    };

    // Set fields' error state to an empty string when field is valid
    if (target.validity) {
      setErrorState('none');
    }

    if (target.validity.valueMissing) {
      setErrorState('blank');
    }

    if (target.validity.patternMismatch) {
      setErrorState(`${name}Pattern`);
    }
  };

  handleValidateOnSubmit = () => {
    const formIsValid = Array.from(document.querySelectorAll('input')).every(
      (input) => input.checkValidity()
    );

    return formIsValid;
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
      errors: {},
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
      errors,
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
          blurEvent={(e) => {
            this.handleValidateInputs(e.target);
          }}
          errors={errors}
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
        <div className='c-cv-submit-errors' aria-live='polite'>
          {errors.form}
        </div>
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
