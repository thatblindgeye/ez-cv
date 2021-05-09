import React from 'react';
import formatDate from '../../../scripts/date-formatter';
import SimpleInput from '../../Inputs/SimpleInput';
import DateRange from '../../Inputs/DateRange';
import TextArea from '../../Inputs/TextArea';

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
    <>
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
      <TextArea
        id={`responsibility-${itemID}`}
        label='Responsibilities'
        rows='3'
        defaultValue={responsibilities}
      />
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
    </>
  );

  const itemPreview = (
    <div className='c-item-preview'>
      <div className='c-item-preview__main-heading'>{position}</div>
      <div className='c-item-preview__secondary-heading'>{employer}</div>
      <div className='c-item-preview__additional-details'>
        {responsibilities}
      </div>
      <div className='c-item-preview__date-range'>
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
