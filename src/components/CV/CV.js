import React, { Component } from 'react';

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: true };
  }

  render() {
    return <form autoComplete='off' noValidate></form>;
  }
}
