import {merge} from 'lodash';

import {RECEIVE_TWEET, RECEIVE_TWEETS} from '../actions/tweet_action.js';

const tweetReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_TWEET:
    return merge({},oldState,{[action.tweet.id]: action.tweet});
    case RECEIVE_TWEETS:
      return action.tweets;
    default:
      return oldState;
  }
};

export default tweetReducer;
