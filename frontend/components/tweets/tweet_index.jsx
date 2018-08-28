import React from 'react';
import { withRouter } from 'react-router-dom';

import TweetsFromContainer from './tweets_form_container';
import TweetIndexItem from './tweet_index_item';


class TweetIndex extends React.Component {
  constructor(props){
    super(props);
  }

  renderTweets() {
    const tweets = Object.values(this.props.tweets);
    const username = this.props.currentUser.username;
    return tweets.reverse().map((tweet, idx)=> {
      return (
        <TweetIndexItem
          tweet = {tweet}
          deleteTweet = {this.props.deleteMyTweet}
          createTweet = {this.props.createTweet}
          username = {username}
          key = {idx}
        />
      );
    });
  }

  render() {
    if(this.props.tweets === undefined){
      return (<p>loading</p>);
    }
    return(

      <div className='tweets-container'>
        <TweetsFromContainer />
        <section className='post-body'>
        <ul className='posts'>
          {this.renderTweets()}
        </ul>
        </section>
      </div>
    );
  }
}

export default TweetIndex;
