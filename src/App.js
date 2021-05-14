import React, { Component } from 'react';
import Header from './components/Header/Header';
import CV from './components/CV/CV';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className='main' aria-live='polite'>
          <CV />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
