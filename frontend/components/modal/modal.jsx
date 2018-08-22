import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import ReviewFormContainer from '../reviews/reviewForm_container';

function Modal({modal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginContainer />;
      break;
    case 'signup':
      component = <SignupContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div
        className="modal-child"
        onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
