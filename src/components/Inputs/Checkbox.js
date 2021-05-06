import React from 'react';

export default function Checkbox(props) {
  const { containerClass = '', id, label, fieldClass = '', checked } = props;

  return (
    // Add tabindex so that clicking anywhere inside the container activates
    // the container's focus-within pseudo-class
    <div className={`c-checkbox ${containerClass}`} tabIndex='-1'>
      <label id={id} className='c-checkbox__label'>
        {label}
      </label>
      <div
        role='checkbox'
        className={`c-checkbox__field ${fieldClass}`}
        aria-checked={checked}
        aria-labelledby={id}
        tabIndex='0'
      ></div>
    </div>
  );
}
