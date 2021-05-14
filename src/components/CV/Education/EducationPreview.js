/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { formatDate } from '../../../scripts/formatting';

export default function EducationPreview(props) {
  return (
    <div className='l-education-preview c-preview'>
      <h2 className='c-preview__header'>Education</h2>
      <ul role='list' className='c-preview__list' aria-label='education'>
        {props.educationList.map((item) => {
          const { id, degree, school, startDate, endDate, currentlyEnrolled } =
            item;
          return (
            <li key={id} className='c-preview__list-item'>
              <div className='c-item'>
                <h3 className='c-item__main-heading'>{degree}</h3>
                <div className='c-item__secondary-heading'>{school}</div>
                <div className='c-item__date-range'>
                  {startDate || endDate || currentlyEnrolled ? (
                    <>
                      <span>
                        {startDate ? formatDate(startDate) : 'unknown'} to{' '}
                      </span>
                      <span>
                        {currentlyEnrolled
                          ? 'present'
                          : endDate === ''
                          ? 'unknown'
                          : formatDate(endDate)}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
