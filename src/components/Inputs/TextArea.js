import React from 'react';

export default function TextArea({
  id,
  label,
  fieldName,
  rows,
  defaultValue,
  changeEvent,
}) {
  return (
    <div className='c-textarea'>
      <label htmlFor={id} className='c-textarea__label'>
        {label}
      </label>
      <textarea
        id={id}
        className='c-textarea__field'
        name={fieldName}
        rows={rows}
        defaultValue={defaultValue}
        onChange={changeEvent}
      ></textarea>
    </div>
  );
}
