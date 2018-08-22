import React from 'react';
import { connect } from 'react-redux';

import { login,receiveErrors } from '../../actions/session';
import Login from './login_form';

import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  errors: state.sessionError,
  formType: 'Log in',
});
const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(login(formUser)),
  otherForm : () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(receiveErrors([]))
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
