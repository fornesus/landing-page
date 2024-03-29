import React, { Component } from 'react';
import './App.css';

// App components:
import List from './List';

// Images:
import profile from './img/fornesa.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="heading">
            {/* The application logo: */}
            <img src={profile} className="App-logo" alt="logo" />
            {/* The application's heading: */}
            <code>Chris Fornesa&rsquo;s Dev Portfolio</code>
          </h1>
          {/* A list of portfolio components to display: */}
          <List />
        </header>
      </div>
    );
  }
}

export default App; // Export as App
