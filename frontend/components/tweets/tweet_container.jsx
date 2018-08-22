import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchAllTweets} from '../../actions/tweet_action.js';
import TweetIndex from './tweet_Index';
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

  };
};

export default
withRouter(connect(mapStateToProps, mapDispatchToProps)(TweetIndex));
