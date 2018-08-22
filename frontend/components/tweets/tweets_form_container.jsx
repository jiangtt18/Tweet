import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {createMyTweet} from '../../actions/tweet_action.js';
import TweetForm from './tweet_form';
import {openModal} from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  return{
    currentUser: state.session.currentUser || {},
  };
};


const mapDispatchToProps = dispatch => {
  return{
    createTweet: (tweet) => dispatch(createMyTweet(tweet)),
    openModal:(type) => dispatch(openModal(type)),
  };
};

export default
 withRouter(connect(mapStateToProps, mapDispatchToProps)(TweetForm));
