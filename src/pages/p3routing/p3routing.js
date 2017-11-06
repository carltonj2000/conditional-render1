import React from 'react';
import Categories from './categories/categories';
import P3R2 from './p3routing2';
import { Route, Switch, Link } from 'react-router-dom';

function P3routing(props) {
  const p3r1 = `${props.url}/categories`;
  const p3r2 = `${props.url}/p3r2`;
  return (<div><Switch>
    <Route path={p3r1} render={({match}) => {
      const p = {...props, url: match.url};
      return (<div><Categories {...p}/></div>)
    }} />
    <Route path={p3r2} render={({match}) => {
      const p = {...props, url: match.url};
      return (<div><P3R2 {...p}/></div>)
    }} />
    <Route render={() => (<div>
      <ul>
        <li><Link to={p3r1}>Udacity Project 2 router</Link></li>
        <li>
          <Link to={p3r2}>React Router v4 Tutorial</Link>&nbsp;
          based on <a href="https://css-tricks.com/react-router-4/">All About React Router 4</a>
        </li>
      </ul>
    </div>)} />
  </Switch></div>);
}

export default P3routing;
