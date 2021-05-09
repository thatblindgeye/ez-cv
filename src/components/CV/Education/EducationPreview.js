/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import EducationItem from './EducationItem';

export default function EducationPreview(props) {
  return (
    <div className='l-education-preview c-section-preview'>
      <h2 className='c-section-preview__header'>Education</h2>
      <ul role='list' aria-label='education'>
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
    </div>
  );
}
