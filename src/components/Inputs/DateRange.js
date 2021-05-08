import React from 'react';
import Checkbox from './Checkbox';

export default function DateRange(props) {
  const { dateID, startDate, endDate, enrolled } = props;

  const preventDisabledInteraction = (e) => {
    if (enrolled && (e.type === 'click' || e.key !== 'Tab')) {
      e.preventDefault();
    }
  };

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
          onClick={preventDisabledInteraction}
          onKeyDown={preventDisabledInteraction}
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
