import React from 'react';
import './App.css';
import {Welcome_page  } from './components/01-Welcome_page';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <p>Add your components here...</p>
        <Welcome_page/>
      </div>
    );
  }
}

export default App;
