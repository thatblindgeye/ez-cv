import React from 'react';
import formatDate from '../../../scripts/date-formatter';
import SimpleInput from '../../Inputs/SimpleInput';
import DateRange from '../../Inputs/DateRange';

export default function EducationItem({
  editMode,
  itemID,
  degree,
  school,
  startDate,
  endDate,
  enrolled,
}) {
  const itemEdit = (
    <div className='education__item--edit'>
      <SimpleInput
        id={`degree-${itemID}`}
        label='Degree or Certification'
        type='text'
        defaultValue={degree}
      />
      <SimpleInput
        id={`school-${itemID}`}
        label='School or Organization'
        type='text'
        defaultValue={school}
      />
      <DateRange
        dateID={itemID}
        startDate={startDate}
        endDate={endDate}
        enrolled={enrolled}
      />
      <button type='button' value='delete'>
        Delete
      </button>
    </div>
  );

  const itemPreview = (
    <div className='education__item--preview'>
      <div>{degree}</div>
      <div>{school}</div>
      <div>
        <span>{formatDate(startDate)}</span>-
        <span>
          {enrolled ? endDate : endDate === '' ? '' : formatDate(endDate)}
        </span>
      </div>
    </div>
  );

  return <>{editMode ? itemEdit : itemPreview}</>;
}
