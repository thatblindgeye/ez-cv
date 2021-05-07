import React from 'react';
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
  clickEnrolled,
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
        clickEnrolled={clickEnrolled}
      />
    </div>
  );

  const itemPreview = <div className='education__item--preview'>Preview</div>;

  return <>{editMode ? itemEdit : itemPreview}</>;
}
