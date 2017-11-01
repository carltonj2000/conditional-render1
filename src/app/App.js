import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import If from '../if/if';
import Ternary from '../ternary/ternary';
import Logic from '../logic/logic';
import SwitchCj from '../switch/switch';
import Enums from '../enums/enums';
import HocNot from '../hoc/hocNot';
import Hoc from '../hoc/hoc';
import Hoc2 from '../hoc/hoc2';
import Hoc3 from '../hoc/hoc3';
import P1recompose from '../pages/page1recompose';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> <h1 className="App-title">Testing Space</h1> </header>
        <Switch>
          <Route path="/page1" render={() => (
            <P1recompose />
          )}/>
          <Route render={() => (<div>
            <Hoc3 />
            <Hoc2 />
            <Hoc />
            <HocNot />
            <Enums />
            <SwitchCj />
            <Logic />
            <Ternary />
            <If />
          </div>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
