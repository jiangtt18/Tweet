import {fetchTweets, createTweet} from '../utils/tweet_util.js';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_TWEET = 'RECEIVE_TWEET';


export const receiveAllTweets = (tweets) => ({
  type:RECEIVE_TWEETS,
  tweets
});

export const receiveTweet = (tweet) => ({
  type:RECEIVE_TWEET,
  tweet
});


export const fetchAllTweets = userId => dispatch => (
  fetchTweets(userId)
    .then(tweets => dispatch(receiveAllTweets(tweets)))
);


export const createMyTweet = (tweet) => dispatch => (
  createTweet(tweet)
    .then(resTweet => dispatch(receiveTweet(resTweet)))
);
