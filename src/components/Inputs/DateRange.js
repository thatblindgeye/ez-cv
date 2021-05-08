import React from 'react';
import preventDisabledInteraction from '../../scripts/disabled-interaction';
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
          aria-disabled={enrolled ? true : false}
          onClick={(e) => {
            preventDisabledInteraction(e, enrolled);
          }}
          onKeyDown={(e) => {
            preventDisabledInteraction(e, enrolled);
          }}
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
