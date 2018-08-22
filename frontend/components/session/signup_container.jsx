import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

import{ createNewUser, receiveErrors} from '../../actions/session';
import SessionForm from './signup_form';
import {openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.sessionError,
    formType: 'signup',
  };
};
const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(createNewUser(formUser)),
  otherForm: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(receiveErrors([])),

});



export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
