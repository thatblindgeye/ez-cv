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
  blurEvent,
  errors,
}) {
  return (
    <fieldset className='c-fieldset c-fieldset__personal'>
      <legend>
        <h2 className='c-fieldset__legend'>Personal Info</h2>
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
        blurEvent={blurEvent}
        errors={errors.name}
      >
        <div className='c-input__error' aria-live='polite'>
          {errors.name}
        </div>
      </SimpleInput>
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
        pattern={'5'}
        changeEvent={changeEvent}
        blurEvent={blurEvent}
        errors={errors.phone}
      >
        <div className='c-input__error' aria-live='polite'>
          {errors.phone}
        </div>
      </SimpleInput>
      <SimpleInput
        type='email'
        label='Email'
        id='email'
        fieldName='email'
        defaultValue={email}
        required
        pattern='.{1,}@.{1,}\.com'
        changeEvent={changeEvent}
        blurEvent={blurEvent}
        errors={errors.email}
      >
        <div className='c-input__error' aria-live='polite'>
          {errors.email}
        </div>
      </SimpleInput>
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
