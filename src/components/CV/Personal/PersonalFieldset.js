import React from 'react';
import SimpleInput from '../../Inputs/SimpleInput';
import TextArea from '../../Inputs/TextArea';

export default function PersonalFieldset({
  name,
  summary,
  phone,
  email,
  location,
  linkedIn,
  personalSite,
  changeEvent,
}) {
  return (
    <fieldset id='personal-fieldset'>
      <legend>
        <h2>Personal Info</h2>
      </legend>
      <small className='c-required__notice'>
        <span className='c-required__indicator'>*</span>
        indicates a required field.
      </small>
      <SimpleInput
        type='text'
        label='Name'
        id='name'
        fieldName='name'
        defaultValue={name}
        required
        changeEvent={changeEvent}
      />
      <TextArea
        label='Personal summary'
        id='summary'
        fieldName='summary'
        rows='3'
        defaultValue={summary}
        changeEvent={changeEvent}
      />
      <SimpleInput
        type='tel'
        label='Phone'
        id='phone'
        fieldName='phone'
        defaultValue={phone}
        required
        changeEvent={changeEvent}
      />
      <SimpleInput
        type='email'
        label='Email'
        id='email'
        fieldName='email'
        defaultValue={email}
        required
        changeEvent={changeEvent}
      />
      <SimpleInput
        type='text'
        label='Location'
        id='location'
        fieldName='location'
        defaultValue={location}
        changeEvent={changeEvent}
      />
      <SimpleInput
        type='url'
        label='LinkedIn'
        id='linkedin'
        fieldName='linkedIn'
        defaultValue={linkedIn}
        changeEvent={changeEvent}
      />
      <SimpleInput
        type='url'
        label='Website'
        id='personal-site'
        fieldName='personalSite'
        defaultValue={personalSite}
        changeEvent={changeEvent}
      />
    </fieldset>
  );
}
