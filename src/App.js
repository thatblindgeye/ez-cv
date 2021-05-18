import React, { Component } from 'react';
import Header from './components/Header/Header';
import CV from './components/CV/CV';
import githubDark from './assets/images/logos/GitHub-White-Mark-32px.png';
import githubLight from './assets/images/logos/GitHub-Black-Mark-32px.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'dark' };
  }

  // Initialize theme from local storage when component mounts,
  // or set theme to local storage if it doesn't exist
  componentDidMount() {
    let savedTheme = localStorage.getItem('theme');

    if (!localStorage.getItem('theme')) {
      savedTheme = 'dark';
      localStorage.setItem('theme', savedTheme);
    }

    this.setTheme(savedTheme);
  }

  setTheme = (themeName) => {
    this.setState({ theme: `${themeName}` }, () => {
      document.documentElement.className = this.state.theme;
    });
  };

  handleThemeToggle = (e) => {
    if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
      const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';

      this.setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  render() {
    const { theme } = this.state;
    const githubLogo = theme === 'light' ? githubLight : githubDark;

    return (
      <>
        <Header theme={theme} toggleEvent={this.handleThemeToggle} />
        <main className='l-main' aria-live='polite'>
          <CV />
        </main>
        <footer className='l-footer'>
          <a href='https://github.com/thatblindgeye' className='c-link'>
            <img src={githubLogo} alt='' className='c-link__image' />
            Visit my GitHub
          </a>
        </footer>
      </>
    );
  }
}
