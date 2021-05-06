import React, { Component } from 'react';
import { ReactComponent as LightThemeIcon } from '../../assets/images/icons/light_theme.svg';
import { ReactComponent as DarkThemeIcon } from '../../assets/images/icons/dark_theme.svg';

class Accessibility extends Component {
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
    const { handleThemeToggle } = this;
    const iconClasses = 'c-switch__icon c-switch__icon--medium';

    return (
      <div className='c-accessibility-container'>
        <div
          role='switch'
          className='c-switch c-switch--theme'
          aria-checked={theme === 'dark' ? 'false' : 'true'}
          aria-label='enable light theme'
          tabIndex='0'
          title='Toggle theme'
          onClick={handleThemeToggle}
          onKeyDown={handleThemeToggle}
        >
          {theme === 'dark' ? (
            <DarkThemeIcon className={iconClasses} />
          ) : (
            <LightThemeIcon className={iconClasses} />
          )}
        </div>
      </div>
    );
  }
}

export default Accessibility;
