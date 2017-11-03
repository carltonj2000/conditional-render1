import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import P1conditionalRendering from '../pages/p1conditionalRendering/p1conditionalRendering';
import P2recompose from '../pages/p2recompose';
import P3routing from '../pages/p3routing/p3routing';
import P4fetch from '../pages/p4fetch';
import { App, AppHeader, AppTitle } from '../utils/styles';

class AppC extends Component {
  page = {
    1: {title: 'Conditional Rendering', component: P1conditionalRendering},
    2: {title: 'Recompose Functional Package', component: P2recompose},
    3: {title: 'Routing', component: P3routing},
    4: {title: 'Fetch Data', component: P4fetch},
  }

  render() {
    return (
      <App>
        <Switch>
          {Object.entries(this.page).map(([k,v]) =>
          <Route key={k} path={`/page${k}`} render={({match, history}) => (<div>
              <AppHeader><AppTitle>{v.title}</AppTitle></AppHeader>
              <h4><Link to="/">Home</Link></h4>
            {React.createElement(v.component,
                {page: k, url: match.url, history: history})}
            </div>)} />
          )}
          <Route render={() => (<div>
            <AppHeader><AppTitle>Top Level</AppTitle></AppHeader>
            <ul>
              {Object.entries(this.page).map(([key,value]) =>
                <li key={key}>
                  <h3><Link to={`/page${key}`}>{value.title}</Link></h3>
                </li>
              )}
            </ul>
          </div>)} />
        </Switch>
      </App>
    );
  }
}

export default AppC;
