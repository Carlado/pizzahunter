import React, { Component } from 'react';
import SearchBar from './searchbar';
import NavBarSplash from './navbar_splash';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <NavBarSplash />
        <div className="main-splash">

          <SearchBar />

        </div>
      </div>
    )
  }
}
