import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <NavBarContainer />
  </div>
);

export default App;
