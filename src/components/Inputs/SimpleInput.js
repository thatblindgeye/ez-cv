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
    describedby,
    pattern,
    changeEvent,
    blurEvent,
    errors,
  } = props;

  // Place a styled asterisk next to labels for inputs that are required
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
        aria-describedby={describedby}
        onChange={changeEvent}
        onBlur={blurEvent}
      />
      {/* Pass in error or instruction fields as needed */}
      {props.children}
    </div>
  );
}
