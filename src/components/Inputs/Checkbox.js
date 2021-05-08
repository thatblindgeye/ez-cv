import React from 'react';
import { ReactComponent as Checkmark } from '../../assets/images/icons/checkmark.svg';

export default function Checkbox(props) {
  const { id, containerClass = '', label, fieldClass = '' } = props;

  return (
    // Add tabindex so that clicking anywhere inside the container activates
    // the container's focus-within pseudo-class
    <label htmlFor={id} className={`c-checkbox ${containerClass}`}>
      {label}
      <input type='checkbox' id={id} className='c-checkbox__hidden' />
      <span className={fieldClass}>
        <Checkmark className='c-checkbox__icon' />
      </span>
    </label>
  );
}
