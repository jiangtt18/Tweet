import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchTweets} from './actions/tweet_action';
import {fetchAllTweets} from './actions/tweet_action';


document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  let store = configureStore();
  // let store;
  // if (window.currentUser){
  //   const preloadedState = {
  //     session: {currentUser: window.currentUser}};
  //     store = configureStore(preloadedState);
  //     delete window.currentUser;
  // } else {
  //     store = configureStore();
  // }

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchTweets = fetchTweets;
  window.fetchAllTweets = fetchAllTweets;

  ReactDOM.render(<h1>Welcome to CastleBnB</h1>, root); // render page
});

// ReactDOM.render(<Root store={store} />, root);
