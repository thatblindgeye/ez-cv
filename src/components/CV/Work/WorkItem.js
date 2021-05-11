import React from 'react';
import formatDate from '../../../scripts/date-formatter';
import SimpleInput from '../../Inputs/SimpleInput';
import DateRange from '../../Inputs/DateRange';
import TextArea from '../../Inputs/TextArea';

export default function WorkItem(props) {
  const {
    editMode,
    itemID,
    position,
    employer,
    startDate,
    endDate,
    responsibilities,
    employed,
    changeEvent,
  } = props;

  const itemEdit = (
    <>
      <SimpleInput
        id={`position-${itemID}`}
        fieldName='position'
        label='Position or Title'
        type='text'
        defaultValue={position}
        changeEvent={changeEvent}
      />
      <SimpleInput
        id={`employer-${itemID}`}
        fieldName='employer'
        label='Employer'
        type='text'
        defaultValue={employer}
        changeEvent={changeEvent}
      />
      <TextArea
        id={`responsibility-${itemID}`}
        fieldName='responsibilities'
        label='Responsibilities'
        rows='3'
        defaultValue={responsibilities}
        changeEvent={changeEvent}
      />
      <DateRange
        dateID={itemID}
        startDate={startDate}
        endDate={endDate}
        current={employed}
        currentType='employed'
        checkboxName='currentlyEmployed'
        changeEvent={changeEvent}
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
