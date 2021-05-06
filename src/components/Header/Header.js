import React from 'react';
import Accessibility from '../Accessibility/Accessibility';

export default function Header() {
  return (
    <header className={'c-header u-elevation--04dp'}>
      <Accessibility />
      <div className='c-app-logo'>EZ CV</div>
    </header>
  );
}
