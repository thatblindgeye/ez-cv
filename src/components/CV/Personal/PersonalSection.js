import React, { Component } from 'react';
import PersonalFieldset from './PersonalFieldset';

export default class PersonalSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      summary: '',
      phone: '',
      email: '',
      location: '',
      linkedIn: '',
      personalSite: '',
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
        ) : null}
      </>
    );
  }
}
