import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PersonalFieldset from './Personal/PersonalFieldset';
import PersonalPreview from './Personal/PersonalPreview';
import WorkFieldset from './Work/WorkFieldset';
import WorkPreview from './Work/WorkPreview';
import EducationFieldset from './Education/EducationFieldset';
import EducationPreview from './Education/EducationPreview';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from '../CV/PDF';
import { capitalizeString } from '../../scripts/formatting';

export default function CV() {
  const [editMode, setEditMode] = useState(true);
  const [personal, setPersonal] = useState({
    name: '',
    summary: '',
    phone: '',
    email: '',
    location: '',
    linkedIn: '',
    personalSite: '',
  });
  const [workList, setWorkList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [errors, setErrors] = useState({});

  const handleUpdatePersonal = (e) => {
    const name = e.target.name;
    setPersonal({
      ...personal,
      [name]: e.target.value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleAddWork = () => {
    const newWork = {
      id: nanoid(),
      position: '',
      employer: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
      currentlyEmployed: false,
    };

    const updatedWorkList = [...workList, newWork];

    setWorkList(updatedWorkList);
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: nanoid(),
      degree: '',
      school: '',
      startDate: '',
      endDate: '',
      currentlyEnrolled: false,
    };

    const updatedEducationList = [...educationList, newEducation];

    setEducationList(updatedEducationList);
  };

  const handleChange = (e, list) => {
    const currentItem = e.target.closest('li');
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const listCopy = list.map((item) => {
      if (item.id === currentItem.id) {
        item[name] = value;
      }
      return item;
    });

    list === workList ? setWorkList(listCopy) : setEducationList(listCopy);
  };

  const handleDeleteItem = (e, list) => {
    const currentItem = e.target.closest('li');
    const listCopy = list.filter((item) => item.id !== currentItem.id);

    list === workList ? setWorkList(listCopy) : setEducationList(listCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check whether all inputs are valid upon clicking the submit button
    handleValidateOnSubmit()
      ? // Reset errors to an empty object when all inputs are valid
        (function () {
          setEditMode(!editMode);
          setErrors({});
          document.documentElement.scrollTop = 0;
        })()
      : // Add a form error if any input is invalid upon submission
        setErrors({
          ...errors,
          form: 'Unable to preview your CV. Make sure all required fields are filled out and all fields have a valid input.',
        });
  };

  const handleValidateInputs = (e) => {
    const { name, value } = e.target;

    const errorTypes = {
      none: '',
      blank: `${capitalizeString(name)} cannot be blank.`,
      phonePattern: `${value} is not a valid phone number. Make sure you include the whole number and only use valid characters.`,
      emailPattern: `${value} is not a valid email. Make sure you include a username, the @ symbol, and a domain (e.g. "gmail.com").`,
      url: `${value} is not a valid URL. Make sure the URL format follows the input instructions.`,
    };

    const setErrorState = (type) => {
      setErrors({
        ...errors,
        [name]: errorTypes[type],
      });
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

    if (e.target.validity.typeMismatch && name !== 'email') {
      setErrorState('url');
    }
  };

  const handleValidateOnSubmit = () => {
    const formIsValid = Array.from(document.querySelectorAll('input')).every(
      (input) => input.checkValidity()
    );

    return formIsValid;
  };

  const handleResetCV = () => {
    setEditMode(true);
    setPersonal({
      name: '',
      summary: '',
      phone: '',
      email: '',
      location: '',
      linkedIn: '',
      personalSite: '',
    });
    setWorkList([]);
    setEducationList([]);
    setErrors({});
  };

  const { name, summary, phone, email, location, linkedIn, personalSite } =
    personal;

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
        changeEvent={handleUpdatePersonal}
        blurEvent={handleValidateInputs}
        errors={errors}
      />
      <WorkFieldset
        workList={workList}
        addItemEvent={handleAddWork}
        changeEvent={(e) => {
          handleChange(e, workList);
        }}
        deleteItemEvent={(e) => {
          handleDeleteItem(e, workList);
        }}
      />
      <EducationFieldset
        educationList={educationList}
        addItemEvent={handleAddEducation}
        changeEvent={(e) => {
          handleChange(e, educationList);
        }}
        deleteItemEvent={(e) => {
          handleDeleteItem(e, educationList);
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
          onClick={handleSubmit}
        >
          Preview CV
        </button>
        <button
          type='reset'
          className='c-button--outline'
          value='reset'
          onClick={handleResetCV}
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
          onClick={handleSubmit}
        >
          Edit CV
        </button>
        <PDFDownloadLink
          className='c-link--download'
          document={
            <PDF
              name={name}
              summary={summary}
              phone={phone}
              email={email}
              location={location}
              linkedIn={linkedIn}
              personalSite={personalSite}
              work={workList}
              education={educationList}
            />
          }
          fileName={'myCV'}
        >
          Download PDF
        </PDFDownloadLink>
      </div>
    </div>
  );

  return <>{editMode ? cvEdit : cvPreview}</>;
}
