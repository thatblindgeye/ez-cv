import React, { Component } from 'react';
import Header from './components/Header/Header';
import Checkbox from './components/Inputs/Checkbox';
import SimpleInput from './components/Inputs/SimpleInput';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          {/* Testing components */}
          <Checkbox
            id='tester'
            fieldClass='c-checkbox--medium'
            label='Base'
            checked='false'
          />
          <SimpleInput id='tester2' label='Name' type='text' required />
          <SimpleInput id='tester3' label='Location' type='text' />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
