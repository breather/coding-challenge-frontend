import React, { Component } from 'react';
import Header from "./components/header/header"
import './App.css';
import LocationsViewController from './views/locations/LocationsViewController';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LocationsViewController />
      </React.Fragment>
    );
  }
}

export default App;
