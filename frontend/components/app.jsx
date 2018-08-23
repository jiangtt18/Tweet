import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import TweetIndexContainer from './tweets/tweet_container';
import Home from './home/home';

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
        <Route path="/tweets" component={TweetIndexContainer} />
        <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
