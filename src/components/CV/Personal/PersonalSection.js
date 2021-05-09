import React, { Component } from 'react';
import PersonalFieldset from './PersonalFieldset';
import PersonalPreview from './PersonalPreview';

export default class PersonalSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Smith',
      summary: 'A short summary about my qualifications.',
      phone: '5555555555',
      email: 'john@smith.com',
      location: 'Nowhere, US',
      linkedIn: 'www.linkedin.com/johnsmith',
      personalSite: 'www.johnsmith.com',
    };
  }

  render() {
    const {
      name,
      summary,
      phone,
      email,
      location,
      linkedIn,
      personalSite,
    } = this.state;

    return (
      <>
        {this.props.editMode ? (
          <PersonalFieldset
            name={name}
            summary={summary}
            phone={phone}
            email={email}
            location={location}
            linkedIn={linkedIn}
            personalSite={personalSite}
          />
        ) : (
          <PersonalPreview
            name={name}
            summary={summary}
            phone={phone}
            email={email}
            location={location}
            linkedIn={linkedIn}
            personalSite={personalSite}
          />
        )}
      </>
    );
  }
}
