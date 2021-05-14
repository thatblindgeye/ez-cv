import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PersonalFieldset from './Personal/PersonalFieldset';
import PersonalPreview from './Personal/PersonalPreview';
import WorkFieldset from './Work/WorkFieldset';
import WorkPreview from './Work/WorkPreview';
import EducationFieldset from './Education/EducationFieldset';
import EducationPreview from './Education/EducationPreview';
import { capitalizeString } from '../../scripts/formatting';

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

  handleSubmit = (e) => {
    e.preventDefault();
    // Check whether all inputs are valid upon clicking the submit button
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

  handleValidateInputs = (e) => {
    const { name, value } = e.target;

    const errorTypes = {
      none: '',
      blank: `${capitalizeString(name)} cannot be blank.`,
      phonePattern: `${value} is not a valid phone number. Make sure you include the whole number and only use valid characters.`,
      emailPattern: `${value} is not a valid email. Make sure you include a username, the @ symbol, and a domain (e.g. "gmail.com").`,
      url: 'URL is invalid. Make sure the url starts with either https:// or http://',
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
    if (e.target.validity) {
      setErrorState('none');
    }

    if (e.target.validity.valueMissing) {
      setErrorState('blank');
    }

    if (e.target.validity.patternMismatch) {
      setErrorState(`${name}Pattern`);
    }

    if (e.target.validity.typeMismatch) {
      setErrorState('url');
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
      <form className='l-form' autoComplete='off' noValidate>
        <PersonalFieldset
          name={name}
          summary={summary}
          phone={phone}
          email={email}
          location={location}
          linkedIn={linkedIn}
          personalSite={personalSite}
          changeEvent={this.handleUpdatePersonal}
          blurEvent={this.handleValidateInputs}
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
        <div className='l-form__errors' aria-live='polite'>
          {errors.form}
        </div>
        <div className='l-button-container'>
          <button
            type='submit'
            className='c-button--contained'
            value='submit'
            onClick={this.handleSubmit}
          >
            Preview CV
          </button>
          <button
            type='reset'
            className='c-button--outline'
            value='reset'
            onClick={this.handleResetCV}
          >
            Reset CV
          </button>
        </div>
      </form>
    );

    const cvPreview = (
      <div className='l-preview-container'>
        <PersonalPreview
          name={name}
          summary={summary}
          phone={phone}
          email={email}
          location={location}
          linkedIn={linkedIn}
          personalSite={personalSite}
        />
        {workList.length ? <WorkPreview workList={workList} /> : null}
        {educationList.length ? (
          <EducationPreview educationList={educationList} />
        ) : null}
        <div className='l-button-container'>
          <button
            type='button'
            className='c-button--contained'
            value='edit'
            onClick={this.handleSubmit}
          >
            Edit CV
          </button>
          <button type='button' className='c-button--outline' value='save'>
            Save as PDF
          </button>
        </div>
      </div>
    );

    return <>{editMode ? cvEdit : cvPreview}</>;
  }
}
