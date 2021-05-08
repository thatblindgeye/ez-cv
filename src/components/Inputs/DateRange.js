import React from 'react';
import Checkbox from './Checkbox';

export default function DateRange(props) {
  const { dateID, startDate, endDate, enrolled } = props;

  return (
    <div>
      <label htmlFor={`start-date-${dateID}`}>From</label>
      <input type='date' id={`start-date-${dateID}`} defaultValue={startDate} />

      <label htmlFor={`end-date-${dateID}`}>To</label>
      <input
        type='date'
        id={`end-date-${dateID}`}
        defaultValue={endDate}
        disabled={enrolled ? true : false}
      />
      <Checkbox
        id={`enrolled-${dateID}`}
        label='Currently enrolled'
        fieldClass='c-checkbox__field--large'
      />
    </div>
  );
}
