import React from 'react';
import { withRouter } from 'react-router-dom';

import TweetsFromContainer from './tweets_form_container';
import TweetIndexItem from './tweet_index_item';


class TweetIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
   this.props.fetchTweets(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    if(
      this.props.currentUser.id!== nextProps.currentUser.id
      ){
      this.props.fetchTweets(nextProps.currentUser.id);
    }
  }


  renderTweets() {
    const tweets = Object.values(this.props.tweets);
    const username = this.props.currentUser.username;
    return tweets.map((tweet, idx)=> {
      return (
        <TweetIndexItem
          tweet = {tweet}
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
        <ul className='tweets-index'>
          {this.renderTweets()}
        </ul>
      </div>
    );
  }
}

export default TweetIndex;
