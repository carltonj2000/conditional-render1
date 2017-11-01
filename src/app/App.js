import React, { Component } from 'react';

import './App.css';
import If from '../if/if';
import Ternary from '../ternary/ternary';
import Logic from '../logic/logic';
import Switch from '../switch/switch';
import Enums from '../enums/enums';
import HocNot from '../hoc/hocNot';
import Hoc from '../hoc/hoc';
import Hoc2 from '../hoc/hoc2';
import Hoc3 from '../hoc/hoc3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> <h1 className="App-title">Testing Space</h1> </header>
        <Hoc3 />
        <Hoc2 />
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
