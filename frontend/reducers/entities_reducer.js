import {combineReducers} from 'redux';

import tweetReducer from './tweet_reducer';

export default combineReducers({
  tweet: tweetReducer
});
