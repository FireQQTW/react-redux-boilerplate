import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/layout'
import Home from './containers/pages/home';
import About from './containers/pages/about'

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </div>
)

export default routes
