import React, { Component } from 'react';
import PersonalFieldset from './PersonalFieldset';
import PersonalPreview from './PersonalPreview';

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

  handlePersonalChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    const { name, summary, phone, email, location, linkedIn, personalSite } =
      this.state;

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
            changeEvent={this.handlePersonalChange}
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
