/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import SimpleInput from '../../Inputs/SimpleInput';
import DateRange from '../../Inputs/DateRange';
import { ReactComponent as DeleteIcon } from '../../../assets/images/icons/delete.svg';

export default function EducationFieldset({
  educationList,
  addItemEvent,
  changeEvent,
  deleteItemEvent,
}) {
  return (
    <fieldset className='c-fieldset c-fieldset__education'>
      <legend className='c-fieldset__legend'>
        <h2 className='c-fieldset__legend-title'>Education</h2>
      </legend>
      <ul role='list' className='c-fieldset__list' aria-label='education'>
        {educationList.map((item) => {
          const { id, degree, school, startDate, endDate, currentlyEnrolled } =
            item;
          return (
            <li key={id} id={id} className='c-fieldset__list-item'>
              <SimpleInput
                id={`degree-${id}`}
                fieldName='degree'
                label='Degree or Certification'
                type='text'
                defaultValue={degree}
                changeEvent={changeEvent}
              />
              <SimpleInput
                id={`school-${id}`}
                fieldName='school'
                label='School or Organization'
                type='text'
                defaultValue={school}
                changeEvent={changeEvent}
              />
              <DateRange
                dateID={id}
                startDate={startDate}
                endDate={endDate}
                current={currentlyEnrolled}
                currentType='enrolled'
                checkboxName='currentlyEnrolled'
                changeEvent={changeEvent}
              />
              <button
                type='button'
                className='c-button--delete'
                value='delete'
                onClick={deleteItemEvent}
              >
                <DeleteIcon className='c-button__icon' aria-hidden='true' />
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type='button'
        className='c-button--contained'
        value='add'
        onClick={addItemEvent}
      >
        Add Education
      </button>
    </fieldset>
  );
}
