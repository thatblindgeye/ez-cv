/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import WorkItem from './WorkItem';

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
              <WorkItem
                editMode={props.editMode}
                itemID={id}
                position={position}
                employer={employer}
                startDate={startDate}
                endDate={endDate}
                responsibilities={responsibilities}
                employed={currentlyEmployed}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
