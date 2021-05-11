import React from 'react';
import preventDisabledInteraction from '../../scripts/disabled-interaction';
import Checkbox from './Checkbox';

export default function DateRange(props) {
  const {
    dateID,
    startDate,
    endDate,
    current,
    currentType,
    checkboxName,
    changeEvent,
  } = props;

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
          name='startDate'
          defaultValue={startDate}
          onChange={changeEvent}
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
          name='endDate'
          defaultValue={endDate}
          aria-disabled={current ? true : false}
          onClick={(e) => {
            preventDisabledInteraction(e, current);
          }}
          onKeyDown={(e) => {
            preventDisabledInteraction(e, current);
          }}
          onChange={changeEvent}
        />
      </div>
      <Checkbox
        id={`${currentType}-${dateID}`}
        label={`Currently ${currentType}`}
        containerClass='l-flex-row-reverse'
        fieldClass='c-date-range__checkbox c-checkbox__field--x-large'
        checkboxName={checkboxName}
        checked={current}
        changeEvent={changeEvent}
      />
    </div>
  );
}
