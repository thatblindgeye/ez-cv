/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import EducationItem from './EducationItem';

export default function EducationFieldset(props) {
  return (
    <fieldset className='education'>
      <legend>
        <h2>Education</h2>
      </legend>
      <ul role='list'>
        {props.educationList.map((item) => {
          const {
            id,
            degree,
            school,
            startDate,
            endDate,
            currentlyEnrolled,
          } = item;
          return (
            <li key={id}>
              <EducationItem
                editMode={props.editMode}
                itemID={id}
                degree={degree}
                school={school}
                startDate={startDate}
                endDate={endDate}
                enrolled={currentlyEnrolled}
              />
            </li>
          );
        })}
      </ul>
      <button type='button' value='add'>
        Add Education
      </button>
    </fieldset>
  );
}
