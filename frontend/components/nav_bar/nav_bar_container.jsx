import React from 'react';
import {connect} from 'react-redux';

import NavBar from './nav_bar_component';
import { logout , login} from '../../actions/session';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (formUser) => dispatch(login(formUser)),
  openModal: modal => dispatch(openModal(modal)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
