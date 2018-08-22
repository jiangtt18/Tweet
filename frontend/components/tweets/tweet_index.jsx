import React from 'react';
import { withRouter } from 'react-router-dom';

import TweetsFromContainer from './tweets_form_container';


class TweetIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
   this.props.fetchTweets(this.props.currentUser.id);
  }

  renderTweets() {
    const tweets = Object.values(this.props.tweets);
    return tweets.map((tweet, idx)=> {
      return (
        <li className='tweet-item' key={`${idx}`}>
          {tweet.body}
        </li>
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
        <ul className='tweets-index'>
          {this.renderTweets()}
        </ul>
      </div>
    );
  }
}

export default TweetIndex;
