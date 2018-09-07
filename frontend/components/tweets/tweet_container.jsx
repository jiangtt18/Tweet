import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchAllTweets,
  deleteMyTweet,
  createMyTweet} from '../../actions/tweet_action.js';
import TweetIndex from './tweet_index.jsx';
import {openModal} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return{
    tweets: state.entities.tweet || {},
    currentUser: state.session.currentUser || {},
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchTweets: (userId) => dispatch(fetchAllTweets(userId)),
    openModal:(type) => dispatch(openModal(type)),
    deleteMyTweet: (id) => dispatch(deleteMyTweet(id)),
    createTweet: (tweet) => dispatch(createMyTweet(tweet)),
  };
};

export default
withRouter(connect(mapStateToProps, mapDispatchToProps)(TweetIndex));
