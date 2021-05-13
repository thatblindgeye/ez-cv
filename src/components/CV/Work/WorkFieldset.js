/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import SimpleInput from '../../Inputs/SimpleInput';
import DateRange from '../../Inputs/DateRange';
import TextArea from '../../Inputs/TextArea';
import { ReactComponent as DeleteIcon } from '../../../assets/images/icons/delete.svg';

export default function WorkFieldset({
  workList,
  addItemEvent,
  changeEvent,
  deleteItemEvent,
}) {
  return (
    <fieldset className='c-fieldset c-fieldset__work'>
      <legend className='c-fieldset__legend'>
        <h2 className='c-fieldset__legend-title'>Work Experience</h2>
      </legend>
      <ul role='list' className='c-fieldset__list' aria-label='work experience'>
        {workList.map((item) => {
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
            <li key={id} id={id} className='c-fieldset__list-item'>
              <>
                <SimpleInput
                  id={`position-${id}`}
                  fieldName='position'
                  label='Position or Title'
                  type='text'
                  defaultValue={position}
                  changeEvent={changeEvent}
                />
                <SimpleInput
                  id={`employer-${id}`}
                  fieldName='employer'
                  label='Employer'
                  type='text'
                  defaultValue={employer}
                  changeEvent={changeEvent}
                />
                <TextArea
                  id={`responsibility-${id}`}
                  fieldName='responsibilities'
                  label='Responsibilities'
                  rows='3'
                  defaultValue={responsibilities}
                  changeEvent={changeEvent}
                />
                <DateRange
                  dateID={id}
                  startDate={startDate}
                  endDate={endDate}
                  current={currentlyEmployed}
                  currentType='employed'
                  checkboxName='currentlyEmployed'
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
              </>
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
        Add Work
      </button>
    </fieldset>
  );
}
