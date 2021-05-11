import React from 'react';
import { ReactComponent as Checkmark } from '../../assets/images/icons/checkmark.svg';

export default function Checkbox(props) {
  const {
    id,
    containerClass = '',
    label,
    fieldClass = '',
    checkboxName,
    checked,
    changeEvent,
  } = props;

  return (
    <label htmlFor={id} className={`c-checkbox ${containerClass}`}>
      <span className='c-checkbox__label'>{label}</span>
      <input
        type='checkbox'
        id={id}
        className='c-checkbox__hidden'
        name={checkboxName}
        defaultChecked={checked}
        onChange={changeEvent}
      />
      <span className={fieldClass}>
        <Checkmark className='c-checkbox__icon' />
      </span>
    </label>
  );
}
