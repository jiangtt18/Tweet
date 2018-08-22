import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import TweetIndexContainer from './tweets/tweet_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
        <Route path="/tweets" component={TweetIndexContainer} />
    </Switch>
  </div>
);

export default App;
