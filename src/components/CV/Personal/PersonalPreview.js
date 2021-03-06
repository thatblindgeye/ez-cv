import React from 'react';
import { ReactComponent as PhoneIcon } from '../../../assets/images/icons/phone.svg';
import { ReactComponent as EmailIcon } from '../../../assets/images/icons/email.svg';
import { ReactComponent as LocationIcon } from '../../../assets/images/icons/location.svg';
import { ReactComponent as SiteIcon } from '../../../assets/images/icons/link.svg';
import { convertPhoneToHREF } from '../../../scripts/formatting';

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
    <div className='l-personal-preview c-preview'>
      <div className='c-personal-main'>
        <h1 className='c-personal-main__name'>{name}</h1>
        <div className='c-personal-main__summary'>{summary}</div>
      </div>
      <address className='c-personal-contact'>
        {phone.trim() !== '' ? (
          <div className='c-personal-contact__phone'>
            <span>
              <PhoneIcon
                className='c-personal-contact__icon'
                aria-hidden='true'
              />
            </span>
            <a href={`tel:${convertPhoneToHREF(phone)}`}>{phone}</a>
          </div>
        ) : null}
        {email.trim() !== '' ? (
          <div className='c-personal-contact__email'>
            <span>
              <EmailIcon
                className='c-personal-contact__icon'
                aria-hidden='true'
              />
            </span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        ) : null}
        {location.trim() !== '' ? (
          <div className='c-personal-contact__location'>
            <span>
              <LocationIcon
                className='c-personal-contact__icon'
                aria-hidden='true'
              />
            </span>
            {location}
          </div>
        ) : null}
        {linkedIn.trim() !== '' ? (
          <div className='c-personal-contact__site'>
            <span>
              <SiteIcon
                className='c-personal-contact__icon'
                aria-hidden='true'
              />
            </span>
            <a href={linkedIn}>{linkedIn}</a>
          </div>
        ) : null}
        {personalSite.trim() !== '' ? (
          <div className='c-personal-contact__site'>
            <span>
              <SiteIcon
                className='c-personal-contact__icon'
                aria-hidden='true'
              />
            </span>
            <a href={personalSite}>{personalSite}</a>
          </div>
        ) : null}
      </address>
    </div>
  );
}
