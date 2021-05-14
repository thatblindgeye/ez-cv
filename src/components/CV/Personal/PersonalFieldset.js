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
      <legend className='c-fieldset__legend'>
        <h2 className='c-fieldset__legend-title'>Personal Info</h2>
      </legend>
      <small className='c-required'>
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
        describedby='phone-instructions'
        /*
         * Match any conventional US format, including optional calling code
         *
         * Allow any number of spaces for ease of pointing out errors
         * to screen readers (multiple spaces won't appear in error message)
         */
        pattern={'(\\+\\d{1,}-? *)?\\(?\\d{3,}\\)?-? *\\d{3,}-? *\\d{3,}'}
        changeEvent={changeEvent}
        blurEvent={blurEvent}
        errors={errors.phone}
      >
        <div className='c-input__error' aria-live='polite'>
          {errors.phone}
        </div>
        <small id='phone-instructions' className='c-input__instructions'>
          Can include a country calling code (e.g. +1), paranthesis, hyphens or
          spaces.
        </small>
      </SimpleInput>
      <SimpleInput
        type='email'
        label='Email'
        id='email'
        fieldName='email'
        defaultValue={email}
        required
        pattern='.{1,}@.{1,}\.[a-zA-Z]{1,}'
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
        describedby='url-instructions'
        changeEvent={changeEvent}
        blurEvent={blurEvent}
      >
        <div className='c-input__error' aria-live='polite'>
          {errors.linkedIn}
        </div>
        <small id='url-instructions' className='c-input__instructions'>
          URL's must begin with either <code>https://</code> or{' '}
          <code>http://</code>
        </small>
      </SimpleInput>
      <SimpleInput
        type='url'
        label='Website'
        id='personal-site'
        fieldName='personalSite'
        defaultValue={personalSite}
        describedby='url-instructions'
        changeEvent={changeEvent}
        blurEvent={blurEvent}
      >
        <div className='c-input__error' aria-live='polite'>
          {errors.personalSite}
        </div>
      </SimpleInput>
    </fieldset>
  );
}
