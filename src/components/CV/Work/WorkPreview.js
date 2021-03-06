/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { createDateRange } from '../../../scripts/formatting';

export default function WorkPreview(props) {
  return (
    <div className='l-work-preview c-preview'>
      <h2 className='c-preview__header'>Work Experience</h2>
      <ul role='list' className='c-preview__list' aria-label='work experience'>
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
            <li key={id} className='c-preview__list-item'>
              <div className='c-item'>
                <h3 className='c-item__main-heading'>{position}</h3>
                <div className='c-item__secondary-heading'>{employer}</div>
                <div className='c-item__date-range'>
                  <span>
                    {createDateRange(startDate, endDate, currentlyEmployed)}
                  </span>
                </div>
                <div className='c-item__additional-details'>
                  <div className='c-item__responsibilities'>
                    <div>{responsibilities}</div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
