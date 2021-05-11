/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import formatDate from '../../../scripts/date-formatter';

export default function EducationPreview(props) {
  return (
    <div className='l-education-preview c-section-preview'>
      <h2 className='c-section-preview__header'>Education</h2>
      <ul role='list' aria-label='education'>
        {props.educationList.map((item) => {
          const { id, degree, school, startDate, endDate, currentlyEnrolled } =
            item;
          return (
            <li key={id}>
              <div className='c-item'>
                <div className='c-item__main-heading'>{degree}</div>
                <div className='c-item__secondary-heading'>{school}</div>
                <div className='c-item__date-range'>
                  <span>{formatDate(startDate)} to </span>
                  <span>
                    {currentlyEnrolled
                      ? 'present'
                      : endDate === ''
                      ? ''
                      : formatDate(endDate)}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
