import React from 'react';

export default function PersonalPreview({
  name,
  summary,
  phone,
  email,
  location,
  linkedIn,
  personalSite,
}) {
  return (
    <div className='l-personal-preview c-section-preview'>
      <div className='c-personal-main'>
        <h1 className='c-personal-main__name'>{name}</h1>
        <div className='c-personal-main__summary'>{summary}</div>
      </div>
      <div className='c-personal-contact'>
        <div className='c-personal-contact__phone'>
          <span className='c-personal-contact__icon'></span>
          {phone}
        </div>
        <div className='c-personal-contact__email'>
          <span className='c-personal-contact__icon'></span>
          {email}
        </div>
        <div className='c-personal-contact__location'>
          <span className='c-personal-contact__icon'></span>
          {location}
        </div>
        <div className='c-personal-contact__linkedIn'>
          <span className='c-personal-contact__icon'></span>
          {linkedIn}
        </div>
        <div className='c-personal-contact__personalite'>
          <span className='c-personal-contact__icon'></span>
          {personalSite}
        </div>
      </div>
    </div>
  );
}
