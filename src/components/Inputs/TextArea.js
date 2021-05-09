import React from 'react';

export default function TextArea({ id, label, rows, defaultValue }) {
  return (
    <div className='c-textarea'>
      <label htmlFor={id} className='c-textarea__label'>
        {label}
      </label>
      <textarea
        id={id}
        className='c-textarea__field'
        rows={rows}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
}
