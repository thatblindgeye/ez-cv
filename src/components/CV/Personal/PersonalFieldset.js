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
        id='name'
        label='Name'
        type='text'
        defaultValue={name}
        required
      />
      <TextArea
        id='summary'
        label='Personal summary'
        rows='3'
        defaultValue={summary}
      />
      <SimpleInput
        id='phone'
        label='Phone'
        type='tel'
        defaultValue={phone}
        required
      />
      <SimpleInput
        id='email'
        label='Email'
        type='email'
        defaultValue={email}
        required
      />
      <SimpleInput
        id='location'
        label='Location'
        type='text'
        defaultValue={location}
      />
      <SimpleInput
        id='linkedin'
        label='LinkedIn'
        type='url'
        defaultValue={linkedIn}
      />
      <SimpleInput
        id='personal-site'
        label='Website'
        type='url'
        defaultValue={personalSite}
      />
    </fieldset>
  );
}
