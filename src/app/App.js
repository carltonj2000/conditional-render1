import React, { Component } from 'react';

import './App.css';
import If from '../if/if';
import Ternary from '../ternary/ternary';
import Logic from '../logic/logic';
import Switch from '../switch/switch';
import Enums from '../enums/enums';
import HocNot from '../hoc/hocNot';
import Hoc from '../hoc/hoc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> <h1 className="App-title">Testing Space</h1> </header>
        <Hoc />
        <HocNot />
        <Enums />
        <Switch />
        <Logic />
        <Ternary />
        <If />
      </div>
    );
  }
}

export default App;
