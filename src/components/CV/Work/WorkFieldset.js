/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import WorkItem from './WorkItem';

export default function WorkFieldset(props) {
  const { addButtonEvent, changeEvent, deleteButtonEvent, workList } = props;

  return (
    <fieldset id='work-fieldset'>
      <legend>
        <h2>Work Experience</h2>
      </legend>
      <ul role='list' aria-label='work experience'>
        {workList.map((item) => {
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
            <li key={id} id={id}>
              <WorkItem
                editMode={props.editMode}
                itemID={id}
                position={position}
                employer={employer}
                startDate={startDate}
                endDate={endDate}
                responsibilities={responsibilities}
                employed={currentlyEmployed}
                changeEvent={changeEvent}
                deleteButtonEvent={deleteButtonEvent}
              />
            </li>
          );
        })}
      </ul>
      <button type='button' value='add' onClick={addButtonEvent}>
        Add Work
      </button>
    </fieldset>
  );
}
