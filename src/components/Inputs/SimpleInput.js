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
  const {
    id,
    label,
    type,
    fieldName,
    defaultValue,
    disabled,
    required,
    pattern,
    changeEvent,
    blurEvent,
    errors,
  } = props;

  const requiredIndicator = required ? (
    <span className='c-required__indicator' aria-hidden='true'>
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
        className={`c-input__field ${errors ? 'is-invalid' : ''}`}
        name={fieldName}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        pattern={pattern}
        aria-required={required}
        onChange={changeEvent}
        onBlur={blurEvent}
      />
      {props.children}
    </div>
  );
}
