import React, { Component } from 'react';
import Header from './components/Header/Header';
import Checkbox from './components/Inputs/Checkbox';
import SimpleInput from './components/Inputs/SimpleInput';
import CV from './components/CV/CV';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          {/* Testing components */}
          <Checkbox
            id='tester'
            fieldClass='c-checkbox--large'
            label='Base'
            checked='false'
          />
          <SimpleInput id='tester2' label='Name' type='text' required />
          <SimpleInput
            id='tester3'
            label='Location'
            type='text'
            disabled={true}
          />
          {/* End testing components */}
          <CV />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
