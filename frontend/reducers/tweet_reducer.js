import {merge} from 'lodash';

import {RECEIVE_TWEET, RECEIVE_TWEETS, DELETE_TWEET} from '../actions/tweet_action.js';

const tweetReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  console.log('reducer' , action.id)
  switch(action.type) {
    case RECEIVE_TWEET:
    return merge({},oldState,{[action.tweet.id]: action.tweet});
    case RECEIVE_TWEETS:
      return action.tweets;
    case DELETE_TWEET:
      let newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default tweetReducer;
