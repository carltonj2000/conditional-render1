import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import P1conditionalRendering from '../pages/p1conditionalRendering/p1conditionalRendering';
import P2recompose from '../pages/p2recompose';
import P3routing from '../pages/p3routing/p3routing';
import { App, AppHeader, AppTitle } from '../utils/styles';

class AppC extends Component {
  page = {
    1: {title: 'Conditional Rendering'},
    2: {title: 'Recompose Functional Package'},
    3: {title: 'Routing'},
  }

  render() {
    return (
      <App>
        <Switch>
          <Route path="/page1" render={() => (<div>
            <AppHeader><AppTitle>{this.page[1].title}</AppTitle></AppHeader>
            <h4><Link to="/">Home</Link></h4>
            <P1conditionalRendering page="1" />
          </div>)} />
          <Route path="/page2" render={() => (<div>
            <AppHeader><AppTitle>{this.page[2].title}</AppTitle></AppHeader>
            <h4><Link to="/">Home</Link></h4>
            <P2recompose page="1" />
          </div>)} />
          <Route path="/page3" render={() => (<div>
            <AppHeader><AppTitle>{this.page[3].title}</AppTitle></AppHeader>
            <h4><Link to="/">Home</Link></h4>
            <P3routing page="3" />
          </div>)} />
          <Route render={() => (<div>
            <AppHeader><AppTitle>Top Level</AppTitle></AppHeader>
            <ul>
            <li><h3><Link to="/page1">{this.page[1].title}</Link></h3></li>
              <li><h3><Link to="/page2">{this.page[2].title}</Link></h3></li>
              <li><h3><Link to="/page3">{this.page[3].title}</Link></h3></li>
            </ul>
          </div>)} />
        </Switch>
      </App>
    );
  }
}

export default AppC;
