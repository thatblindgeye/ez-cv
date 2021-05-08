import React from 'react';
import Checkbox from './Checkbox';

export default function DateRange(props) {
  const { dateID, startDate, endDate, enrolled } = props;

  return (
    <div className='c-date-range'>
      <div className='c-date-range__container'>
        <label htmlFor={`start-date-${dateID}`} className='c-date-range__label'>
          From
        </label>
        <input
          type='date'
          id={`start-date-${dateID}`}
          className='c-date-range__field'
          defaultValue={startDate}
        />
      </div>

      <div className='c-date-range__container'>
        <label htmlFor={`end-date-${dateID}`} className='c-date-range__label'>
          To
        </label>
        <input
          type='date'
          id={`end-date-${dateID}`}
          className='c-date-range__field'
          defaultValue={endDate}
          disabled={enrolled ? true : false}
          tabIndex={enrolled ? '-1' : '0'}
        />
        <Checkbox
          id={`enrolled-${dateID}`}
          label='Currently enrolled'
          fieldClass='c-date-range__checkbox c-checkbox__field--large'
        />
      </div>
    </div>
  );
}
