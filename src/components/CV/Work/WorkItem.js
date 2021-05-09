import React from 'react';
import formatDate from '../../../scripts/date-formatter';
import SimpleInput from '../../Inputs/SimpleInput';
import DateRange from '../../Inputs/DateRange';

export default function WorkItem({
  editMode,
  itemID,
  position,
  employer,
  startDate,
  endDate,
  responsibilities,
  employed,
}) {
  const itemEdit = (
    <div className='work__item--edit'>
      <SimpleInput
        id={`position-${itemID}`}
        label='Position or Title'
        type='text'
        defaultValue={position}
      />
      <SimpleInput
        id={`employer-${itemID}`}
        label='Employer'
        type='text'
        defaultValue={employer}
      />
      <div className='c-responsibility'>
        <label
          htmlFor={`responsibility-${itemID}`}
          className='c-responsibility__label'
        >
          Responsibilities
        </label>
        <textarea
          id={`responsibility-${itemID}`}
          className='c-responsibility__field'
          rows='3'
        ></textarea>
      </div>
      <DateRange
        dateID={itemID}
        startDate={startDate}
        endDate={endDate}
        current={employed}
        currentType='employed'
      />
      <button type='button' value='delete'>
        Delete
      </button>
    </div>
  );

  const itemPreview = (
    <div className='item__container'>
      <div className='item__main-heading'>{position}</div>
      <div className='item__secondary-heading'>{employer}</div>
      <div className='item__additional-details'>{responsibilities}</div>
      <div className='item__date-range'>
        <span>{startDate ? formatDate(startDate) : ''} to </span>
        <span>
          {employed
            ? 'present'
            : endDate === ''
            ? 'unknown'
            : formatDate(endDate)}
        </span>
      </div>
    </div>
  );

  return <>{editMode ? itemEdit : itemPreview}</>;
}
