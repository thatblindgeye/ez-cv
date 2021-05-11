/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import formatDate from '../../../scripts/date-formatter';

export default function WorkPreview(props) {
  return (
    <div className='l-work-preview c-section-preview'>
      <h2 className='c-section-preview__header'>Work Experience</h2>
      <ul role='list' aria-label='work experience'>
        {props.workList.map((item) => {
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
            <li key={id}>
              <div className='c-item'>
                <div className='c-item__main-heading'>{position}</div>
                <div className='c-item__secondary-heading'>{employer}</div>
                <div className='c-item__additional-details'>
                  {responsibilities}
                </div>
                <div className='c-item__date-range'>
                  <span>{startDate ? formatDate(startDate) : ''} to </span>
                  <span>
                    {currentlyEmployed
                      ? 'present'
                      : endDate === ''
                      ? 'unknown'
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
