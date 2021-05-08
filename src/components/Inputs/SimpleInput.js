import React from 'react';

/**
 * Use SimpleInput component only for the following input types:
 * email
 * search
 * tel
 * text
 * url
 */

export default function SimpleInput(props) {
  const { id, label, type, defaultValue, disabled, required } = props;

  const requiredIndicator = required ? (
    <span className='required-indicator' aria-hidden='true'>
      *
    </span>
  ) : null;

  return (
    <div className='c-input'>
      <label htmlFor={id} className='c-input__label'>
        {requiredIndicator}
        {label}
      </label>
      <input
        type={type}
        id={id}
        className='c-input__field'
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        aria-required={required}
      />
    </div>
  );
}
